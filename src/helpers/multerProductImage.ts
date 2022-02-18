import multer from 'multer'
import path from 'path'
import { v4 as uuid4 } from 'uuid'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/products'),
  filename: (req, file, cb) => {
    cb(null, `${uuid4()}${path.extname(file.originalname)}`)
  },
})

const limits = {
  fileSize: 1000000,
}

const uploadProductImage = multer({
  storage,
  limits,

  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(file.originalname))
    if (mimetype && extname) {
      return cb(null, true)
    }
    cb(new Error('Archivo no soportado'))
  },
}).single('imageFile')

export { uploadProductImage }
