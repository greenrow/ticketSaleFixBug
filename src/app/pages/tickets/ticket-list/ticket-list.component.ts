import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TicketService} from "../../../services/tickets/ticket.service";
import {ITour} from "../../../models/tours";
import { Router} from "@angular/router";
import {TiсketsStorageService} from "../../../services/tiсkets-storage/tiсkets-storage.service";
import {BlockStyleDirective} from "../../../directive/block-style.directive";


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: ITour[];
  ticketsCopy: ITour[];

  @ViewChild('tourWrap', {read: BlockStyleDirective}) blockDirective: BlockStyleDirective;
  @ViewChild('tourWrap') tourWrap: ElementRef;


  constructor(private ticketService: TicketService,
              private router: Router,
              private ticketStorage: TiсketsStorageService) { }

  //Подписаться на изменения, которые произойдут при запросе на сервер, параметром передается асинхронная операция (data)
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      (data) => {
        this.tickets = data; //вставка нового шаблона
        this.ticketsCopy = [...this.tickets] //содержит все данные
        this.ticketStorage.setStorage(data); // запрос на тур записывается

      }
    )
  }

  ngAfterViewInit(){

  }
  goToTicketInfoPage(item: ITour){
    this.router.navigate([`/tickets/ticket/${item.id}`])
  }

  directiveRenderComplete(ev: boolean){
    const el: HTMLElement = this.tourWrap.nativeElement;
    el.setAttribute('style', 'background-color: #f5f5dc')
    this.blockDirective.initStyle(0)
  }
// поиск туров
  findTours(ev: Event):void{
    const searchValue = (<HTMLElement>ev.target).nodeValue;

    if(searchValue){
      this.tickets = this.ticketsCopy.filter((el) => el.name.includes(searchValue));
    }
    else {
      this.tickets = [...this.ticketsCopy]
    }
  }

}
