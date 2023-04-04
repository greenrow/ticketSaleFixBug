import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableExampleService {
// инжиктировали в app
  constructor() { }

  initObservable(): void{
    //Как подпишемся на наблюдаемый объект, отправятся значения и ассинхроно отправится string и объект с ошибкой
    const observable = new Observable((subscriber => {
      subscriber.next(4);
      subscriber.next(5);
      setTimeout(() =>{
        subscriber.next('asyncData');
        subscriber.error('err');
      }, 3000)
    }))

      //формируем подписку
    const sub = observable.subscribe((data) => {
      console.log('observable data', data)
    }, (error => {
      console.log('error', error)
    }))
    sub.unsubscribe() // удаляет объект (data и err) из массива наблюдаемого объекта (асинхронная операция не вызвана)
  }
}
