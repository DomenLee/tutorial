import * as types from './mutation-types'

export const getAllMessages = ({
  commit
}) => {
  setTimeout(() => {
    commit(types.RECEIVE_ALL, {
      messages
    })
  }, 1000)
}
