import { IAuthDto } from '@types'

class AuthDto {
  private token: string
  private id: string
  constructor(info: IAuthDto) {
    this.id = String(info.id)
    this.token = info.token
  }
}

export default AuthDto
