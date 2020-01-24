const app = require('../app.js')
const user = {
  name: 'Vasia',
  surname: 'Ivanov',
  parent: {
    name: 'Ivan',
    surname: 'Ivanov'
  }
}

app.get('/api/user', (req, res) => {
  return res.send(user)
})

app.put('/api/user', (req, res) => {
  user.name = req.body.data.name
  user.surname = req.body.data.surname
  return res.send(`PUT HTTP method on user resource. User is ${user.name} ${user.surname}`)
})
