const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'gabrielmouratiago@gmail.com',
        pass: '123'
    }
});

const mailOptions = {
    from: 'gabrielmouratiagol@gmail.com',
    to: 'gabrielmouratiago@gmail.com',
    subject: 'Assunto do e-mail',
    text: 'Conteúdo do e-mail'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});

