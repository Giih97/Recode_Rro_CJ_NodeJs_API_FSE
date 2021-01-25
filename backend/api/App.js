const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require ('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {

    
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'fstackeletro'
    }) 


    connection.query('SELECT * FROM produtos;',  (error, result)  => { 
         //todo select vai ficar em dados
         res.json(result)
         
    })
}) 


app.get('/pedidos', (req, res) => {

    
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'fstackeletro'
    }) 


    connection.query('SELECT * FROM pedidos;',  (error, result)  => { 
         //todo select vai ficar em dados
         res.json(result)
    })
}) 


app.post('/pedidos', (req, res) => {

    const post = req.body
    console.log (post)
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'fstackeletro'
    }) 

    /* desestruturação dos dados vindo do body
    const {nome_do_cliente} = req.body
    const {endereco} = req.body
    const {telefone} = req.body
    const {nome_do_prod} = req.body
    const {valor_unit} = req.body
    const {quantidade} = req.body
    const {valor_total} = req.body
  

    // array com os dados
    let post = []

    // puxando os dados para dentro do array
    post.push({
        nome_do_cliente: nome_do_cliente,
        endereco:endereco,
        telefone:telefone,
        nome_do_prod:nome_do_prod,
        valor_unit:valor_unit,
        quantidade:quantidade,
        valor_total:valor_total
    })*/

    //? é quando não sabe o que virá
    connection.query('INSERT INTO pedidos SET?', post, () => {

        post = []
     return res.json(post)
     
  })

})




app.listen(3002,function(){
    console.log('funcionado no : http://localhost:3002!')
});