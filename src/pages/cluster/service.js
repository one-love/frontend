import axios from 'axios'
import { API_ROOT } from 'utils'


async function fetchAll(page) {
  const response = await axios.get(
    `${API_ROOT}/cluster`,
    { headers: { 'X-Page': page } },
  )
  return response.data
}


export default {
  fetchAll,
}
