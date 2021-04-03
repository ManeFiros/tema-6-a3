import logo from './logo.svg';
import './App.css';
import Formulario from './views/Formulario.view'
import Formulario1 from './views/Formulario1.view'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario/>
        <Formulario1/>
      </header>
    </div>
  );
}

export default App;
