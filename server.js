const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://gateway:<password>@api-gateway-zhm2y.gcp.mongodb.net/api-gateway?retryWrites=true&w=majority";

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

MongoClient.connect(uri, (err, client) => {
    if (err) {
        return console.log(err)
    }
    db = client.db('api-gateway')
    
    app.listen(3000, function() {
        console.log('servidor executando na porta 3000')
    })
})


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/save', (req, res) => {
    db.collection('drivers').save(req.body, (err, result) => {
        if (err) {
            return console.log(err)
        }
        res.redirect('/') 
    })
})




