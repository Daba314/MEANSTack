import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageService } from './services/page.service';
import { PagesComponent } from './components/pages/pages.component';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

//just like roures in node.js (means that it is the link which we use in the browser)
const appRoutes:Routes = [
  {path: 'register', component:RegisterComponent },
  {path: 'login', component:LoginComponent },
  {path: ':page', component:PagesComponent },
  {path: 'logout', component:LogoutComponent},
  {path: '', component:PagesComponent }
]

@NgModule({
  declarations: [
    //here we list all components
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    //here we list all modules
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
   //this server will be open for all project
  providers: [PageService, Title, UserService],
  //the root component
  bootstrap: [AppComponent]
})
export class AppModule { }
