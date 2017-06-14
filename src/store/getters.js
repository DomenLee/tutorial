export const header = state => {
  let headerObj = {}

  switch (state.header.type) {
    case 1:
      headerObj.leftShow = false
      headerObj.rightShow = false
      break
    case 2:
      headerObj.leftShow = true
      headerObj.rightShow = false
      break
    case 3:
      headerObj.leftShow = true
      headerObj.rightShow = true
      break
  }
  headerObj.title = state.header.title

  return headerObj
}
