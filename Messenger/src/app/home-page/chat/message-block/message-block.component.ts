import {Component, Input, OnInit} from '@angular/core';
import {MessageTypeEnum} from "../../shared/enums/message-type.enum";
import {MessageDataModel} from "../../shared/models/message-data.model";
import {UserService} from "../../../shared/services/user.service";
import {MessageDTOModel} from "../shared/models/message-dto.model";
import {FileService} from "../../shared/services/file.service";

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss']
})
export class MessageBlockComponent implements OnInit {
  @Input() needImage: boolean = true;
  @Input() needTitle: boolean = true;
  @Input({required: true}) data!: MessageDTOModel;

  public currentPublisherId: string = ''

  constructor(protected user: UserService, private fileService: FileService) {
  }

  protected readonly MessageTypeEnum = MessageTypeEnum;

  avatarUrl: string = ''

  ngOnInit() {
    this.fileService.getImage(this.data.publisher.icon).then(image => {
        if (image)
          this.avatarUrl = image
      }
    )
  }

  public checkToContainType(data: MessageDTOModel, type: MessageTypeEnum) {
    return data.datas.some(value => value.messageType === type)
  }

  public filterDataByMessageType(data: MessageDTOModel, type: MessageTypeEnum): MessageDataModel[] {
    return data.datas.filter(value => value.messageType === type)
  }
}
