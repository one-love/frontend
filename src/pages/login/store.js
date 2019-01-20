import { observable } from 'mobx'
import service from './service'


class AuthStore {
  @observable accessToken = ''

  @observable accessExpire = 0

  @observable refreshToken = ''

  @observable refreshExpire = 0

  @observable auth = null

  @observable email = ''

  @observable password = ''

  async login() {
    try {
      const result = await service.login({
        email: this.email,
        password: this.password,
      })
      this.auth = true
      this.accessToken = result.access
      this.accessExpire = result.accessExpire
      this.refreshToken = result.refresh
      this.refreshExpire = result.refreshExpire
      return {
        status: 200,
        error: '',
      }
    } catch (error) {
      this.auth = false
      this.access = null
      this.accessExpire = null
      this.refresh = null
      this.refreshExpire = null
      return {
        error: error.response.data.message,
        status: error.response.status,
      }
    }
  }

  async logout() {
    try {
      await service.logout()
      this.auth = false
      this.accessToken = ''
      this.accessExpire = 0
      this.refreshToken = ''
      this.refreshExpire = 0
      return {
        status: 200,
        error: '',
      }
    } catch (error) {
      return {
        error: error.response.data.message,
        status: error.response.status,
      }
    }
  }

  async refresh() {
    try {
      const result = await service.refresh()
      this.accessToken = result.access
      this.accessExpire = result.accessExpire
      this.refreshExpire = result.refreshExpire
      return {
        status: 200,
        error: '',
      }
    } catch (error) {
      return {
        error: error.response.data.message,
        status: error.response.status,
      }
    }
  }
}


export default AuthStore
