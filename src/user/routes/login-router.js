import { Router } from 'express'
import { UserModel } from '../models/index.js'
import { LoginController } from '../controllers/login-controller.js'

const loginRouter = Router()

const loginController = new LoginController({ userModel: UserModel })

loginRouter.post('/', loginController.login)

export default loginRouter
