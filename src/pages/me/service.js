import axios from 'axios'
import { API_ROOT, getCookie } from 'utils'


async function fetch() {
  const csrf = getCookie('csrf_refresh_token')
  const response = await axios.get(
    `${API_ROOT}/me`,
    {
      headers: { 'X-CSRF-TOKEN': csrf },
    },
  )
  return response.data
}


export default {
  fetch,
}
