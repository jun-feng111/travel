import { ref, onMounted, onUnmounted } from 'vue'
import { loadAMap } from '../api/amap'

export function useAMap(mapRef, options = {}) {
  const map = ref(null)
  const loaded = ref(false)
  let mapInstance = null

  async function initMap(forceCenter) {
    if (!mapRef.value) return

    try {
      const AMap = await loadAMap()
      if (mapInstance) {
        if (forceCenter) {
          mapInstance.setCenter(forceCenter)
        }
        return mapInstance
      }

      const center = forceCenter || options.center || [116.397428, 39.90923]
      mapInstance = new AMap.Map(mapRef.value, {
        zoom: options.zoom || 12,
        center: center,
        viewMode: '2D',
        mapStyle: 'amap://styles/whitesmoke'
      })

      if (options.showToolBar !== false) {
        mapInstance.addControl(new AMap.ToolBar({ position: 'RB' }))
      }
      if (options.showScale !== false) {
        mapInstance.addControl(new AMap.Scale())
      }

      loaded.value = true
      map.value = mapInstance
      return mapInstance
    } catch (e) {
      console.error('Failed to load AMap:', e)
    }
  }

  function setCenter(lng, lat) {
    if (mapInstance) {
      mapInstance.setCenter([lng, lat])
    }
  }

  function setZoom(zoom) {
    if (mapInstance) {
      mapInstance.setZoom(zoom)
    }
  }

  function addMarker(position, title, onClick) {
    const AMap = window.AMap
    if (!mapInstance || !AMap) return null

    const marker = new AMap.Marker({
      position: [position.lng, position.lat],
      title: title,
      offset: new AMap.Pixel(-13, -30)
    })

    if (onClick) {
      marker.on('click', onClick)
    }

    mapInstance.add(marker)
    return marker
  }

  function addMarkers(items, onClick) {
    const AMap = window.AMap
    if (!mapInstance || !AMap) return []

    const markers = items.map(item => {
      const marker = new AMap.Marker({
        position: [item.location.lng, item.location.lat],
        title: item.name,
        offset: new AMap.Pixel(-13, -30)
      })
      if (onClick) marker.on('click', () => onClick(item))
      return marker
    })

    mapInstance.add(markers)
    return markers
  }

  function clearMarkers(markers) {
    if (mapInstance && markers?.length) {
      mapInstance.remove(markers)
    }
  }

  function fitView() {
    if (mapInstance) {
      mapInstance.setFitView()
    }
  }

  function destroy() {
    if (mapInstance) {
      mapInstance.destroy()
      mapInstance = null
      map.value = null
      loaded.value = false
    }
  }

  onUnmounted(destroy)

  return {
    map,
    loaded,
    initMap,
    setCenter,
    setZoom,
    addMarker,
    addMarkers,
    clearMarkers,
    fitView,
    destroy
  }
}
