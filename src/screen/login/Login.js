import React from "react";
import './Login.css';
import Botao from '../../components/button/Button';
import Input from '../../components/input/Input'

export default function Login() {
  return (
    <div className="body">
      <h2>Reactflix</h2><br />
      <div className="formBG">
        <div className="form">
          <h1>Entrar</h1>
          <Input placeholder="Email ou número de telefone"/>
          <br />
          <Input placeholder="Senha"/>
          <br /><br />
          <Botao valor="Entrar" />
          <div className="subtext">
          <input type="checkbox"/>Manter Login na sessão
          </div>
        </div>
        <p>Não tem cadastro? <a href="/cadastro">Cadastre-se</a></p>
      </div>
    </div>
  );
}