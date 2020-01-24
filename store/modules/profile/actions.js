export default {
  async get_profile ({ commit }) {
    try {
      const profile = await this.$axios.get('/api/profile')
      commit('set_country', profile.data.country)
    } catch (error) {
      console.error(error)
    }
  }
}
