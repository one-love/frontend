import axios from 'axios'
import { API_ROOT } from 'utils'


async function provisionList(page) {
  const response = await axios.get(
    `${API_ROOT}/provision`,
    { headers: { 'X-Page': page } },
  )
  return response.data
}


export default { provisionList }
