import express, { json } from 'express'
import { config } from 'dotenv'

import userRouter from './user/routes/user-router.js'
import loginRouter from './user/routes/login-router.js'

config()

function bootstrap () {
  const app = express()
  app.use(json())

  app.use('/users', userRouter)
  app.use('/login', loginRouter)

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`server starting on port http://localhost:${PORT}`)
  })
}

bootstrap()
