import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './clients/client-list/client-list.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientListComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
