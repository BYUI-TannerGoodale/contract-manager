import { Component, OnInit } from '@angular/core';
import {Client} from "../client.model";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  // Properties
  clients: Client[] = [];
  term: String;

  constructor() { }

  ngOnInit(): void {
  }

  search(value: string) {
    this.term = value;
  }

}
