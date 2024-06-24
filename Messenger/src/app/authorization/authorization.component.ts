import {Component} from '@angular/core';
import {RequestService} from "../shared/services/request.service";
import {Router} from "@angular/router";
import {UserModel} from "../home-page/shared/models/user.model";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'auth',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})


export class AuthorizationComponent {
  constructor(private reqService: RequestService, private router: Router, private userService: UserService) {
  }

  public login: string = 'Developer'
  public password: string = 'Developer123<3'

  public async auth() {
    const response = await this.reqService.request<UserModel>('POST', 'auth/authenticate',
      {
        body: {
          username: this.login,
          password: this.password
        }
      });
    if (response) {
      this.userService.setUserIdSessionStorage(response?.id || '')
      this.router.navigate(['home'])
    } else
      alert('Неверный логин или пароль!')
  }
}
