import React from "react";
import '../styles/Main.css';
import GlobGreen from "../static/GlobGreen.svg";
import GlobRed from "../static/GlobRed.svg";
import GlobWhite from "../static/GlobWihte.svg";
import axios, { AxiosError } from "axios";



function Main() {

    const keys = Object.keys(sessionStorage);
    for (let key of keys) {
        var token = JSON.parse(sessionStorage.getItem(keys[0]));
        // console.log(token.secret)

    }
    const config = {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token.secret
        }
    };
    // console.log(config)

    async function doRequests(urls) {
        const Url = (url) => axios.get(url, config)


        const promises = urls.map(Url);
        let responses = await Promise.all(promises);

        responses.forEach(resp => {
            let msg = `${resp.config.url} -> ${resp.status}`;
            if (resp.status >= 300) {
                axios.get('http://localhost:5000/Email')

            }
            console.log(msg);


        });
    }

    let urls = [
        'https://drillreleasedev.azurewebsites.net/app1',
        'https://qbrdev.azurewebsites.net/data'


    ];

    doRequests(urls);


    const [arrayBase, setArrayBase] = React.useState([])

    React.useEffect(() => {

        //     let met = [{metodo:'get'},
        //                {metodo:'post'}

        // ]


        const options = [{ method: 'GET' },
        { method: 'POST' }
        ];

        let Info = [
            { nome: "SCALA DRILL", url: "https://drillreleasedev.azurewebsites.net/app", req: options[0].method, status: '', link: 'https://drillreleasedev.azurewebsites.net/' },
            { nome: "QBR", url: "https://qbrdev.azurewebsites.net/data", req: options[0].method, status: '', link: 'https://qbrdev.azurewebsites.net/' },
        ];

        Info.map((value, i) => {
            axios(value.url,config)
                .then(res => {
                    Info[i].status = res.status
                    console.log(res.status)
                    
                    if (res.status > 299 ) {
                        setArrayBase((item) => {
                            return [
                                ...item, Info[i]
                            ]
                        })
                    }
                   
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