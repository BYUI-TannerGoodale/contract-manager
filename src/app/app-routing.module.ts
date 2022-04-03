import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {ClientsEditComponent} from "./clients/clients-edit/clients-edit.component";
import {ClientsDetailedViewComponent} from "./clients/clients-detailed-view/clients-detailed-view.component";
import {ContractsComponent} from "./contracts/contracts.component";
import {ContractsEditComponent} from "./contracts/contracts-edit/contracts-edit.component";
import {BulkContractAssignmentComponent} from "./contracts/bulk-contract-assignment/bulk-contract-assignment.component";

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent, children: [
      {path: 'new', component: ClientsEditComponent},
      {path: ':id', component: ClientsDetailedViewComponent},
      {path: ':id/edit', component: ClientsEditComponent}
    ]}
  // {path: 'contracts', component: ContractsComponent, children: [
  //     {path: 'new', component: ContractsEditComponent},
  //     {path: ':id', component: ContractsEditComponent},
  //     {path: 'bulk_assign', component: BulkContractAssignmentComponent}
  //   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
