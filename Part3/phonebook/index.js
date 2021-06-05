const http = require('http')
const express = require('express')
const app = express()
let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "645-568-2014"
      },
      {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
      },
      {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
      },
      {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
        
      }
  ]
  app.get('/', (request, response) => {
    response.send('<h1>Welcome to phonebook!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/info',(request,response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date}</p>`)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const Person = persons.find(p => p.id === id)
    
    if (Person) {
      response.json(Person)
    } else {
      response.status(404).end()
    }
  })
  

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)