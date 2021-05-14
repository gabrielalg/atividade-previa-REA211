import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  count: number = 0;
  positionImg: object = this.changePositionImage();
  
  constructor() { }

  changePositionImage() {
    let window_Height: number = window.innerHeight;
    let window_Width: number = window.innerWidth;

    let availSpace_V: number = window_Height - 240;
    let availSpace_H: number = window_Width - 100;

    let randNum_V: number = Math.round(Math.random() * availSpace_V) - 30;
    let randNum_H: number = Math.round(Math.random() * availSpace_H);

    if (randNum_V < 0) { 
      randNum_V = 0;
    } 

    return this.positionImg = {top: randNum_V + "px", left: randNum_H + "px"};
  }

  handleImgClick() {
    ++this.count;
    this.changePositionImage();
  }

  resetCount() {
    this.count = 0;
  }

  ngOnInit(): void {
  }

}
