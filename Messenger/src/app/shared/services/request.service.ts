import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, firstValueFrom, map, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private token: string = ''
  private rootUrl = "http://localhost:8080/api/v1/"

  constructor(private http: HttpClient) {
    this.token = document.cookie.split('=')[1] || ''
  }

  public getToken() {
    let result = ''
    this.token && (result = this.token)
    return result
  }

  public updateToken(value: string) {
    if (value) {
      let date: Date = new Date();
      date.setTime(date.getTime() + 30 * 60 * 1000)
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
      document.cookie = `token=${value}; expires=${date.toUTCString()}`
    }
  }

  public async request<T>(method: string, url: string, options: any = {}) {
    return await firstValueFrom(this.http.request<T>(method, this.rootUrl + url, {
      ...options,
      headers: {
        ...options?.headers,
        'Authorization': "Bearer " + this.token,
      }, observe: 'response'
      // @ts-ignore
    }).pipe(map(
        (response: HttpResponse<T>) => {
          response.headers && this.updateToken(response.headers.get('Authorization')!.toString());
          return response.body
        }),
      catchError(error => {
        console.error(error);
        return of(null);
      })
    ))
  }
}
