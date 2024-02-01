import {Component} from '@angular/core';
import {Chat} from "./shared/models/chat.model";
import {MessageTypeEnum} from "../shared/enums/message-type.enum";

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  chatList: Chat[] = [{
    id: 1,
    chatType: null,
    title: "Опа чатик1",
    icon: "icon",
    userWIthRole: [],
    message: {
      id: 10,
      publisher: 'Олег',
      datas: {
        id: 1,
        messageType: MessageTypeEnum.TEXT,
        value: 'ы'
      },
      relatesTo: null,
      dateTime: '29.07.01',
      checked: false
    },
    unreadMessageCount: 30,
    muted: null
  },
    {
      id: 1,
      chatType: null,
      title: "Опа чатик2",
      icon: "icon",
      userWIthRole: [],
      message: {
        id: 10,
        publisher: 'Олег',
        datas: {
          id: 1,
          messageType: MessageTypeEnum.TEXT,
          value: 'хаваю?'
        },
        relatesTo: null,
        dateTime: '29.07.01',
        checked: false
      },
      unreadMessageCount: 3,
      muted: null
    }
  ]
}
