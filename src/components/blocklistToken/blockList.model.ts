import { model, Schema } from 'mongoose'

type blockList = {
  token: string
}

const blockListSchema = new Schema<blockList>(
  {
    token: { type: String },
  },
  {
    timestamps: true,
  }
)

export default model<blockList>('blocklist', blockListSchema)
