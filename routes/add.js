const {Router} = require('express')
const router = Router()
const Course = require('../models/course')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add course',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const data = req.body
    const course = new Course(data.title, data.price, data.img)
    await course.save()
    res.redirect('/')
})

module.exports = router