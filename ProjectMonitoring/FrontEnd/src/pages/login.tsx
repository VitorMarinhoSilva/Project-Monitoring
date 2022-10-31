import * as React from "react";
import "../styles/Login.css";
import { useMsal } from "@azure/msal-react";
import {loginRequest} from '../AuthConfig';
import logoScala from "../static/LoginLogo.svg";
import logo from "../static/HOME.svg";

function Login(){

  const { instance } = useMsal();

  function handleLogin(instance:any) {
      instance.loginRedirect(loginRequest).catch((e:any) => {
          console.error(e);
      });
  }

  return (
    <section className="loginBody">

      <div className="container-data-login">
        <div className="content-data-login">
          <img src={logoScala} className='background-logo-login' />
          <h2>Hi Scaler!</h2>
          <h4>To access Project Monitoring click on the button below</h4>
          <button className="button-login" onClick={() => handleLogin(instance)}>LOGIN</button>
        </div>

      </div>

      <div className='backgroundLogin'>
        <img src={logo} className='logoBackgroundLogin' />
      </div>
    </section>
  )
}

export default Login