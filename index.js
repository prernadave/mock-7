const express = require('express')
const app = express()
app.use(express.json())
const { connection } = require('./config/db')
const { signup } = require('./routes/signup')
const { login } = require('./routes/login')
const cors = require('cors')
const { detail } = require('./routes/user.details')
const { authentication } = require('./middleware/authentication')

app.get('/', (req, res) => {
    res.send('Welcome')
})
app.use(cors())
app.use('/api', signup)
app.use('/api', login)
app.use('/api',authentication, detail)

app.listen(5000, async () => {
    try {
        await connection
        console.log('connected to db');
        console.log('server is running on port 5000');
    } catch (error) {
        console.log(error);
        console.log('can not connect');
    }
})