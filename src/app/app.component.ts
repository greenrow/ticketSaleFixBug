import { Component } from '@angular/core';
import {ObservableExampleService} from "./services/testing/testing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketSales2022';
  prop: string;
  constructor(testing: ObservableExampleService) {
    testing.initObservable()
  }
}
