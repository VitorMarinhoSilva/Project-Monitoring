import React from "react";
import '../styles/Main.css';
import GlobGreen from "../static/GlobGreen.svg";
import GlobRed from "../static/GlobRed.svg";
import GlobWhite from "../static/GlobWihte.svg";
import axios from 'axios'





function Main() {

    const keys = Object.keys(sessionStorage);
    for (let key of keys) {
        var token = JSON.parse(sessionStorage.getItem(keys[0]));
        // console.log(token.secret)

    }

    let getToken;
    const configToken = {
        headers: {
          'Accept': 'application/json;odate=verbose',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      }
      const config = {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + getToken
        }
    };
    // console.log(process.env.REACT_APP_CLIENT_ID_QBR)

    // console.log(config)



    const [arrayBase, setArrayBase] = React.useState([])

    React.useEffect(() => {


        const options = [{ method: 'GET' },
        { method: 'POST' }
        ];

        let Info = [
            { nome: "SCALA DRILL", url: "https://drillreleasedev.azurewebsites.net/app", req: options[0].method, status: '', link: 'https://drillreleasedev.azurewebsites.net/' },
            { nome: "QBR", url: 'https://qbrdev.azurewebsites.net/data', req: options[0].method, status: '', link: 'https://qbrdev.azurewebsites.net/', clientid: `${process.env.REACT_APP_CLIENT_ID_QBR}`, clientsecret: `${process.env.REACT_APP_CLIENT_SECRET_QBR}` },
            { nome: "RACK COUNT", url: 'https://rackcountdev.azurewebsites.net/data', req: options[0].method, status: '', link: 'https://rackcountdev.azurewebsites.net', clientid: `${process.env.REACT_APP_CLIENT_ID_RACK}`, clientsecret: `${process.env.REACT_APP_CLIENT_SECRET_RACK}` },
        ];


        Info.map((value, i) => {

            axios.post('http://localhost:5000/login', {
                clientid: value.clientid,
                clientsecret: value.clientsecret,
                url: value.url
            })
            .then(res => {
                Info[i].status = res.status
                
                if (res.status > 299) {
                    setArrayBase((item) => {
                        return [
                            ...item, Info[i]
                        ]
                    })
                }
                if (res.status > 299){
                    axios.get('http://localhost:5000/Email')
                }
            })
                .catch(error => {
                    axios.get('http://localhost:5000/Email')
                    setArrayBase((item) => {
                        return [
                            ...item, Info[i]
                        ]
                    })
                    console.log("Email enviado por erro")
                })
        })



    }, [])


    return (
        <section className="container">
            <div className="Header">
                <div className="Card-Title">
                    <div className="Principal">
                        <div className="Titulo">
                            <h1>Monitoramento de Projetos</h1>
                        </div>
                        <div className="s-titulo">
                            <h5>Tela de Visualização para status de Requisições</h5>
                        </div>

                        <div className="status-target">
                            <img src={GlobGreen} alt="icon" className="img-green" />
                            <h6 >STATUS TARGET: 200 - 300</h6>
                        </div>

                        <div className="status-error">
                            <img src={GlobRed} alt="icon" className="img-red" />
                            <h6> STATUS ERROR: &gt; 300</h6>
                        </div>
                    </div>

                    <div className="card-error">
                        <h1>  <img src={GlobWhite} alt="icon" className="img-white" /> STATUS ERROR: 	&ge; 300 </h1>
                        <h6> {arrayBase.length} </h6>
                    </div>
                </div>
                {
                    arrayBase.map(value => {
                        return (<div className="project-info">
                            <div className="project">
                                <h6>PROJECT: {value.nome} </h6>
                            </div>
                            <div className="requi">
                                <h6>TIPO DE REQUISIÇÃO: {value.req}  </h6>
                            </div>
                            <div className="rotas">
                                <a href={value.link} target="_blank"><h6>ROTA: {value.url} </h6></a>
                            </div>
                            <div className="status-error right">
                                <h6> <img src={GlobRed} alt="icon" className="img-red" /> STATUS ERROR: &gt; {value.status}</h6>
                            </div>
                        </div>)
                    })
                }
            </div>
        </section>
    );
}
export default Main;