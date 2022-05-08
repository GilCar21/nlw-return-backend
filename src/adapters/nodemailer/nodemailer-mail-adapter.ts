import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c7554454761186",
      pass: "a36374bd6a4501"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gil Carvalho <gjcn1997@gmail.com',
            subject,
            html: body,
        })
    }
}