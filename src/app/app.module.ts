import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RagnarokComponent } from './components/ragnarok/ragnarok.component';
import { RagnarokService } from './components/ragnarok/ragnarok.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RagnarokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RagnarokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
