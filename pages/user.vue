<template>
  <div class="app">
    <b-form-group label="Your Name:">
      <b-form-input
        v-model="name"
        required
        placeholder="Enter name"
      />
    </b-form-group>
    <b-form-group label="Your Surname:">
      <b-form-input
        v-model="surname"
        required
        placeholder="Enter surname"
      />
    </b-form-group>
    <b-btn variant="primary" @click="saveOnServer">
      Save
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'PageUser', // Made valid html5 element
  data () {
    return {
      valueNotSave: false
    }
  },
  computed: { // Replacing data() with a computed field is more profittable
    name: {
      get () {
        return this.$store.getters['user/name']
      },
      set (value) {
        this.$store.commit('user/set_name', value)
        this.valueNotSave = true
      }
    },
    surname: {
      get () {
        return this.$store.getters['user/surname']
      },
      set (value) {
        this.$store.commit('user/set_surname', value)
        this.valueNotSave = true
      }
    }
  },
  mounted () {
    this.$store.dispatch('user/get_user') // getting User data from server
  },
  beforeRouteLeave (to, from, next) {
    if (this.valueNotSave) { // Check if data has been changed
      if (window.confirm('Данные не сохранены, хотите покинуть страницу?')) {
        next()
      } else {
        next(false)
      }
    } else {
      next() // data is saved
    }
  },
  methods: {
    async saveOnServer () {
      try {
        const user = await this.$axios.put('/api/user', { // put method, save on server User data
          data: {
            name: this.name,
            surname: this.surname
          }
        })
        if (user.status === 200) {
          this.valueNotSave = false
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
