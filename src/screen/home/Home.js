import React, {Component} from "react";
import '../login/Login.css';
import Botao from '../../components/button/Button';
import { render } from "react-dom";

export default class HomePage extends Component{
    goLogin() {
        location.href = '/login';
    }
    goRegister() {
        location.href = '/cadastro';
    }
      render(){
    return (
      
    <div className="body">
      <h2>Reactflix</h2><br />
      <div className="formBG">
        <div className="form">
         <h1>Seja bem vindo</h1>
            <button className="button" onClick={() => this.goLogin()}>Entrar</button>
            <br />
            <button className="button" onClick={() => this.goRegister()}>Cadastro</button>
        </div>
      </div>
    </div>
    );
    }
}