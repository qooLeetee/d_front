import {Component, Input} from '@angular/core';
import {MessageTypeEnum} from "../../shared/enums/message-type.enum";
import {MessageData} from "../../shared/models/message-data.model";
import {MessageDTO} from "../../shared/models/messageDTO.model";

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss']
})
export class MessageBlockComponent {
  protected readonly MessageTypeEnum = MessageTypeEnum;

  @Input() data: MessageDTO = new MessageDTO();

  public checkToContainType(data: MessageDTO, type: MessageTypeEnum) {
    return data.datas.some(value => value.messageType === type);
  }

  public filterDataByMessageType(data: MessageDTO, type: MessageTypeEnum): MessageData[] {
    return data.datas.filter(value => value.messageType === type);
  }
}
