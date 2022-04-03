import { EventEmitter, Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "./client.model"

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clients: Client[] = [];
  maxClientId: number;

  constructor(private http : HttpClient) {
    this.maxClientId = this.getMaxId();
  }

  clientSelectedEvent = new EventEmitter<Client>();
  clientListChangedSubject = new Subject<Client[]>();

  getMaxId(): number{
    let maxId = 0;
    for (let client of this.clients) {
      let currentId: number = client.id;
      if (currentId > maxId){
        maxId = currentId;
      }
    }
    return maxId;
  }

  getClients() {
    let clientList
    return this.http.get('').subscribe(
      (clients: Client[]) => {
        this.clients = clients;
        this.maxClientId = this.getMaxId();
        clientList = this.clients.sort((a,b) => this.compareinator(a,b)).slice();
        this.clientListChangedSubject.next(clientList);
      }, error => {
        console.log(error);
      }
    )
    return clientList;
  }

  storeClients() {
    let bufferClientList = JSON.stringify(this.clients);
    let headers = new HttpHeaders({"Content-Type" : "application/json"});
    this.http.put("", bufferClientList, {headers}).subscribe(
      (res) => {
        let tempArr = this.clients.slice();
        this.clientListChangedSubject.next(tempArr);
      }, error => {
        console.log(error);
      }
    )
  }

  compareinator(a: Client, b: Client):number{
    if(a.firstName < b.firstName){
      return -1
    }
    if(a.firstName > b.firstName){
      return 1
    }
    return 0
  }

  // CRUD methods,
  // Create
  createClient(newClient: Client){
    if(newClient == null){return;}
    this.maxClientId++;
    newClient.id = this.maxClientId;
    this.clients.push(newClient);
    this.storeClients();
  }

  // Read
  getClient(id: number): Client{
    for (const client of this.clients) {
      if (id === client.id) {
        return client;
      }
    }
    return null;
  }

  //Update
  updateClient(newClient: Client, originalClient: Client){
    if (newClient == null || originalClient == null){return;}
    let pos = this.clients.indexOf(originalClient);
    if (pos < 0){
      console.log('error in handling indexOf(originalClient)');
      return;
    }
    newClient.id = originalClient.id;
    this.clients[pos] = newClient;
    this.storeClients();
  }

  // Delete
  deleteContact(client: Client){
    if (!client) {
      return;
    }
    const pos = this.clients.indexOf(client);
    if (pos < 0) {
      return;
    }
    this.clients.splice(pos, 1);
    this.storeClients();
  }
}
