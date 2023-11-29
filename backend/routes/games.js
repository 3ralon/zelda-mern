import { Router } from 'express'
const games = Router()

games.route('')
    .get((req, res) => {
        res.send('Games Home Page')
    })

export default games