import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule, MatInputModule, MatButtonModule,MatDatepickerModule,MatNativeDateModule, MatRadioModule, MatCardModule, MatExpansionModule, MatCheckboxModule, MatIconModule} from '@angular/material'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
    //module
  ],
  imports: [
    BrowserModule,MatCardModule,MatExpansionModule,MatIconModule,DragDropModule,
    AppRoutingModule,MatRadioModule,MatCheckboxModule,
    BrowserAnimationsModule,MatNativeDateModule,
    FormsModule,ReactiveFormsModule,MatDatepickerModule,
    MatButtonModule, MatStepperModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
