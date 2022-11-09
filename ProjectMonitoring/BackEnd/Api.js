import Express from 'Express';
import { Email } from './MailSend.js';
import { TokenQbr } from './TestLogin.js';
import cors from 'cors'
import axios from 'axios';

const app = Express();

app.use(cors())
app.use(Express.json())

app.get('/Email', () =>
    Email()
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
            console.log(response.data.access_token)
            token = response.data.access_token
        } )
        .catch(erro => console.log(erro))

    let status;

    await axios(req.body.url, {
        headers: {
          'Authorization': 'Bearer ' + token
      }
      })
      .then(response => {
        status = response.status
      })

      console.log(status)
      res.send(status)
      return status

});
app.listen(5000, () =>
    console.log('Servidor iniciado na porta 5000')
);