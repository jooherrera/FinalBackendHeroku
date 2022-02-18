import bcrypt from 'bcryptjs'

export const newAuth = (email: string, password: string, isAdmin: boolean) => {
  return Object.freeze({
    email: email,
    password: encryptPassword(password),
    status: 'incomplete',
    isAdmin: isAdmin,
  })
}

const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  const passCrypt = bcrypt.hashSync(password, salt)
  return passCrypt
}
