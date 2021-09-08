/* 4 – Cadastro de Vacinação – O usuário deve estar logado no sistema, então será necessário antes de tudo realizar essa validação para continuar. Se caso o usuário não estiver autenticado, então retornar uma mensagem de erro para o frontend apresentar, como exemplo ( “Para se cadastrar é necessário estar logado no sistema” ).
Após validação receber os dados do formulário e validar os campos se estão de acordo e então prosseguir, senão retornar uma mensagem de erro.
Após validação de campos e dados, inserir o usuário na fila de cadastrados. ( Dica: A fila pode ser um array ). 
Após inserção retornar mensagem de sucesso para o frontend apresentar ao usuário.
( o usuário deve estar autenticado para acessar essa rota )
Obs: Não utilizaremos no momento qualquer banco de dados, qualquer informação salva deverá ser salva e escrita como variáveis dentro da api. */

// import users from '../../database/user'

const filaVacinacao = [
  {
    person: {
      name: 'Lucas Trevizan A.',
      email: 'lucas@szsolucoes.com.br',
      dataNascimento: '08/07/1998',
      telefone: '47 99656-4110',
      cep: '89203-320',
      tipoSanguineo: 'O-'
    }
  },
  {
    person: {
      name: 'Lucas Besen.',
      email: 'landre@szsolucoes.com.br',
      dataNascimento: '20/02/1998',
      telefone: '47 94678-5186',
      cep: '89203-219',
      tipoSanguineo: 'O+'
    }
  },
]

const express = require('express')
const vacinacao = express.Router()

vacinacao.post('/', function (req, res) {
  // console.log(users)
  filaVacinacao.push(
    {
      person: {
        name: req.body.username,
        email: req.body.email,
        dataNascimento: req.body.dataNascimento,
        telefone: req.body.telefone,
        cep: req.body.cep,
        tipoSanguineo: req.body.tipoSanguineo
      }
    }
  )
  // res.json(filaVacinacao)
  res.json('Usuário inserido com sucesso na fila de vacinação')
})

//export this router to use in our index.js
module.exports = vacinacao