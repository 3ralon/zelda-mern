import express from 'express'
import games from './routes/games.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use('/games', games)

app.listen(PORT, () => {
  console.log(`Zelda-Backend listening on http://localhost:${PORT}`)
})
