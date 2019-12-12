import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from './in-memory-data.service';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
