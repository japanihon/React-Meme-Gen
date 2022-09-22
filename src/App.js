import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Meme from "./components/Meme"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App"
    >
      <header className="App-header"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Meme />
        <Footer />
      </header>
    </div>
  );
}

export default App;
