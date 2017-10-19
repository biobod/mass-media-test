const getGoodsList = storage => {
  const localStorage = storage && JSON.parse(storage.getItem('goods'))
  if(!localStorage || !localStorage.goodsList) {
    return []
  }
  return localStorage.goodsList
}
const setGoodList = newGoodsList => {
  const newObj = { goodsList: newGoodsList }
  const serialObj = JSON.stringify(newObj)
  localStorage.setItem('goods', serialObj)
}

export { getGoodsList, setGoodList }
