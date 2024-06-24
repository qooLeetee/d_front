import {Injectable} from '@angular/core';
import {RequestService} from "./request.service";
import {UserModel} from "../../home-page/shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userID: string = ''

  constructor(private reqServ: RequestService) {
  }

  public setUserIdSessionStorage(userId: string) {
    this.setID(userId || '')
    this.userID && sessionStorage.setItem('userId', this.userID)
  }

  public updateUserIdSessionStorage() {
    !this.userID && (this.userID = sessionStorage.getItem('userId') || '')
  }

  private setID(value: string) {
    this.userID = value
  }

  public getID() {
    return this.userID
  }

  public getUserData() {
    return this.reqServ.request<UserModel>('GET', 'messenger/getUserById/' + this.userID)
  }
}
