import { Component, OnInit } from '@angular/core';
import {Client} from "./client.model";
import {ClientsService} from "./clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  selectedClient: Client;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.clientSelectedEvent.subscribe(
      (client: Client) => {
        this.selectedClient = client;
      })
  }

}
