import * as types from './mutation-types'

export const changeTitle = ({
  commit
}, title) => {
  commit(types.CHANG_TITLE, title)
}
