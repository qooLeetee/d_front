import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../shared/models/chat.model";
import {FileService} from "../../shared/services/file.service";

@Component({
  selector: 'chat-block',
  templateUrl: './chat-block.component.html',
  styleUrls: ['./chat-block.component.scss']
})
export class ChatBlockComponent implements OnInit {
  @Input({required: true}) chatData!: Chat;
  public avatarUrl: string = ''
  public chatTitle: string = ''

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.loadData()
  }

  public async loadData() {
    this.avatarUrl = await this.fileService.getImage(this.chatData.icon) || ''
  }
}
