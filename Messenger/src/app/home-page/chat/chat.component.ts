import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";

import {ActivationEnd, Router} from "@angular/router";
import {MessageDTOService} from "./shared/services/message-dto.service";
import {MessageDTOModel} from "./shared/models/message-dto.model";
import {WebSocketService} from "../shared/services/web-socket.service";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public chatId: string = ''
  protected publisherId: string = ''

  constructor(private router: Router, private MessageDTOService: MessageDTOService, private userService: UserService, private wss: WebSocketService) {
  }

  messageList!: MessageDTOModel[];

  ngOnInit() {
    this.updateChatIdSessionStorage()
    this.loadList()
    this.wss.connect()
    this.liveUpdateMessageList()
  }

  public loadList() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        let currentId = event.snapshot.params['id']
        currentId && (this.chatId = currentId)
        sessionStorage.setItem('chatId', this.chatId)
        this.chatId && this.getPageOfMessages(this.userService.getID(), this.chatId)
      }
    });
  }

  public getPageOfMessages(userId: string, chatId: string) {
    this.MessageDTOService.getPageOfMessages(userId, chatId).then((response) => {
      response && (this.messageList = response.content)
    })
  }

  public updateChatIdSessionStorage() {
    !this.chatId && (this.chatId = sessionStorage.getItem('chatId') || '')
    this.getPageOfMessages(this.userService.getID(), this.chatId)
  }

  public liveUpdateMessageList() {
    this.wss.subscribeChat(this.chatId).subscribe(res => {
      let message: MessageDTOModel = JSON.parse(res.body)
      this.messageList?.push(message)
    })
  }
}
