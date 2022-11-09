import axios from 'axios';
import 'dotenv/config';


let res;
const config = {
  headers: {
    'Accept': 'application/json;odate=verbose',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
}

async function TokenQbr() {

  var data = `grant_type=client_credentials&client_id=${process.env.CLIENT_ID_QBR}&client_secret=${process.env.CLIENT_SECRET_QBR}&resource=${process.env.RESOURCE_QBR}`
  // var dataDrill =  "grant_type=client_credentials&client_id=ca75cbb3-712e-4477-9390-a0e1c761df86&client_secret=2Ad8Q~Wana7zRoXfjAXojh.PhaUnK2WJcn9KEbhn"

  await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, config)
    .then(response => res = response.data.access_token)
    .catch(erro => console.log(erro))
  console.log(res)
}
TokenQbr()


async function TokenRack() {

  var data = `grant_type=client_credentials&client_id=${process.env.CLIENT_ID_RACK}&client_secret=${process.env.CLIENT_SECRET_RACK}&resource=${process.env.CLIENT_ID_RACK}`
  // var dataDrill =  "grant_type=client_credentials&client_id=ca75cbb3-712e-4477-9390-a0e1c761df86&client_secret=2Ad8Q~Wana7zRoXfjAXojh.PhaUnK2WJcn9KEbhn"

  await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, config)
    .then(response => res = response.data.access_token)
    .catch(erro => console.log(erro))
  console.log(res)
}
TokenRack()











