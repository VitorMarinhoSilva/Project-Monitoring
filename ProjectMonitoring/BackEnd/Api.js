import axios from 'axios'
import {Email} from './MailSend.js'

async function doRequests(urls) {
    const Url = (url) => axios.get(url)
        // {
        // validateStatus: function (status) {
        //     return status <=400; // padrão
        //     }
        // })
    
    const promises = urls.map(Url);
    let responses = await Promise.all(promises);

    responses.forEach(resp => {
        let msg =`${resp.config.url} -> ${resp.status}`;
            if (resp.status >= 401){
                Email()
            }
            console.log(msg);
        
    });
}

let urls = [
    'https://drillsimulatordev.azurewebsites.net/',
    // 'http://httpbin.org',
];

doRequests(urls);