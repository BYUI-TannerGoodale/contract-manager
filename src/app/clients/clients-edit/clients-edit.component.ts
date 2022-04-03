import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Client} from "../client.model";
import {Contract} from "../../contracts/contract.model";
import {ClientsService} from "../clients.service";

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  ogClient: Client;
  client: Client;
  // contracts: Contract[] = [];
  // selectedContract: Contract;
  editMode: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    let params = this.route.params;
    params.subscribe((params: Params) => {
      let id = +params['id'];
      if(id == null){
        this.editMode = false;
        return;
      }
      this.ogClient = this.clientService.getClient(id);
      if(this.ogClient == null){
        return;
      }
      this.editMode = true;
      this.client = JSON.parse(JSON.stringify(this.ogClient));
    })
  }

  onCancel() {
    this.router.navigate(['/clients'], {relativeTo: this.route});
  }

  onSubmit(f: NgForm) {
    let signupForm = f;
    this.client = new Client(null, null, null)
    this.client.firstName = signupForm.value.firstName;
    this.client.lastName = signupForm.value.lastName;
    // this.client.id = +signupForm.value.id;
    // this.client.contract = this.selectedContract;
    if(this.editMode){
      this.clientService.updateClient(this.client, this.ogClient);
    } else {
      this.clientService.createClient(this.client);
    }
    this.router.navigate(['/clients'], {relativeTo: this.route});
  }

}
