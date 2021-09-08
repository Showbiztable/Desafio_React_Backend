// Banco de dados, depois tem que tirar ele daqui
const users = [
  { id: 1, email: 'lucas@szsolucoes.com.br', password: 'teste@123' },
  { id: 2, email: 'camila@gmail.com', password: 'teste@123' },
  { id: 3, email: 'ana@outlook.com', password: 'teste@123' },
  { id: 4, email: 'maria@hotmail.com', password: 'teste@123' },
  { id: 5, email: 'gertrudez@bol.com', password: 'teste@123' },
]

const express = require('express')
const logger = require('morgan');
const cors = require('cors');

const things = require('./routes/things')
const authentication = require('./routes/authentication')
const vacinacao = require('./routes/vacinacao')

const app = express()

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/', function (req, res) {
  res.send('You just called the post method at "/Hello World"')
})

app.get('/allUsers', function (req, res) {
  const userPermission = {
    token: req.headers.authorization,
    message: ''
  }

  if (!userPermission.token) {
    userPermission.message = ('Usuário não está autenticado!!!')
    throw 'Codigo 60 - Autenticação Falhou'
  } else {
    userPermission.message = ('A lista dos users ta na mão chefia')
    res.json({ data: users })
  }
})


// Middleware function to log request protocol
app.use('/things', function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
})
// Route handler that sends the response
app.use('/things', things)

app.use('/vacinacao', vacinacao)
app.use('/authentication', authentication)

app.get('*', function (req, res) {
  res.send('Sorry, this is an invalid URL')
})

app.listen(3001, () => console.log('API is running on http://localhost:3001/'))