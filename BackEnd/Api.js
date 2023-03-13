import Express, { response } from 'express'
import cors from 'cors'
import axios from 'axios';
import nodemailer from 'nodemailer'
import 'dotenv/config';
import path from 'path'
import hbs from 'nodemailer-express-handlebars'


const app = Express();

app.use(cors())
app.use(Express.json())


// This code sets up an endpoint for a POST request to "/Email". When this endpoint is accessed, it uses Nodemailer and Handlebars to send an email to a specified email address with information about errors that occurred during HTTP requests made to URLs. 
//The function creates a nodemailer transporter object, which uses Gmail SMTP server settings to send an email. It then configures Handlebars to use ".hbs" files located in the "/views" directory as email templates.

app.post('/Email', function (req, res) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toDateString()


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "your email smtp",
            pass: process.env.SECRETMAIL
        },
        tls: { rejectUnauthorized: false }
    });
    const handlebarOptions = {
        viewEngine: {
            extName: ".hbs",
            partialsDir: path.resolve('./views'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views'),
        extName: ".hbs",
    }
    transporter.use('compile', hbs(handlebarOptions));


    const mailOptions = {
        from: '"No Reply" <your email smtp>',
        to: 'your email you want to receive',
        subject: 'Erro em requisições',

        // Date: ${today} `),
        template: 'template',
        context: {
            url: req.body.url,
            Date: `${today}`
        }
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ');
        }
    })
    res.send(mailOptions)
}

);


//The purpose of this code is to make a call to one or several APIs (Application Programming Interfaces) and check whether the response returns an HTTP status code 200 (OK) or a different status code. The code uses the axios library to make the API calls.

app.post("/login", async function (req, res) {

    const urls = []
    // url2 = req.body.url
    let status;
    let url = []


    //The code then uses the map function to iterate over the elements of the req.body.body array which contains a set of objects with information needed to make the API calls. On each iteration, the code checks whether the 'clientid' key exists on the object in question. If it exists, the code makes an access token request and then makes an API call using the access token returned in the access token request response. If it does not exist, the code makes a direct API call.

    await req.body.body.map(async value => {
        let token;

        if (Object.keys(value).includes('clientid')) {

            //Here is an example where a Microsoft Azure repository is used, in which you can pass the client_id and client_secret to be able to monitor an application directly.   
            var data = `grant_type=client_credentials&client_id=${value.clientid}&client_secret=${value.clientsecret}&resource=${value.clientid}`
            axios.post('YOUR REPOSITORY (For example: Azure, Github etc.', data, {
                headers: {
                    'Accept': 'application/json;odate=verbose',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(response => {
                axios(value.url, {
                    headers: {
                        'Authorization': 'Bearer ' + response.data.access_token
                    }
                })

                    //Objects with information about calls made to APIs are added to the url array. If a call returns a status code other than 200, the code sets the status variable to the status code returned in the response and adds the current calling object's information to the url array.
                    .then(response => {
                        // console.log({ nome: value.nome, url: response.config.url, status: response.status })
                        url.push({ nome: value.nome, req: value.req, url: response.config.url, status: response.status })
                    })

            })
        } else {
            axios(value.url)
                .then(response => {
                    // console.log({ nome: value.nome, req: value.req, url: response.config.url, status: response.status })
                    url.push({ nome: value.nome, req: value.req, url: response.config.url, status: response.status })
                })
                .catch(error => {
                    status = error.response.status
                    url.push({ nome: value.nome, req: value.req, url: value.url, status: status });

                })

        }



    })


    setTimeout(() => {


        const urlErro = url.filter(i => i.status > 300)
        if (urlErro.length > 0) {

            axios.post("http://localhost:5000/Email", {
                url: urlErro,
            })
        }

        console.log(url, 'oiiiiiiiiiiiii')
        res.send(url)
        return url
    }, 5000);


});
app.listen(5000, () =>
    console.log('Servidor iniciado na porta 5000')
);