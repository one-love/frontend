import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from 'store'
import { Login } from '..'


it('login page', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    requestLogin: jest.fn(),
    requestError: jest.fn(),
  }
  const component = mount((
    <Provider store={store}>
      <Login {...props} />
    </Provider>
  ))
  const emailInput = component.find('div[data-id="email"] div input')
  const passwordInput = component.find('div[data-id="password"] div input')
  const form = component.find('form')
  const emailEvent = {
    target: {
      value: 'admin@example.com',
    },
  }
  emailInput.simulate('change', emailEvent)
  const passwordEvent = {
    target: {
      value: 'Sekrit',
    },
  }
  passwordInput.simulate('change', passwordEvent)
  form.simulate('submit')
  expect(props.requestLogin.mock.calls[0][0].email).toBe(
    emailEvent.target.value,
  )
  expect(props.requestLogin.mock.calls[0][0].password).toBe(
    passwordEvent.target.value,
  )
})
