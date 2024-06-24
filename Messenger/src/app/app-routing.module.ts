import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from "./authorization/authorization.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ChatComponent} from "./home-page/chat/chat.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthorizationComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [{
      path: 'chat/:id',
      component: ChatComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
