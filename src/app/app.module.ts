import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TestPipePipe } from './test-pipe.pipe';
import { RoundsOfPipe } from './rounds-of.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestPipePipe,
    RoundsOfPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
