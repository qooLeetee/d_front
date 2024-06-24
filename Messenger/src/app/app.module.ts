import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {NgOptimizedImage} from "@angular/common";

import {AuthorizationComponent} from './authorization/authorization.component';
import {FormsModule} from "@angular/forms";

import {HomePageComponent} from './home-page/home-page.component';
import {ChatListComponent} from "./home-page/chat-list/chat-list.component";
import {ChatBlockComponent} from "./home-page/chat-list/chat-block/chat-block.component";
import {ChatComponent} from "./home-page/chat/chat.component";
import {MessageBlockComponent} from "./home-page/chat/message-block/message-block.component";
import {RouterModule} from "@angular/router";
import {SendMessageBlockComponent} from './home-page/chat/send-message-block/send-message-block.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {ImageTypeComponent} from './home-page/chat/message-block/content/image-type/image-type.component';
import {ChatHeaderComponent} from './home-page/chat/chat-header/chat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatBlockComponent,
    ChatComponent,
    MessageBlockComponent,
    AuthorizationComponent,
    HomePageComponent,
    SendMessageBlockComponent,
    ImageTypeComponent,
    ChatHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    RouterModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
