import {Component} from '@angular/core';
import {MessageTypeEnum} from "../shared/enums/message-type.enum";
import {MessageBlocksModel} from "./message-block/models/message-block.model";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {

  messageList: MessageBlocksModel =
    {
      number: 1,
      numberOfElements: 1,
      content: [
        {
          id: 10,
          publisher: 'Олег',
          datas: [{
            id: 1,
            messageType: MessageTypeEnum.IMAGE,
            value: '/assets/dzPoekhwbUM.jpg'
          },
            {
              id: 2,
              messageType: MessageTypeEnum.TEXT,
              value: 'крутой чел'
            },
            {
              id: 3,
              messageType: MessageTypeEnum.VIDEO,
              value: '/assets/huita/v/1.mp4'
            },
            {
              id: 4,
              messageType: MessageTypeEnum.AUDIO,
              value: '/assets/huita/a/0.mp3'
            },
            {
              id: 5,
              messageType: MessageTypeEnum.AUDIO,
              value: '/assets/huita/a/1.mp3'
            }
          ],
          relatesTo: null,
          dateTime: '19:03',
          checked: false
        },
        {
          id: 10,
          publisher: 'Прикинь если имя в шесть слов ыыыыыыыыы ы ы ы ыы ы ыыыыыыыыыыыыыы',
          datas: [{
            id: 1,
            messageType: MessageTypeEnum.FILE,
            value: 'у'
          }],
          relatesTo: null,
          dateTime: '8:15',
          checked: false
        },
        {
          id: 10,
          publisher: 'Юпи',
          datas: [{
            id: 1,
            messageType: MessageTypeEnum.TEXT,
            value: 'ы'
          }],
          relatesTo: null,
          dateTime: '12:03',
          checked: false
        },
      ],
    }
}
