import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ChatListComponent} from './chat-list/chat-list.component';
import {ChatBlockComponent} from './chat-list/chat-block/chat-block.component';
import {NgOptimizedImage} from "@angular/common";
import {MessageListComponent} from './message-list/message-list.component';
import {MessageBlockComponent} from './message-list/message-block/message-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatBlockComponent,
    MessageListComponent,
    MessageBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
