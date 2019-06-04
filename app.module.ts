import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EformComponent } from './eform/eform.component';

const routes: Routes = [
  {path: 'register', component: EformComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EformComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
