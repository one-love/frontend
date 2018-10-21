import axios from 'axios'
import { API_ROOT } from 'utils'


async function userList() {
  const response = await axios.get(`${API_ROOT}/users`)
  return response.data
}


export default { userList }
