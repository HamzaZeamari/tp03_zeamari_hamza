import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecapComponent } from './recap/recap.component';
import { FormsModule } from '@angular/forms';
import { TelPipe } from './tel-format.pipe';
import { ListprodComponent } from './listprod/listprod.component';
import { SearchComponent } from './search/search.component';
import { ServicesProd } from './prod.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    RecapComponent,
    TelPipe,
    ListprodComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicesProd],
  bootstrap: [AppComponent]
})
export class AppModule { }
