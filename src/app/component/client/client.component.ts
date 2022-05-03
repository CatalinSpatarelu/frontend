import { Component, OnInit } from '@angular/core';
import {Client} from "../../interface/client";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientList:Client[]=[];

  constructor(public clientService:ClientService) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll(){
    this.clientService.getAllClients().subscribe((data)=>{
      this.clientList =data;
      console.log('Products from DB'+JSON.stringify(this.clientList));
    })
  }
  deleteClient(id:any){
    this.clientService.deleteClient(id).subscribe((data)=>
    {
      window.location.reload();
      console.log("Client deleted");
    });
  }

}
