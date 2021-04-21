import logo from './logo.svg';
import './App.css';
import Botao from './components/button/Button';
import Input from './components/input/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Painel de Login React-TV</h1>
        
        <h3>Digite seu Login</h3>
          <Input placeholder="Digite seu login..."/>
        <h3>Digite sua Senha</h3>
          <Input placeholder="Digite sua senha..."/>
          <Botao valor="Login" />
          <p>Não tem uma conta? <a href="/registro">Registre-se</a></p>
        <h3>Desenvolvido por Wallace Alberto</h3>
      </header>
    </div>
  );
}

export default App;
