import {Component, Input} from '@angular/core';
import {Chat} from "../shared/models/chat.model";

@Component({
  selector: 'chat-block',
  templateUrl: './chat-block.component.html',
  styleUrls: ['./chat-block.component.scss']
})
export class ChatBlockComponent {
  @Input() chatData: Chat = new Chat();

}
