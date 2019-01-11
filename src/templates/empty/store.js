import { observable } from 'mobx'


class ErrorStore {
  @observable message = ''

  @observable open = false
}


export default ErrorStore
