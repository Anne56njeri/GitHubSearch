import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GithubService } from './github.service';
import{HttpModule } from '@angular/http';
import {HttpClientModule } from '@angular/common/http';
import {NgProgressModule } from  '@ngx-progressbar/core';
import {NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }