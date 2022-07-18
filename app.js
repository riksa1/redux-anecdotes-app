const express = require('express')
const app = express()

var db = [
  {
    content: 'If it hurts, do it more often',
    id: '47145',
    votes: 15
  },
  {
    content: 'Adding manpower to a late software project makes it later!',
    id: '21149',
    votes: 9
  },
  {
    content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    id: '69581',
    votes: 11
  },
  {
    content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    id: '36975',
    votes: 2
  },
  {
    content: 'Premature optimization is the root of all evil.',
    id: '25170',
    votes: 9
  },
  {
    content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    id: '98312',
    votes: 5
  }
]

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000

app.use(express.static('build'))
app.use(express.json())

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/anecdotes', (req, res) => {
  res.send(db)
})

app.post('/anecdotes', (req, res) => {
  db.push(req.body)
  res.send(req.body)
})

app.put('/anecdotes/:id', (req, res) => {
  const { id } = req.params
  var objIndex = db.findIndex((obj => obj.id === id))
  db[objIndex] = req.body
  res.send('success!')
})


app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 3000')
  /* eslint-enable no-console */
})
