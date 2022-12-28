import { http } from '../http-common'

const getWhatsNew = () => {
  return http.get('/users/products/whats_new')
}

const ProductsService = {
  getWhatsNew
}

export default ProductsService
