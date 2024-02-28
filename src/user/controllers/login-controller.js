import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class LoginController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  login = async (req, res) => {
    const { username, password } = req.body

    const user = await this.userModel.getByUserName({ username })

    const isValidPassword = user === null
      ? false
      : await bcrypt.compare(password, user.password)

    if (!user && !isValidPassword) {
      res.status(401).json({ message: 'invalid user or password' })
    }

    const userTokenize = {
      id: user.id,
      username: user.username
    }

    const token = jwt.sign(
      userTokenize,
      process.env.JWT_SECRET,
      {
        expiresIn: 60 * 60 * 24 * 7
      }
    )

    res.send({ username: user.username, token })
  }
}
