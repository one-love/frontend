import axios from 'axios'
import { API_ROOT } from 'utils'


async function serviceList(page) {
  const response = await axios.get(
    `${API_ROOT}/service`,
    { headers: { 'X-Page': page } },
  )
  return response.data
}


export default { serviceList }
