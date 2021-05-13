import { useState } from 'react';

import Apple from '../../assets/img/illustrations/apple.svg';
import Button from '../../elements/Button/Button.js';

import style from './Game.module.css';

function Game() {
  let [count, setCount] = useState(0);

  const changePositionImage = () => {
    let window_Height = window.innerHeight;
    let window_Width = window.innerWidth;

    let availSpace_V = window_Height - 240;
    let availSpace_H = window_Width - 100;

    let randNum_V = Math.round(Math.random() * availSpace_V) - 30;
    let randNum_H = Math.round(Math.random() * availSpace_H);

    if (randNum_V < 0) { 
      randNum_V = 0;
    } 

    return {top: randNum_V + "px", left: randNum_H + "px"}
  }

  return <>
    <section id={style.gameArea}>
      <div className={`flex-row ${style['action-bar']}`}>
        <Button onClick={() => setCount(0)}>Resetar</Button>
        <p className="text-subtitle">Total de Cliques: <span id="counter">{count}</span> </p>
      </div>
      <img className={style['game-img']} 
                alt="Desenho de uma maçã"
                src={Apple} 
                onClick={() => setCount(++count)}
                style={changePositionImage()}/>
    </section>
  </>
}

export default Game;