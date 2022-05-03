import {Injectable} from '@angular/core';
import {Client} from "../interface/client";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  getClientFromSessionStorage(): Client {
    let item = sessionStorage['user'];
    let client: Client = JSON.parse(item);
    return client;
  }

  isUserLogged() {
    let user = sessionStorage.getItem('user');
    let clientFromSessionStorage = this.getClientFromSessionStorage();
    if (!(clientFromSessionStorage === null) && clientFromSessionStorage.role === 'user') {
      return true;
    } else return false;
    // console.log(!(user === null));
    // return !(user === null);
  }

  isAdminLogged() {
    let clientFromSessionStorage = this.getClientFromSessionStorage();
    if (!(clientFromSessionStorage === null) && clientFromSessionStorage.role === 'admin') {
      return true;
    } else return false;
  }

  logOut() {
    sessionStorage.removeItem('user');
  }
}

