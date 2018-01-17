import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menus/menu-list.component';
import {GraphListComponent} from './graph/graph-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    GraphListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
