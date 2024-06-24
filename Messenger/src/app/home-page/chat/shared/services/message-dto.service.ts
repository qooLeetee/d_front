import {Injectable} from '@angular/core';
import {MessageDTOModel} from "../models/message-dto.model";
import {RequestService} from "../../../../shared/services/request.service";

type GetPageOfMessagesResponse = {
  content: MessageDTOModel[]
}

@Injectable({
  providedIn: 'root'
})
export class MessageDTOService {

  constructor(private requestService: RequestService) {
  }

  public getPageOfMessages(userID: string, chatID: string) {
    return this.requestService.request<GetPageOfMessagesResponse>("GET", 'messenger/getPageOfMessages', {
      params: {
        chatId: chatID,
        userId: userID,
        pageNumber: 0,
        pageSize: 25
      }
    })
  }
}
