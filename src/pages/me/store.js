import { observable } from 'mobx'
import service from './service'


class MeStore {
  @observable detail = {}

  async fetch() {
    try {
      this.detail = await service.fetch()
      return {
        status: 200,
        error: '',
        result: this.detail,
      }
    } catch (error) {
      this.detail = {}
      return {
        error: error.response.data.message,
        status: error.response.status,
        result: this.detail,
      }
    }
  }
}

export default MeStore
