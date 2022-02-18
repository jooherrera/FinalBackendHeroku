import { createTransport } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import Env from '@config/env'

/* ---------------------------------- GMAIL --------------------------------- */

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jooherrera4@gmail.com',
    pass: 'ztpcauvkrokgxmel',
  },
})

//Enviar Mail

export async function sendMail(mailOptions: any) {
  try {
    const response = await transporter.sendMail(mailOptions)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
