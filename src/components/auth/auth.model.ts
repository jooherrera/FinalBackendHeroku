import { model, Schema } from 'mongoose'

type Auth = {
  email: string
  password: string
  status: string
  isAdmin: false
}

const AuthSchema = new Schema<Auth>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, default: 'incomplete', required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
)

export default model<Auth>('Auth', AuthSchema)
