import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'start', component: WordsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
