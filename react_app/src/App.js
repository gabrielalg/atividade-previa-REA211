// ---- CSS
import './assets/css/main.css';

// ---- COMPONENTS
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

// ---- PAGES
import Game from './pages/Game/Game.js';

function App() {
  return <>
    <Header />
    <Game />
    <Footer />
  </>;
}

export default App;
