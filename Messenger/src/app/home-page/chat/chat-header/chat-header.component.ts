import {Component, Input, OnChanges} from '@angular/core';
import {ChatHeaderService} from "./shared/services/chat-header.service";
import {chatheader} from "./shared/models/chat-header.model";
import {FileService} from "../../shared/services/file.service";

@Component({
  selector: 'chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnChanges {
  @Input() chatId: string = ''

  public imageURL: string = ''
  public title: string = ''

  constructor(private chatHeaderService: ChatHeaderService, private fileService: FileService) {
  }

  ngOnChanges() {
    this.getChatHeaderData()
  }

  public async getChatHeaderData() {
    const data: chatheader | null = await this.chatHeaderService.getChatHeaderData(this.chatId)
    if (data) {
      this.title = data.title
      this.imageURL = await this.fileService.getImage(data.icon) || ''
    }
  }
}
