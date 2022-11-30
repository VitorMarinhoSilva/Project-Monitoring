import Express, { response } from 'express'
// import { TokenQbr } from './TestLogin.js';
import cors from 'cors'
import axios from 'axios';
import nodemailer from 'nodemailer'
import 'dotenv/config';
import path from 'path'
import hbs from 'nodemailer-express-handlebars'


const app = Express();

app.use(cors())
app.use(Express.json())

// app.engine ('handlebars', engine() )
// app.set ('view engine', 'handlebars')
// app.set ('views', './views')


// let status;
// let url;
app.post('/Email', function (req, res) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toDateString()


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "scalatestdev@gmail.com",
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
        from: '"No Reply" <scalatestdev@gmail.com',
        to: 'vitor.silva@scaladatacenters.com',
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



app.post("/login", async function (req, res) {

    const urls = []
    // url2 = req.body.url
    let status;
    let url = []
    // console.log(req.body.url)
    // console.log(req.body.status)

    await req.body.body.map(async value => {
        let token;
        console.log(Object.keys(value).includes('clientid'))

        if (Object.keys(value).includes('clientid')) {

            var data = `grant_type=client_credentials&client_id=${value.clientid}&client_secret=${value.clientsecret}&resource=${value.clientid}`
            // console.log(value.clientid)
            await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, {
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
                    .then(response => {
                        console.log({ url: response.config.url, status: response.status })
                        url.push({ url: response.config.url, status: response.status })
                    })

            })
        } else {
            axios(value.url)
                .then(response => {
                    console.log({ url: response.config.url, status: response.status })
                    url.push({ url: response.config.url, status: response.status })
                })
                .catch(error => {
                    status = error.response.status
                    url.push({ url: value.url, status: status });

                })

        }



    })

    // .catch(error => {
    // })

    // req.body.url.map((i) => {

    //     axios(i, {
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     }).then(response => {
    //             status = response.status
    //             url = response.config.url

    //         })

    //         .catch(error => {
    //             // console.log((error.response.status))
    //             status = error.response.status
    //             urls.push({ name: i.url, status: status });

    //             console.log(urls)

    //             if (urls.length > 0) {
    //                 axios.post("http://localhost:5000/Email", {
    //                     url: urls,
    //                 })
    //                 console.log('entrou')

    //             }

    //             // console.log ('Email enviado por erro')

    //         })

    // })

    // await axios(req.body.url, {
    //     headers: {
    //         'Authorization': 'Bearer ' + token
    //     }
    // })
    //     .catch(error => {
    //         // console.log((error.response.status))
    //         // status = 500
    //         status = error.response.status
    //         urls.push({ name: req.body.url, status: status });

    //         // if (urls.length) {
    //         //     axios.post("http://localhost:5000/Email", {
    //         //         url: urls,
    //         //     })
    //         //     console.log('entrou')

    //         // }
    //         // console.log ('Email enviado por erro')

    //     })



    //console.log('status', status)
    setTimeout(() => {

        // axios.post("http://localhost:5000/Email", {
        //     url: url,
        // })

        console.log(url, 'oiiiiiiiiiiiii')
    }, 10000);
    res.send(url)
    return url

});
app.listen(5000, () =>
    console.log('Servidor iniciado na porta 5000')
);