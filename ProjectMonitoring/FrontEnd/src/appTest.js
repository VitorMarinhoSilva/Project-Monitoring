import Button from 'react-bootstrap/Button';
import axios from "axios";
import React from "react";


// const baseURL = "https://qbrdev.azurewebsites.net/data";

function AppT() {

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

  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Server OK
      </Button>
      <Button variant="secondary" size="lg">
        Server Error
      </Button>
    </div>
  );
}

export default AppT;
