//queryparams si viene una key trae la data
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('isomorphic-fetch')
const app =express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

const url = 'https://klassi-proto.herokuapp.com/api/users'

/* sync await
app.get('/', async (req, res) => {
    const nombre = req.query.nombre
    if(nombre){
        const response = await fetch(url)
        const json = await response.json()
        const user = json.result.find(e => e.nombre == nombre)
        return res.json({result:json})
    }
    return res.json({result:json})
})

app.listen(3008)

Promises*/

app.get('/', (req, res) => {
    const nombre = req.query.nombre
    fetch(url)
    .then(resp => resp.json())
    .then(json =>{
        if(nombre){
            const user = json.result.find(e => e.nombre == nombre)
            return res.json({result:user})
        } else {
            return res.json({result: json})
        }
    })
})

app.listen(3008)