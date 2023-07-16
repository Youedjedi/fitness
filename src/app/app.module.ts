import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth/auth.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTraingComponent } from './training/current-traing/current-traing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { AppConfirmmessageComponent } from './training/app-confirmmessage/app-confirmmessage.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AuthComponent,
    TrainingComponent,
    CurrentTraingComponent,
    WelcomeComponent,
    NewTrainingComponent,
    AppConfirmmessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AppConfirmmessageComponent]
})
export class AppModule { }
