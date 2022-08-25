const express = require('express')
const cors = require('cors')
const fs = require("fs")
const { application } = require('express')

const rawData = fs.readFileSync("server/units.json")
const data = JSON.parse(rawData)

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/units', (req, res) => {
    res.json(data.units)
})

app.post('/api/units', (req, res) => {
    const body = req.body
    console.log(body)
    const newUnit = {
        title: body.title,
        code: body.code,
        offering: body.offering,
        id: data.units.length
    }
    data.units.push(newUnit)
    res.json(newUnit)
})

// getting data by id
app.get('/api/units/:id', (req, res) => {
    const id = Number(req.params.id)
    data.unit = data.units.filter(u => u.id === id)[0]

    // error handling
    if (unit){
        res.json(unit)
    } else {
        res.status(404)
        res.send("<h1>Unit not found</h1>")
    }
})

app.delete ('/api/units/:id', (req, res) => {
    const id = Number(req.params.id)
    const len = data.units.length
    data.units = data.units.filter(u => u.id !== id)

    if (data.units.length < len){
        res.json("deleted")
    } else {
        res.status(404)
        res.send("<h1>Unit not found</h1>")
    }
})

app.put('/api/units/:id', (req, res) => {
    const newUnit = req.body
    const id = Number(req.params.id)
    data.units = data.units.map(e => id === e.id ? newUnit : e)
    res.json(newUnit)
    console.log("updated", newUnit) 
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})