export default {
  set_name: (state, val) => {
    state.name = val
  },
  set_surname: (state, val) => {
    state.surname = val
  },
  set_user: (state, val) => {
    state.name = val.name
    state.surname = val.surname
    state.parent = val.parent
  }
}
