import {Injectable} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {UserService} from "../../../shared/services/user.service";
import {MessageDataShortModel} from "../../chat/send-message-block/shared/models/message-data-short.model";

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private reqService: RequestService, private userService: UserService) {
  }

  public sendMessage(chatId: string, value: MessageDataShortModel[]) {
    this.reqService.request('POST', 'messenger/sendMessage', {
      body: {
        chatId: chatId,
        userId: this.userService.getID(),
        dataDtos: value
      }
    })

    return true
  }
}
