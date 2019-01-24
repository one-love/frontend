import axios from 'axios'
import { API_ROOT, getCookie } from 'utils'


async function create(name) {
  const csrf = getCookie('csrf_access_token')
  const response = await axios.post(
    `${API_ROOT}/service`,
    { name },
    {
      headers: {
        'X-CSRF-TOKEN': csrf,
      },
    },
  )
  return response.data
}


async function edit(service, data) {
  const csrf = getCookie('csrf_access_token')
  const response = await axios.patch(
    `${API_ROOT}/service/${service.id}`,
    data,
    {
      headers: {
        'X-CSRF-TOKEN': csrf,
      },
    },
  )
  return response.data
}


async function fetchAll(page) {
  const csrf = getCookie('csrf_access_token')
  const response = await axios.get(
    `${API_ROOT}/service`,
    {
      headers: {
        'X-Page': page,
        'X-CSRF-TOKEN': csrf,
      },
    },
  )
  return response.data
}


async function fetch(id) {
  const csrf = getCookie('csrf_access_token')
  const response = await axios.get(
    `${API_ROOT}/service/${id}`,
    {
      headers: { 'X-CSRF-TOKEN': csrf },
    },
  )
  return response.data
}


async function remove(id) {
  const csrf = getCookie('csrf_access_token')
  const response = await axios.delete(
    `${API_ROOT}/service/${id}`,
    {
      headers: {
        'X-CSRF-TOKEN': csrf,
      },
    },
  )
  return response.data
}


export default {
  create,
  edit,
  fetch,
  fetchAll,
  remove,
}
