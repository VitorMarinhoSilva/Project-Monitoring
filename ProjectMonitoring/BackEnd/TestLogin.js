// import axios from 'axios';
// import 'dotenv/config';


// let res;
// const config = {
//   headers: {
//     'Accept': 'application/json;odate=verbose',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
// }

// export async function TokenQbr(clientid, clientsecret) {

//   var data = `grant_type=client_credentials&client_id=${clientid}&client_secret=${clientsecret}&resource=${clientid}`
//   // var dataDrill =  "grant_type=client_credentials&client_id=ca75cbb3-712e-4477-9390-a0e1c761df86&client_secret=2Ad8Q~Wana7zRoXfjAXojh.PhaUnK2WJcn9KEbhn"
// console.log(data)
//   await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, config)
//     .then(response => res = response.data.access_token)
//     .catch(erro => console.log(erro))
//     console.log(res)
//     return res
  
// }
// TokenQbr()
// export async function TokenQbr(clientid, clientsecret) {

//   var data = `grant_type=client_credentials&client_id=${process.env.CLIENT_ID_QBR}&client_secret=${process.env.CLIENT_SECRET_QBR}&resource=${process.env.CLIENT_ID_QBR}`
//   // var dataDrill =  "grant_type=client_credentials&client_id=ca75cbb3-712e-4477-9390-a0e1c761df86&client_secret=2Ad8Q~Wana7zRoXfjAXojh.PhaUnK2WJcn9KEbhn"
// // console.log(data)
//   await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, config)
//     .then(response => res = response.data.access_token)
//     .catch(erro => console.log(erro))
//   console.log(res)
// }
// TokenQbr()


// async function TokenRack() {

//   var data = `grant_type=client_credentials&client_id=${process.env.CLIENT_ID_RACK}&client_secret=${process.env.CLIENT_SECRET_RACK}&resource=${process.env.CLIENT_ID_RACK}`

//   await axios.post('https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/token', data, config)
//     .then(response => res = response.data.access_token)
//     .catch(erro => console.log(erro))
//   console.log(res)
// }
// TokenRack()

// async function testetoken(){
//   axios("https://qbrdev.azurewebsites.net/data", {
//     headers: {
//       'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJiM2QzNmIwMy1hMjE4LTRkMzktYWRiMi1kOTM1NTU1OWI2NzMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNTYyMjJlNy0yYWQwLTQzNTctODFmYy04NDg1Zjc5ZjU5ZWMvIiwiaWF0IjoxNjY4MDIxOTk3LCJuYmYiOjE2NjgwMjE5OTcsImV4cCI6MTY2ODAyNTg5NywiYWlvIjoiRTJaZ1lNaEtFRDEyU3JKOWYzdkV2RVVpVzZ3TUFBPT0iLCJhcHBpZCI6ImIzZDM2YjAzLWEyMTgtNGQzOS1hZGIyLWQ5MzU1NTU5YjY3MyIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2E1NjIyMmU3LTJhZDAtNDM1Ny04MWZjLTg0ODVmNzlmNTllYy8iLCJvaWQiOiJiYmVhYzc0NS1kMDlkLTRjNmItYjE1My1iMGIzZGE0YjIyODAiLCJyaCI6IjAuQVZFQTV5SmlwZEFxVjBPQl9JU0Y5NTlaN0FOcjA3TVlvamxOcmJMWk5WVlp0bk5SQUFBLiIsInN1YiI6ImJiZWFjNzQ1LWQwOWQtNGM2Yi1iMTUzLWIwYjNkYTRiMjI4MCIsInRpZCI6ImE1NjIyMmU3LTJhZDAtNDM1Ny04MWZjLTg0ODVmNzlmNTllYyIsInV0aSI6ImFDcjJqdUVYWlVHM0x4OW9wWUxYQUEiLCJ2ZXIiOiIxLjAifQ.Xm934_8iPj4Mm2gL9HQ0fCO-Amp9xf3Qem_0gjlqAvUNYoZTRB2WIN9ewbWha79u_uhxrtjcPC3kx_wvb_AU6LyAd8VqqTseqy5OtWsgzK11tCE9etb2i6PjVPz-CLFocsfkndrK4TxNAla0d9JV7l66RKpeMMji4y7_gM2w6E4TFWR_5J0ijJYCW-cpsyYGwln__btjgta-gCkNWBeYx-9PjL2QQgL7WRR_p9HIADDLj0AFZIkDqUsxLmkbiRGUSqa-ZJ7VtWDe0gZiCDRHu1g5NPuniWmSdJ95WmY9BJCO5KYb4z0aEdrhYFT4g5-qrqG5-3BJAztmzbntO1l2Qw"
//   }
//   })
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
// testetoken()












