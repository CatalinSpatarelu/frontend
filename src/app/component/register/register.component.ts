import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  clientForm !: FormGroup;
  formMessage:string="";
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.buildClientForm();
  }

  buildClientForm(){
    this.clientForm = new FormGroup({
        name:new FormControl("name",[Validators.required]),
        email:new FormControl("email",[Validators.required]),
        address:new FormControl("address",[Validators.required]),
        password:new FormControl("password",[Validators.required])
    })
  }

  submitClient(){
    if(this.clientForm.valid){

      this.clientService.addClient(this.clientForm.value, this.clientForm.value.password).subscribe((data)=>{
        this.clientForm.reset();
          this.formMessage="Client information saved";
      },err =>{
          console.error(err);
            this.formMessage="Error";
      }
      )}else {
      this.formMessage="Please fill out the client form before submitting";
    }
    }


}
