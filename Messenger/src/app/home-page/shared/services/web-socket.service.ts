import {Injectable} from '@angular/core';
import {RxStomp, RxStompConfig} from "@stomp/rx-stomp";
import {RequestService} from "../../../shared/services/request.service";


@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  constructor(private reqService: RequestService) {
  }

  private rxStomp = new RxStomp();

  private myRxStompConfig: RxStompConfig = {
    brokerURL: 'http://localhost:8080/ws',

    connectHeaders: {
      Authorization: 'Bearer ' + this.reqService.getToken()
    },
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,

    reconnectDelay: 20000,
    debug: (msg: string): void => {
      console.log(new Date(), msg);
    },
  };

  public connect() {
    this.rxStomp.configure(this.myRxStompConfig);
    this.rxStomp.activate();
  }

  public subscribeChat(chatId: string) {
    return this.rxStomp.watch('/topic/chat/' + chatId)
  }

  public subscribeUser(userId: string) {
    return this.rxStomp.watch('/topic/user/' + userId)
  }
}
