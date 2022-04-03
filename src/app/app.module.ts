import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ContractsComponent } from './contracts/contracts.component';
import { HeaderComponent } from './header/header.component';
import { ClientsEditComponent } from './clients/clients-edit/clients-edit.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsItemComponent } from './clients/clients-item/clients-item.component';
import { ClientsDetailedViewComponent } from './clients/clients-detailed-view/clients-detailed-view.component';
import { ContractsEditComponent } from './contracts/contracts-edit/contracts-edit.component';
import { ContractsListComponent } from './contracts/contracts-list/contracts-list.component';
import { ContractsItemComponent } from './contracts/contracts-item/contracts-item.component';
import { BulkContractAssignmentComponent } from './contracts/bulk-contract-assignment/bulk-contract-assignment.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ContractsComponent,
    HeaderComponent,
    ClientsEditComponent,
    ClientsListComponent,
    ClientsItemComponent,
    ClientsDetailedViewComponent,
    ContractsEditComponent,
    ContractsListComponent,
    ContractsItemComponent,
    BulkContractAssignmentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
