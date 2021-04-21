import './App.css';
import Botao from './components/button/Button';
import Input from './components/input/Input'

function App() {
  return (
    <div className="body">
      <h2>React-flix</h2><br />
      <div className="formBG">
        <div className="form">
        <h1>Entrar</h1>
        <Input placeholder="Email ou número de telefone"/>
        <br />
        <Input placeholder="Senha"/>
        <br /><br />
        <Botao valor="Entrar" />
        </div>
        <p>Não tem cadastro? <a href="/cadastro">Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default App;
