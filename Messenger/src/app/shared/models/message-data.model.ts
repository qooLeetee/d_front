import {MessageTypeEnum} from "../enums/message-type.enum";

export class MessageData {
  id: number;
  messageType: MessageTypeEnum;
  value: string;

  constructor() {
    this.id = 0;
    this.messageType = MessageTypeEnum.TEXT;
    this.value = '';
  }
}
