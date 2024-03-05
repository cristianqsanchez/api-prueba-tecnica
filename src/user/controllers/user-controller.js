import { encrypt } from '../../utils/encrypt.js'

export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  create = async (req, res) => {
    const { username, password } = req.body

    const passwordHash = await encrypt(password)

    const input = { username, password: passwordHash }

    const user = await this.userModel.create({ input })

    res.status(201).json(user)
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll()
    res.json(users)
  }

  getByID = async (req, res) => {
    const { id } = req.params
    const user = await this.userModel.getByID({ id })

    if (user) return res.json(user)

    res.status(404).json({ message: 'User not found' })
  }

  update = async (req, res) => {
    const { id } = req.params
    const { username, password } = req.body

    const passwordHash = encrypt(password)

    const input = { username, password: passwordHash }

    await this.userModel.update({ id, input })

    res.status(200).json({ message: 'User was update succesful' })
  }

  delete = async (req, res) => {
    const { id } = req.params
    await this.userModel.delete({ id })

    res.status(200).json({ message: 'User was delete succesfull' })
  }
}
