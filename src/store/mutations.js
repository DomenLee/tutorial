import * as types from './mutation-types'

export default {
  [types.CHANG_TITLE] (state, title) {
    if (typeof title === 'string') {
      state.header.title = title
    }
  }
}
