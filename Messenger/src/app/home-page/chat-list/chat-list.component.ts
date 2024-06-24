import {Component, OnInit} from '@angular/core';
import {ChatListService} from "./shared/services/chat-list.service";
import {Chat} from "./shared/models/chat.model";
import {UserService} from "../../shared/services/user.service";
import {WebSocketService} from "../shared/services/web-socket.service";

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  constructor(private chatListService: ChatListService, private userService: UserService, private wss: WebSocketService) {
  }

  chatList: Chat[] = [];

  ngOnInit() {
    this.loadChatList()
    this.wss.connect()
    this.liveUpdateChatList()
  }

  public loadChatList() {
    this.getPageOfChats(this.userService.getID())
  }

  public getPageOfChats(userId: string) {
    this.chatListService.getPageOfChats(userId).then(
      response => {
        this.chatList = response?.content || []
      }
    );
  }

  public liveUpdateChatList() {
    this.wss.subscribeUser(this.userService.getID()).subscribe(res => {
      let newChat: Chat = JSON.parse(res.body)
      newChat.title = this.getChatTitle(newChat)
      this.chatList.push(newChat)
    })
  }

  public getChatTitle(chat: Chat) {
    switch (chat.chatType) {
      case ('P2P'):
        let temp: any[] = chat.userWIthRole
        return temp.find(el => el.id != this.userService.getID()).username
    }
  }
}
