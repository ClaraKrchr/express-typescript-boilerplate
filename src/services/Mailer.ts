import { ITheMailer } from '../interfaces/IMailer';
import nodemailer from 'nodemailer';

export class TheMailer implements ITheMailer {
  private transporter: any;

  constructor() {
    this.createUserAccount();
  }

  async eventToMail(message: string) {
    this.mailer(message);
  }

  private async createUserAccount() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    this.transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  }

  async mailer(message: string) {
    try {
      // send mail with defined transport object
      let info = await this.transporter.sendMail({
        from: '"Fred Foo 👻" <levalentindu31@hotmail.fr>', // sender address
        to: "vylhkin@live.fr", // list of receivers
        subject: "Message important", // Subject line
        text: message, // plain text body
        html: "<b>Un actuateur a été supprimé.</b>", // html body
      });

      // Id du message envoyé.
      console.log("Message sent: %s", info.messageId);

      // Lien pour préview l'email envoyé.
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch (exception) {
      console.log(exception);
    }
  }
}
