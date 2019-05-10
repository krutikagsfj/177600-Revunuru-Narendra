
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import of components us in the project
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { SuccessComponent } from './success/success.component';
import { ReactiveFormsModule} from '../../node_modules/@angular/forms';
import { GameRoutingModule } from './game-routing.module';

//declaration
@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SuccessComponent,
  ],
  imports: [
    //bootstrap module for highlet the table
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    GameRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
