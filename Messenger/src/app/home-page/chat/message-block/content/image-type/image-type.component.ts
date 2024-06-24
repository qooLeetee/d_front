import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../../../shared/services/file.service";

@Component({
  selector: 'image-type',
  templateUrl: './image-type.component.html',
  styleUrls: ['./image-type.component.scss']
})
export class ImageTypeComponent implements OnInit {
  @Input() src: string = ''
  public localURL: string = ''

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.convertImage(this.src)
  }

  public async convertImage(src: string) {
    this.localURL = await this.fileService.getImage(src) || ''
  }
}
