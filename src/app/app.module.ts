import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupService } from './services/signup.service';
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
    ReactiveFormsModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
