export default {
  DOUBLE_API(state, payload) {
    const newState = Object.assign({}, state)
    newState.apiMeta = newState.apiMeta.concat(newState.apiMeta)
    return newState
  },
  TESTS_RUN (state, payload) {
    const newState = Object.assign({}, state)
    newState.testResponse = Object.assign({}, newState.testResponse)
    newState.testResponse[payload.id] = payload.result
    return newState
  }
}