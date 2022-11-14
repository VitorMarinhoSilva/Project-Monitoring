import Express from 'Express';
// import { TokenQbr } from './TestLogin.js';
import cors from 'cors'
import axios from 'axios';
import nodemailer from 'nodemailer'

const app = Express();

app.use(cors())
app.use(Express.json())

// let status;
// let url;

app.post('/Email',  function (req, res) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toDateString()
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

    // res.status(200).send({ link: req.body.url, metodo: req.body.requi, status: req.body.status })
    const mailOptions = {
        from: '"No Reply" <scalatestdev@gmail.com',
        to: 'vitor.silva@scaladatacenters.com',
        subject: 'Erro em requisições',
        text: (`Erro de requisição em: 
        ${req.body.url}  
        ${req.body.requi} 
        ${req.body.status}  
        Date: ${today} `) };

    transporter.sendMail(mailOptions, function (error, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email enviado: ');
        }
    })
    res.send(mailOptions)
}



);


app.post("/login", async function (req, res) {

    let token;

    var data = `grant_type=client_credentials&client_id=${req.body.clientid}&client_secret=${req.body.clientsecret}&resource=${req.body.clientid}`

    await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, {
        headers: {
            'Accept': 'application/json;odate=verbose',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            token = response.data.access_token
        })

        .catch(error => {
            console.log(error)


        })

    let status;
    let url;

    await axios(req.body.url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            status = response.status
            url = response.config.url
        })
        .catch(error => {
            axios.post("http://localhost:5000/Email", {
                url: url,
                requi: "GET",
                status: status

            })
            console.log(error)

        })


    console.log(status, url)
    res.send(status, url)
    return status

});
app.listen(5000, () =>
    console.log('Servidor iniciado na porta 5000')
);