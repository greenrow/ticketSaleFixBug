import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "../auth/auth.component";
import {TicketsComponent} from "./tickets.component";

const routes: Routes = [
  { path: '', component: TicketsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
