import {Component, Input, OnInit} from '@angular/core';
import { Client } from "../client.model";

@Component({
  selector: 'app-clients-item',
  templateUrl: './clients-item.component.html',
  styleUrls: ['./clients-item.component.css']
})
export class ClientsItemComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
