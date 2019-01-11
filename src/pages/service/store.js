import { observable } from 'mobx'
import service from './service'


export default class ServiceStore {
  @observable detail = {
    author: {},
  }

  @observable list = {
    data: [],
    total: 0,
    pages: 0,
  }

  async fetch(id) {
    try {
      const result = await service.fetch(id)
      this.detail = result
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

  async fetchAll(page = 0) {
    try {
      const result = await service.fetchAll(page)
      this.list.total = result.total
      this.list.pages = result.pages
      this.list.data = result.data
      return {
        status: 200,
        error: '',
      }
    } catch (error) {
      this.list.total = 0
      this.list.pages = 0
      this.list.data = []
      return {
        error: error.response.data.message,
        status: error.response.status,
      }
    }
  }

  async create(data) {
    try {
      const result = await service.create(data)
      this.list.total += 1
      this.list.data.push(result)
      return {
        status: 200,
        error: '',
        data: result,
      }
    } catch (error) {
      return {
        error: error.response.data.message,
        status: error.response.status,
      }
    }
  }

  async remove(id) {
    try {
      const result = await service.remove(id)
      this.list.data = this.list.data.filter(item => id !== item.id)
      if (this.detail.id === id) {
        this.detail = {}
      }
      return {
        status: 200,
        error: '',
        data: result,
      }
    } catch (error) {
      return {
        error: error.response.data.message,
        status: error.response.status,
      }
    }
  }

  async edit(cluster, data) {
    try {
      await service.edit(cluster, data)
      if (this.detail.id === cluster.id) {
        this.detail = { ...this.detail, ...data }
      }
      Object.keys(data).forEach(property => {
        cluster[property] = data[property]
      })
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
