// localStorage 写入
const setItem = items => {
  if (typeof items !== 'object') {
    console.error(`localStorage 需要传入一个object, 而不是${typeof items}`)
    return false
  }
  Object.keys(items).forEach(key => {
    window.localStorage.setItem(key, JSON.stringify(items[key]))
  })
}

// localStorage 读取
const getItem = key => {
  return JSON.parse(window.localStorage.getItem(key))
}

// localStorage 删除
const removeItem = key => {
  window.localStorage.removeItem(key)
}

export default {
  setItem,
  getItem,
  removeItem
}
