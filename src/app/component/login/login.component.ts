import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../service/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;


  constructor(private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {

  }

  login() {
    this.clientService.getClientByEmail(this.email, this.password).subscribe((data) => {
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      if (data.role === "admin") {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    })
  }
}
