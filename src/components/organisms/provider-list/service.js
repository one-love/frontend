import axios from 'axios'
import { API_ROOT } from 'utils'


async function providerList(page) {
  const response = await axios.get(
    `${API_ROOT}/provider`,
    { headers: { 'X-Page': page } },
  )
  return response.data
}


export default { providerList }
