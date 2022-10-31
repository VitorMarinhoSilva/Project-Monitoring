import axios from "axios";
import React from "react";
import Main from './pages/main.jsx';
import token from './pages/main.jsx';


function AppT(token) {

  // var config = {
  //   headers: { 
  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJiM2QzNmIwMy1hMjE4LTRkMzktYWRiMi1kOTM1NTU1OWI2NzMiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vYTU2MjIyZTctMmFkMC00MzU3LTgxZmMtODQ4NWY3OWY1OWVjL3YyLjAiLCJpYXQiOjE2NjY4MDgwMzksIm5iZiI6MTY2NjgwODAzOSwiZXhwIjoxNjY2ODExOTM5LCJhaW8iOiJBVFFBeS84VEFBQUFUMERMRHVBekVFbzNEbVA1QTZwRVY1cklMUk4zekZhajFpbjR1NHRXdlJvdzBySWhwdHRCdE81OEl4Um1kWjdYIiwibmFtZSI6IlZpdG9yIE1hcmluaG8gZGEgU2lsdmEgQWx2ZXMiLCJub25jZSI6IjIzMjgxMWY0LWNjNDItNGM4Yy05YjBjLThiNTQyODdiYjUxZCIsIm9pZCI6IjExYzhiN2I3LWEyMTMtNDVmOS1iYzMxLTY3YjY2OGJiY2I2MiIsInByZWZlcnJlZF91c2VybmFtZSI6InZpdG9yLnNpbHZhQHNjYWxhZGF0YWNlbnRlcnMuY29tIiwicmgiOiIwLkFWRUE1eUppcGRBcVYwT0JfSVNGOTU5WjdBTnIwN01Zb2psTnJiTFpOVlZadG5OUkFQQS4iLCJzdWIiOiIzMTVpeDluSGJKX2JRanowU05aeGpTcGJaS2RpbWVsMUNYRENrd3ZqWjlNIiwidGlkIjoiYTU2MjIyZTctMmFkMC00MzU3LTgxZmMtODQ4NWY3OWY1OWVjIiwidXRpIjoibWx0c3hYN3ZSa2lRVmd0aUJzWlJBQSIsInZlciI6IjIuMCJ9.sGOFKTTejksiO8evkjdD-qAkFWBn6uHArFAeborLyKS4glTyo7bmTCSn7SIYGCslLStoghEYG_SQFinlBEVS6TKQzDN9otGWxpMKbJgA_iK9T2aOrqsTO7nyJILK8nKpNutqC7dSaCAMO74jtwqZmRQaHWR-AcdXa0t50z3AWyKeL-l0hRHJSbszv3YHmy6c1NcoeuRSskeX8D47QLcgprkd7OTAjBC4ao-rOv_isH-6VnccMolhD7L-Nzq7cb2tIzLHQx7ifYcgtGjz708H0M55mQkq6XdK7TmM7V9ipfuDR9LBD-35K5F6QJd2OSYj6Bq1S_YdL5g6i52OyAYUSw'
  //   }
  // };
  const config = {
    method: 'get',
    headers: { 
    'Authorization': 'Bearer '+ token.secret
    }
};
console.log(config)

  

  async function doRequests(urls) {
    const Url = (url) => axios.get(url, config)


    const promises = urls.map(Url);
    let responses = await Promise.all(promises);

    responses.forEach(resp => {
        let msg =`${resp.url} -> ${resp.status}`;
            if (resp.status >= 300 ){
                axios.get('http://localhost:5000/Email')
            
            }
            console.log(msg);
            
        
    });
}

let urls = [
    // 'https://drillreleasedev.azurewebsites.net/app1',
    // 'http://httpbin.org',
    'https://qbrdev.azurewebsites.net/data'

    
];

doRequests(urls);

  return (
    Main()
  );
}

export default AppT;