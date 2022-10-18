import nodemailer from 'nodemailer'


 export function Email() {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "scalatestdev@gmail.com",
            pass: "sxktrofndduhlbkk"
        },
        tls: { rejectUnauthorized: false }
    });
    const mailOptions = {
        from: '"No Reply" <scalatestdev@gmail.com',
        to: 'vitor.silva@scaladatacenters.com',
        subject: 'E-mail enviado usando Node!',
        text: ('Error Server') 
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email enviado: ' + info.response);
        }
    })};
    
    //  Email();
