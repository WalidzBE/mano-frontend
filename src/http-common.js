import axios from 'axios'

const baseURL = 'https://api.manoapp.com/api/v1'

const http = axios.create({
  baseURL,
  headers: {
    StoreID: 4,
    Authorization: 'f44a4aabfc5992514d262d7f517327e7',
    UserAddressID: 60877,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export { baseURL, http }
