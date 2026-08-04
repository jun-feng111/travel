// 我的收藏：基于 localStorage，无需后端
const KEY = 'travel_favs'

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}
function write(list) {
  localStorage.setItem(KEY, JSON.stringify(list))
}

// item: { type:'city'|'spot'|'food', id, name, sub }
export function getFavorites() {
  return read()
}

export function isFav(type, id) {
  return read().some(f => f.type === type && f.id === id)
}

export function toggleFav(item) {
  const list = read()
  const idx = list.findIndex(f => f.type === item.type && f.id === item.id)
  if (idx >= 0) {
    list.splice(idx, 1)
    write(list)
    return false
  }
  list.push(item)
  write(list)
  return true
}

export function removeFav(type, id) {
  const list = read().filter(f => !(f.type === type && f.id === id))
  write(list)
}
