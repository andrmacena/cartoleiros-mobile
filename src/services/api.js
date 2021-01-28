import axios from 'axios'

const api = axios.create({
   baseURL: 'https://cartoleiros-service.herokuapp.com',
})

export default api


