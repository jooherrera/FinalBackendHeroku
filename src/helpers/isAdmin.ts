import Env from '@config/env'

export const isAdmin = (email: string): boolean => {
  return email === Env.ADMIN_EMAIL
}
