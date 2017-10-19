const getGoodsList = storage => {
  const localStorage = storage ? JSON.parse(storage.getItem('goods')) : {}
  return  localStorage.goodsList || []
}

export { getGoodsList }
