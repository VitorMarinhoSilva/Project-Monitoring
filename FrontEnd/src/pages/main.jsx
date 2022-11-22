import React from "react";
import '../styles/Main.css';
import GlobGreen from "../static/GlobGreen.svg";
import GlobRed from "../static/GlobRed.svg";
import GlobWhite from "../static/GlobWihte.svg";
import axios from 'axios'


function Main() {
    // const keys = Object.keys(sessionStorage);
    // for (let key of keys) {
    //     var token = JSON.parse(sessionStorage.getItem(keys[0]));
    //     // console.log(token.secret)
    // }
    // let getToken;
    // const configToken = {
    //     headers: {
    //         'Accept': 'application/json;odate=verbose',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    // }
    // const config = {
    //     method: 'get',
    //     headers: {
    //         'Authorization': 'Bearer ' + getToken
    //     }
    // };
    // console.log(process.env.REACT_APP_CLIENT_ID_QBR)
    // console.log(config)
    const [arrayBase, setArrayBase] = React.useState([])
    const [haveCatch, setHaveCatch] = React.useState(true)

    const options = [{ method: 'GET' },
    { method: 'POST' }
    ];


    let Info = [
        { nome: "SCALA DRILL", url: "https://drillreleasedev.azurewebsites.net/app", req: options[0].method, status: '', link: 'https://drillreleasedev.azurewebsites.net/' },
        { nome: "QBR", url: 'https://qbrdev.azurewebsites.net/data', req: options[0].method, status: '', link: 'https://qbrdev.azurewebsites.net/', clientid: `${process.env.REACT_APP_CLIENT_ID_QBR}`, clientsecret: `${process.env.REACT_APP_CLIENT_SECRET_QBR}` },
        { nome: "RACK COUNT", url: 'https://rackcountdev.azurewebsites.net/data', req: options[0].method, status: '', link: 'https://rackcountdev.azurewebsites.net', clientid: `${process.env.REACT_APP_CLIENT_ID_RACK}`, clientsecret: `${process.env.REACT_APP_CLIENT_SECRET_RACK}` },
        // { nome: "IT TOOL", url: 'http://10.1.108.11:5009/check_health', req: options[0].method, status: '', link: 'http://10.1.108.11:5009/check_health'},
    ];  
    let index = 0
    const [url, setUrl] = React.useState([])
    const [status, setStatus] = React.useState([])
    const [req, setRequi] = React.useState([])

    
    React.useEffect(() => {
        async function Teste() {
            const urls = []
            const statusCode = []
            const requi = []
            let str2 = ''
            let str3 = ''
            let str4 = ''

            await Info.map((value, i) => {
                index = i + 1
                axios.post('http://localhost:5000/login', {
                    clientid: value.clientid,
                    clientsecret: value.clientsecret,
                    url: value.url
                })
                    .then(res => {
                        Info[i].status = res.status
                        setArrayBase((item) => {
                            return [
                                ...item, Info[i]
                            ]

                        })
                        setHaveCatch(true)
                        urls.push(value.url)
                        statusCode.push(value.status)
                    })
                    .catch(error => {
                        url.forEach(value => {

                            str2 = str2 + value + ', '
                        })
                        status.forEach(value => {
                            str3 = str3 + value + ', '
                        })
                        // req.forEach(value => {
                        //     str4 = str4 + value + ', '
                        // })
                        console.log('entrou aqui')
                        axios.post('http://localhost:5000/Email', {
                            url: str2,
                            requi: str4,
                            status: str3
                        })
                        console.log("Email enviado por erro")
                        setArrayBase((item) => {
                            return [
                                ...item, Info[i]
                            ]
                        })
                        console.log('entrou aqui')
                    })



                if (i + 1 == Info.length & value.status < 299 && haveCatch) {



                    url.forEach(value => {

                        str2 = str2 + value + ', '
                    })
                    status.forEach(value => {
                        str3 = str3 + value + ', '
                    })
                    // req.forEach(value => {
                    //     str4 = str4 + value + ', '
                    // })

                    console.log('entrou aqui')
                    axios.post('http://localhost:5000/Email', {
                        url: str2,
                        status: str3
                    })
                    console.log("Email enviado por erro")

                }
                // console.log(index, Info.length, haveCatch)
            })
            setUrl(urls)
            setStatus(statusCode)
            setRequi(requi)

        }
        Teste()

    }, [])

    React.useEffect(() => {


    }, [haveCatch])

    function verifyLenght(arr) {
        let index = 0
        arr.map(value => {
            if (value.status >= 300) {
                index = index + 1
            }
        })

        return index
    }
    // arrayBase.map(value => {
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
                            <h6> STATUS ERROR: &ge; 300</h6>
                        </div>
                    </div>
                    <div className="card-error">
                        <h1>  <img src={GlobWhite} alt="icon" className="img-white" /> STATUS ERROR:  &ge; 300 </h1>
                        <h6 > {verifyLenght(arrayBase)} </h6>
                    </div>
                </div>


                {
                    arrayBase !== undefined ?
                        arrayBase.map(value => {
                            return (<div className="project-info">
                                <div className="project">
                                    <h6>PROJECT: {value.nome} </h6>
                                </div>
                                <div className="requi">
                                    <h6 style={value.status < 299 ? { background: '#288B11' } : { background: '#E64343' }}>TIPO DE REQUISIÇÃO: {value.req}  </h6>
                                </div>
                                <div className="rotas" >
                                    <a href={value.link} target="_blank"><h6 style={value.status < 299 ? { background: '#288B11' } : {}}>ROTA: {value.url} </h6></a>
                                </div>
                                <div className="status-error right" >
                                    <h6 style={value.status < 299 ? { color: '#288B11' } : { color: '#E64343' }} > <img src={value.status < 299 ? GlobGreen : GlobRed} alt="icon" className="img-red" /> STATUS: {value.status}</h6 >
                                </div>
                            </div>)
                        })
                        :
                        <></>
                }
            </div>
        </section>
    );
}
export default Main;