import {MessageTypeEnum} from "../enums/message-type.enum";

export type MessageDataModel = {
  id: string;
  messageType: MessageTypeEnum;
  value: string;
}
