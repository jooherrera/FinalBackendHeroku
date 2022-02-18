import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/avatar'),
  filename: (req, file, cb) => {
    cb(null, `${req.user.user}${path.extname(file.originalname)}`)
  },
})

const limits = {
  fileSize: 1000000,
}

const uploadFile = multer({
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
}).single('avatar')

export { uploadFile }
