import { Component, OnInit, OnDestroy} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  // Отображение даты
  time: Date;
  private timerInterval: number;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Билеты',
        routerLink: ['tickets-list']
        },
      {
        label: 'Выйти',
        routerLink: ['/auth']
      },

    ];

    this.timerInterval = window.setInterval(() =>
    {
      console.log('run')
      this.time = new Date();
    }, 1000)

  }
  //Когда выходим компонент уничтожается, в избежании утечки памяти
  ngOnDestroy(): void{
    if (this.timerInterval){
      window.clearInterval(this.timerInterval)
    }

  }

}
