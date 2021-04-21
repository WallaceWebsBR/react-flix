import React from "react";
import './Cadastro.css';
import Botao from '../../components/button/Button';
import Input from '../../components/input/Input'

export default function Cadastro() {
  return (
    <div className="body">
      <h2>Reactflix</h2><br />
      <div className="formBG">
        <div className="form">
          <h1>Cadastre-se</h1>
          <Input placeholder="Email ou número de telefone"/>
          <br />
          <Input placeholder="Senha"/>
          <br />
          <Input placeholder="Repita sua senha"/>
          <br /><br />
          <Botao valor="Cadastrar" />
          <div className="subtext">
          <input type="checkbox"/>Captcha
          </div>
        </div>
        <p>Já tem cadastro? <a href="/login">Logar no sistema</a></p>
      </div>
    </div>
  );
}