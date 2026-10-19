const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 4000
const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./config/Db')

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello from back')
})

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello depuis le back arayane' })
})



connectDB()
app.listen(port,(req,res)=>{
    console.log("le serveur tourne dans le port "+ port)
})

