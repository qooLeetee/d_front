import {Injectable} from '@angular/core';
import {RequestService} from "../../../../../shared/services/request.service";
import {UserService} from "../../../../../shared/services/user.service";
import {chatheader} from "../models/chat-header.model";

@Injectable({
  providedIn: 'root'
})
export class ChatHeaderService {


  constructor(private requestService: RequestService, private userService: UserService) {
  }

  public getChatHeaderData(chatId: string) {
    return this.requestService.request<chatheader>("GET", 'messenger/getChatByIdAndUserId', {
      params: {
        chatId: chatId,
        userId: this.userService.getID()
      }
    })
  }
}
