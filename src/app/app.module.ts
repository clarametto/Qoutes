import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { QuoteDetailsComponent } from './component/quote-details/quote-details.component';
import { QuoteFormComponent } from './component/quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { DaysPipe } from './days.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    DaysPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
