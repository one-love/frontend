import store from 'store'
import { requestLogin } from '../actions'


// eslint-disable-next-line no-unused-vars
const mockService = jest.fn((creds) => ({
  access_expire: 900,
  login: true,
  refresh_expire: 2592000,
}))


it('login saga', () => {
  store.dispatch(requestLogin(
    {
      email: 'admin@example.com',
      password: 'Sekrit',
    },
    mockService,
  ))
  const loginState = store.getState().login
  expect(loginState.pending).toBe(false)
  expect(loginState.error).toBe(null)
  expect(loginState.status).toBe(200)
})
