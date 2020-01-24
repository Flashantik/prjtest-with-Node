<template>
  <div class="app">
    <b-form-group label="Your Country:">
      <b-form-input
        v-model="country"
        required
        placeholder="Enter country"
      />
    </b-form-group>
    <b-btn variant="primary" @click="saveOnServer">
      Save
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'PageCountry', // Made valid html5 element,
  data () {
    return {
      valueNotSave: false
    }
  },
  computed: { // Replacing data() with a computed field is more profittable
    country: {
      get () {
        return this.$store.getters['profile/country']
      },
      set (value) {
        this.$store.commit('profile/set_country', value)
        this.valueNotSave = true
      }
    }
  },
  mounted () {
    this.$store.dispatch('profile/get_profile') // getting Profile data from server
  },
  beforeRouteLeave (to, from, next) { // router event
    if (this.valueNotSave) { // Check if data has been changed
      if (window.confirm('Данные не сохранены, хотите покинуть страницу?')) {
        next()
      } else {
        next(false)
      }
    } else { // data is saved
      next()
    }
  },
  methods: {
    async saveOnServer () {
      try {
        const profile = await this.$axios.put('/api/profile', { // put method, save on server Profile data
          data: {
            country: this.country
          }
        })
        if (profile.status === 200) {
          this.valueNotSave = false
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
