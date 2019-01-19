import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SignupService } from './services/signup.service';
import { SearchService } from './services/search.service';
import { ServerService } from './services/server.service';
import { CompareValidator } from './shared/compare-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    CompareValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    SignupService,
    SearchService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
