import {MessageDTO} from "../../../shared/models/messageDTO.model";

export class MessageBlocksModel {
  number: number;
  numberOfElements: number;
  content: MessageDTO[];

  constructor() {
    this.number = 0;
    this.numberOfElements = 0;
    this.content = [];
  }
}
