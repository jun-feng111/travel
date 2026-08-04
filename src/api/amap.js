import { AMAP_KEY } from './apikey'

let amapLoader = null

export function loadAMap() {
  if (amapLoader) return amapLoader

  amapLoader = new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
      return
    }

    const callbackName = 'amap_init_callback_' + Date.now()
    window[callbackName] = () => {
      resolve(window.AMap)
      delete window[callbackName]
    }

    const script = document.createElement('script')
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${AMAP_KEY}&plugin=AMap.ScrollWheelZoom,AMap.ToolBar,AMap.Scale,AMap.ControlBar,AMap.Geocoder,AMap.PlaceSearch,AMap.AutoComplete,AMap.DistrictSearch,AMap.Weather,AMap.Driving,AMap.Walking,AMap.Transfer&callback=${callbackName}`
    script.async = true
    script.onerror = reject
    document.head.appendChild(script)
  })

  return amapLoader
}

export function getAMap() {
  return window.AMap
}

export function searchPoi(keyword, city, type) {
  return new Promise((resolve, reject) => {
    const AMap = getAMap()
    if (!AMap) { reject('AMap not loaded'); return }

    const placeSearch = new AMap.PlaceSearch({
      city: city,
      citylimit: false,
      extensions: 'base'
    })

    placeSearch.search(keyword, (status, result) => {
      if (status === 'complete' && result.poiList) {
        resolve(result.poiList.pois.map(p => ({
          id: p.id,
          name: p.name,
          address: p.address,
          location: p.location ? { lng: p.location.lng, lat: p.location.lat } : null,
          tel: p.tel,
          type: p.type,
          photos: p.photos ? p.photos.map(ph => ph.url) : [],
          rating: p.biz_ext?.rating ? parseFloat(p.biz_ext.rating) : null
        })))
      } else {
        resolve([])
      }
    })
  })
}

export function autoComplete(keyword, city) {
  return new Promise((resolve, reject) => {
    const AMap = getAMap()
    if (!AMap) { reject('AMap not loaded'); return }

    const auto = new AMap.AutoComplete({ city })
    auto.search(keyword, (status, result) => {
      if (status === 'complete' && result.tips) {
        resolve(result.tips.filter(t => t.location).map(t => ({
          name: t.name,
          district: t.district,
          location: t.location ? { lng: t.location.lng, lat: t.location.lat } : null,
          adcode: t.adcode
        })))
      } else {
        resolve([])
      }
    })
  })
}

export function geocode(address) {
  return new Promise((resolve, reject) => {
    const AMap = getAMap()
    if (!AMap) { reject('AMap not loaded'); return }

    const geocoder = new AMap.Geocoder()
    geocoder.getLocation(address, (status, result) => {
      if (status === 'complete' && result.geocodes?.length) {
        resolve(result.geocodes[0])
      } else {
        resolve(null)
      }
    })
  })
}

export function getDistrict(adcode) {
  return new Promise((resolve, reject) => {
    const AMap = getAMap()
    if (!AMap) { reject('AMap not loaded'); return }

    const district = new AMap.DistrictSearch({
      level: 'city',
      subdistrict: 1
    })
    district.search(adcode, (status, result) => {
      if (status === 'complete' && result.districtList?.length) {
        resolve(result.districtList[0])
      } else {
        resolve(null)
      }
    })
  })
}
