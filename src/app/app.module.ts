import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
