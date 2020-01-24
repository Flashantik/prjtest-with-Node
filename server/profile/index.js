const app = require('../app.js')

const profile = { country: 'Russia' }
app.get('/api/profile', (req, res) => {
  return res.send(profile)
})

app.put('/api/profile', (req, res) => {
  profile.country = req.body.data.country
  return res.send(`PUT HTTP method on profile resource. Country is ${req.body.data.country}`)
})
