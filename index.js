const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const homeRoutes = require('./routes/home')
const courseRoutes = require('./routes/courses')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')

const hbs = exphbs.create({
    defaultLayoult: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/courses', courseRoutes)
app.use('/add', addRoutes)
app.use('/card', cardRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
})