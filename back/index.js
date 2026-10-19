const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./config/Db')
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Bonus 2 : plusieurs routes
app.get('/', (req, res) => {
    res.send('Hello from le front, Prénom Nom')
})

app.get('/login', (req, res) => {
    res.send('Bienvenue sur la route login')
})

app.get('/sign-up', (req, res) => {
    res.send('Bienvenue sur la route sign up')
})

// Route de l'étape précédente (tu peux la garder)
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello depuis le back arayane' })
})

// Bonus 3 : route API en JSON
app.get('/api/test', (req, res) => {
    res.json({ message: 'Connexion Front-Back réussie' })
})

connectDB()
app.listen(port, () => {
    console.log("le serveur tourne dans le port " + port)
})