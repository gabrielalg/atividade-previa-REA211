import style from './Header.module.css';

function Header() {

  return <>
    <header className="flex-column justify-align-center">
      <h1 className={`text-subtitle ${style['game-title']}`}>Jogo da Maçã</h1>
      <p className="text-body"> Clique na maçã para alterar o contador.</p>
    </header>
  </>
}

export default Header;