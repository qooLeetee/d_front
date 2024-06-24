import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {SendMessageService} from "../../shared/services/send-message.service";
import {FileService} from "../../shared/services/file.service";
import {MessageTypeEnum} from "../../shared/enums/message-type.enum";
import {MessageDataShortModel} from "./shared/models/message-data-short.model";

@Component({
  selector: 'send-message-block',
  templateUrl: './send-message-block.component.html',
  styleUrls: ['./send-message-block.component.scss']
})
export class SendMessageBlockComponent {

  @Input() chatId: string = ''
  protected messageText: string = ''
  protected files: File[] = []

  @ViewChild('myInput')
  protected myInputVariable!: ElementRef;

  constructor(private sendMessageService: SendMessageService, private fileService: FileService) {
  }

  public async sendMessage() {
    let datas: MessageDataShortModel[] = []
    if (this.files) {
      for (const file of this.files) {
        let path = await this.fileService.uploadFile('chatImages', file);
        let data: MessageDataShortModel = {
          messageType: MessageTypeEnum.IMAGE,
          value: path.fileUrl
        }
        datas.push(
          data
        )
      }
    }

    if (this.messageText) {
      let data: MessageDataShortModel = {
        messageType: MessageTypeEnum.TEXT,
        value: this.messageText
      }
      datas.push(
        data
      )
    }
    if (datas && this.sendMessageService.sendMessage(this.chatId, datas)) {
      this.messageText = ''
      this.myInputVariable.nativeElement.value = ''
      this.files = []
    }
  }

  public changeFileList(event: any) {
    let fileList: FileList = event.target.files
    if (fileList.length > 0) {
      Array.prototype.forEach.call(fileList, (file: File) => {
        this.files.push(file)
      })
    }
  }
}
