/* 3 - Autenticação deverá validar o usuário, se o usuário existe com o login e senha de acordo, deverá autenticar o usuário no Frontend, se não deverá retornar uma mensagem de erro o qual o Frontend deverá apresentar ao usuário. */

// Banco de dados, depois tem que tirar ele daqui
const users = [
  { id: 1, email: 'lucas@szsolucoes.com.br', password: 'teste@123' },
  { id: 2, email: 'joao@gmail.com', password: 'teste@123' },
  { id: 3, email: 'ana@outlook.com', password: 'teste@123' },
  { id: 4, email: 'maria@hotmail.com', password: 'teste@123' },
  { id: 5, email: 'gertrudez@bol.com', password: 'teste@123' },
]

const express = require('express')
const authentication = express.Router()

authentication.post('/token/validation', function(req, res) {
  const response = {
    token: req.headers.authorization,
    message: ''
  }

  if (!response.token) {
    response.message = ('Usuário não está autenticado!!!')
    throw 'Codigo 60 - Autenticação do usuário falhou, token inválido.'
  } else {
    response.message = ('Usuário já está autenticado no sistema, token válido.')
  }

  res.json(response)
})

authentication.post('/', function (req, res) {
  const newUser = {
    email: req.body.email,
    password: req.body.password
  }

  const newResponse = {
    usuarioExiste: false,
    message: '',
    token: ''
  }

  for (let index = 0; index < users.length; index++) {
    if (users[index].email === newUser.email && users[index].password === newUser.password) {
      newResponse.usuarioExiste = true
    }
  }

  if (newResponse.usuarioExiste === true) {
    newResponse.token = ('? TOKEN ?')
    newResponse.message = (`Usuário ${newUser.email} autenticado com sucesso!!!`)
  } else {
    newResponse.message = 'Falha na autenticação do usuário, NÃO EXISTE !!!'  
    throw 'Código 59 - Usuário inválido'
  }

  res.json(newResponse)
})

//export this router to use in our index.js
module.exports = authentication
