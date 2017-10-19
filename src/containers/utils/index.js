const getGoodsList = storage => {
  const localStorage = storage && JSON.parse(storage.getItem('goods'))
  if(!localStorage || !localStorage.goodsList) {
    return []
  }
  return localStorage.goodsList
}

export { getGoodsList }
