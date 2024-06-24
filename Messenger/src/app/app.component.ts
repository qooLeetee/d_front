import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "./shared/services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public token: string | undefined = ''
  title = 'Messenger';
  //TODO: добавить класс времени
  //windowSize: [number, number] = [window.screen.availWidth, window.screen.availHeight];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.updateUserIdSessionStorage()
  }
}
