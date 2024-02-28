import { Router } from 'express'
import { UserController } from '../controllers/user-controller.js'
import { UserModel } from '../models/index.js'

const userRouter = Router()

const userController = new UserController({ userModel: UserModel })

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.getByID)

userRouter.post('/', userController.create)

userRouter.patch('/:id', userController.update)

userRouter.delete('/:id', userController.delete)

export default userRouter
