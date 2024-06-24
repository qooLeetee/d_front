import {Injectable} from '@angular/core';
import {RequestService} from "../../../../shared/services/request.service";
import {Chat} from "../models/chat.model";

type GetPageOfChatsResponse = {
  content: Chat[]
}

@Injectable({
  providedIn: 'root'
})

export class ChatListService {

  constructor(private requestService: RequestService) {
  }

  public async getPageOfChats(userID: string) {
    return this.requestService.request<GetPageOfChatsResponse>('GET', 'messenger/getPageOfChats', {
      params:
        {
          userId: userID,
          pageNumber: 0,
          pageSize: 25
        }
    });
  }
}
