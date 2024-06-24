import {MessageDataModel} from "../../../shared/models/message-data.model";

type Publisher = {
  id: string;
  username: string;
  icon: string;
}

export type MessageDTOModel = {
  id: string;
  chatId: string;
  publisher: Publisher;
  datas: MessageDataModel[];
  relatesTo: null;
  dateTime: Date;
  checked: boolean;
  edited: boolean;
}
