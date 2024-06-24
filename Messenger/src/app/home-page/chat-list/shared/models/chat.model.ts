import {MessageDTOModel} from "../../../chat/shared/models/message-dto.model";

export type Chat = {
  id: string;
  chatType: string;
  title: string;
  icon: string;
  userWIthRole: [];
  message: MessageDTOModel;
  unreadMessageCount: number;
  muted: boolean;
  pinned?: boolean;
  corporate?: false;
}

