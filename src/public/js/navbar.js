const showAll = () => {
  window.location = '/api/v1/product'
}
const login = () => {
  window.location = '/login'
}
const home = () => {
  window.location = '/'
}
const infoUpdate = () => {
  const id = '{{{auth.user._id}}}'
  window.location = `/user/${id}/edit`
}
const cart = () => {
  window.location = '/'
}
