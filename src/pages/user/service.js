import axios from 'axios'
import { API_ROOT } from 'utils'


async function fetchAll(page = 0) {
  const response = await axios.get(
    `${API_ROOT}/users`,
    { headers: { 'X-Page': page } },
  )
  return response.data
}


export default {
  fetchAll,
}
