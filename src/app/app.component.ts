import {Component, OnInit} from '@angular/core';
import {ObservableExampleService} from "./services/testing/testing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ticketSales2022';
  prop: string;

  constructor(private  testing: ObservableExampleService) {
    testing.initObservable()

  }


  ngOnInit(){
    //Observable
    //first subscriber
    const myObservable = this.testing.getObservable();
    myObservable.subscribe((data) =>{
      //console.log('first myObservable data', data)
    })
    //second subscriber
    myObservable.subscribe((data)=>{
      //console.log('second myObservabledata', data)
    });

    //Subject
    const mySubject = this.testing.getSubject();
    //не будут получены данные
    //подписываемся
    // mySubject.subscribe((data) =>{
    //   //console.log('first data subject', data)
    // });
    // mySubject.subscribe((data) => {
    //   //console.log('second data subject', data)
    // });

    //send subjectData
    mySubject.next('subject value');

    //Behavior Subject
    const myBehavior = this.testing.getBehaviorSubject();
    myBehavior.next('new data from behaviorSubject'); // стирает последнее дефолтное значение и ставит новое
    myBehavior.subscribe((data) =>{
      console.log('first data behaviorSubject', data)
    });

    //myBehavior.next('new data1 from behaviorSubject');

  }

}
