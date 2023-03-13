import React from "react";
import '../styles/Main.css';
import GlobGreen from "../static/GlobGreen.svg";
import GlobRed from "../static/GlobRed.svg";
import GlobWhite from "../static/GlobWihte.svg";
import axios from 'axios'



// This is a code for a React component named "Main". It uses hooks to manage state and API calls to check the status of different URLs.
// The initial state of the component includes an empty array for "arrayBase" and "url", and "haveCatch" is set to true. The "options" array includes two HTTP methods: GET and POST.
// The "Info" array includes two objects with properties such as "nome" (name), "url" (URL), "req" (HTTP request method), "status" (HTTP response status), and "link" (link to be displayed in the frontend). The second object has a URL for the Python organization and uses the GET method

function Main() {
    const [arrayBase, setArrayBase] = React.useState([])
    const [haveCatch, setHaveCatch] = React.useState(true)
    const options = [{ method: 'GET' },
    { method: 'POST' }
    ];


    let Info = [
        { nome: "name", url: 'url your project', req: options[0].method, status: '', link: 'link that will appear in the frontend', clientid: `${process.env.REACT_APP_CLIENT_ID}`, clientsecret: `${process.env.REACT_APP_CLIENT_SECRET}` },
        { nome: "PYTHON ORG", url: 'https://www.python.org', req: options[0].method, status: '', link: 'https://www.python.org'},
    ];




    let index = 0
    const [url, setUrl] = React.useState([])
    const [status, setStatus] = React.useState([])

    React.useEffect(() => {
        async function Teste() {
            const urls = []
            const statusCode = []
            const urlEmail = []
            axios.post('http://localhost:5000/login', {
                body: Info,
            })
                .then(response => {
                    setArrayBase(response.data)
                    // console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })

            setUrl(urls)
            setStatus(statusCode)

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
                                    <h6 style={value.status < 299 && typeof value.status == 'number' ? { background: '#288B11' } : { background: '#E64343' }}>TIPO DE REQUISIÇÃO: {value.req}</h6>
                                </div>
                                <div className="rotas" >
                                    <a href={value.link} target="_blank"><h6 style={value.status < 300 && typeof value.status == 'number' ? { background: '#288B11' } : {}}>ROTA: {value.url} </h6></a>
                                </div>
                                <div className="status-error right" >
                                    <h6 style={value.status < 299 && typeof value.status == 'number' ? { color: '#288B11' } : { color: '#E64343' }} > <img src={value.status < 299 && typeof value.status == 'number' ? GlobGreen : GlobRed} alt="icon" className="img-red" /> STATUS: {value.status}</h6 >
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