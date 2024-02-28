import { connection } from '../../config/index.js'

export class UserModel {
  static async create ({ input }) {
    const {
      username,
      password
    } = input

    try {
      await connection.query(
        `INSERT INTO users (username, password)
          VALUES (?, ?);`,
        [username, password]
      )
    } catch (e) {
      throw new Error('Error creating user')
    }
  }

  static async getAll () {
    const [users] = await connection.query(
      'SELECT * FROM users;'
    )

    if (users.length === 0) return []

    return users
  }

  static async getByID ({ id }) {
    const [users] = await connection.query(
      'SELECT * FROM users WHERE id = ?;',
      [id]
    )

    if (users.length === 0) return null

    return users[0]
  }

  static async getByUserName ({ username }) {
    const [users] = await connection.query(
      'SELECT * FROM users WHERE username = ?;',
      [username]
    )

    if (users.length === 0) return null

    return users[0]
  }

  static async update ({ id, input }) {
    const {
      username,
      password
    } = input

    try {
      await connection.query(
        `UPDATE users
          SET username = ?, password = ?
          WHERE id = ?`,
        [username, password, id]
      )
    } catch (e) {
      throw new Error('Error updating user')
    }
  }

  static async delete ({ id }) {
    await connection.query(
      'DELETE FROM users WHERE id = ?;',
      [id]
    )
  }
}
