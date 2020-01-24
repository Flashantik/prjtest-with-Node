export default {
  async get_user ({ commit }) {
    try {
      const user = await this.$axios.get('/api/user')
      commit('set_user', user.data)
    } catch (error) {
      console.error(error)
    }
  }
}
