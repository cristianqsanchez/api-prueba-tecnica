import bcrypt from 'bcrypt'

export const encrypt = async (data) => {
  const saltRounds = 10
  return await bcrypt.hash(data, saltRounds)
}
