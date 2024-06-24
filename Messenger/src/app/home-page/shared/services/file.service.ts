import {Injectable} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {RequestService} from "../../../shared/services/request.service";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map} from "rxjs";

type FileUrl = {
  fileUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private requestService: RequestService, private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  public downloadFile(url: string) {
    return this.requestService.request<BlobPart>("GET", 'file/download', {
      params: {
        objectKey: url
      },
      responseType: "Blob"
    })
  }

  public async getImage(url: string) {
    if (url) {
      const response = await this.downloadFile(url)
      if (response)
        return URL.createObjectURL(new Blob([response], {type: "application/octet-stream"}))
    }
    return null
  }


  public async uploadFile(path: string, file: File) {
    let formData = new FormData()
    formData.append('file', file)
    return await firstValueFrom(this.http.post('http://localhost:8080/api/v1/file/upload/' + path, formData, {
      headers: {
        'Authorization': "Bearer " + this.requestService.getToken(),
      }
    }).pipe(map(response => {
      return response as FileUrl
    })))
  }

  //

  //
  // public deleteFile(url: string) {
  //   return this.requestService.request<boolean>("DELETE", 'file/download', {
  //     params: {
  //       objectKey: url
  //     }
  //   })
  // }

  // public async getVideo(url: string) {
  //   if (url) {
  //     const response = await this.downloadFile(url)
  //     if (response)
  //       return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new File([response], '')))
  //   }
  //   return null
  // }

  // const blobToBase64 = (blob: Blob) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   return new Promise(resolve => {
  //     reader.onloadend = () => {
  //       resolve(reader.result);
  //     };
  //   });
  // };
}
