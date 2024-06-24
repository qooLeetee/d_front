import {MessageTypeEnum} from "../../../../shared/enums/message-type.enum";

export type MessageDataShortModel = {
  messageType: MessageTypeEnum;
  value: string;
}
