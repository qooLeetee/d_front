import {MessageData} from "./message-data.model";

export class MessageDTO {
  id: number;
  publisher: string;
  datas: MessageData;
  relatesTo: null;
  dateTime: string;
  checked: boolean;

  constructor() {
    this.id = 0;
    this.publisher = '';
    this.datas = new MessageData();
    this.relatesTo = null;
    //TODO: заменить на мин тайм
    this.dateTime = '';
    this.checked = false;
  }
}
