import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadfromglitchService } from 'src/services/readfromglitch.service';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RicevutiComponent } from './ricevuti/ricevuti.component';
import { InviatiComponent } from './inviati/inviati.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RispondiComponent } from './rispondi/rispondi.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    RicevutiComponent,
    InviatiComponent,
    PageNotFoundComponent,
    HomeComponent,
    RispondiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ReadfromglitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
