import mongoose from 'mongoose'

export const newMongooseId = () => {
  //   console.log(new mongoose.Types.ObjectId())
  return String(new mongoose.Types.ObjectId())
}
