import HttpRequest from '@/lib/axios'
// import config from '@/config'
const baseUrl = `/api`
const axios = new HttpRequest(baseUrl)
export default axios
