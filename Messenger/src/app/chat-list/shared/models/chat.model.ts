import {MessageDTO} from "../../../shared/models/messageDTO.model";

export class Chat {
  id: number;
  chatType: null;
  title: string;
  icon: string;
  userWIthRole: [];
  message: MessageDTO;
  unreadMessageCount: number;
  muted: null;

  constructor() {
    this.id = 0;
    this.chatType = null;
    this.title = "";
    this.icon = "";
    this.userWIthRole = [];
    this.message = new MessageDTO();
    this.unreadMessageCount = 0;
    this.muted = null;
  }
}

