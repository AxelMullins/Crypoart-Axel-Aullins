import logo from './nftlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          eCommerce de NFT (sin estar dentro de la BlockChain)
        </p>
        <a
          className="App-link"
          href="https://www.larvalabs.com/cryptopunks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caso similar
        </a>
      </header>
    </div>
  );
}

export default App;
