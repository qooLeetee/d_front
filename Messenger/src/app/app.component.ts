import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'Messenger';
  //TODO: добавить класс времени
  //windowSize: [number, number] = [window.screen.availWidth, window.screen.availHeight];

  constructor(private http: HttpClient) {
  }

  private init() {

    // const body = {username: 'admin', password: 'Nerds4ever<'};
    //
    // return this.http.post("http://localhost:8080/api/v1/auth/authenticate", body).subscribe(response => console.log(response));
  }

  ngOnInit() {
    this.init();
  }
}
