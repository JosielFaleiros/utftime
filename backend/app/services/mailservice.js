'use strict'
const nodemailer = require('nodemailer')

console.log('[account]');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'aoxbc2d7e4eznz3h@ethereal.email', // generated ethereal user
    pass: 'bqPJK3dMZRaAWsWFmP'  // generated ethereal password
  }
})
// setup email data with unicode symbols
let defaultMailOptions = {
  from: '"Contato UTFTime " <contato@utftime.com>', // sender address
  to: 'josiel.2015@alunos.utfpr.edu.br, josiel.2015@alunos.utfpr.edu.br', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world? \n new world', // plain text body
  html: '<b>Hello world? \n new new world</b>' // html body
}
console.log('[transporter] created');
/*
deve receber o subject, texto e o destinatário
*/
function sendMail(subject, text, to) {
  // send mail with defined transport object
  defaultMailOptions.subject = subject
  defaultMailOptions.text = text
  defaultMailOptions.html = '<b>'+text+'</b>'
  defaultMailOptions.to = to
  console.log('[mailOptions]');
  console.log(defaultMailOptions);
  transporter.sendMail(defaultMailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    // Preview only available when sending through an Ethereal account
    // TODO: remove when using gmail or other.
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  })
}
module.exports = {sendMail}
