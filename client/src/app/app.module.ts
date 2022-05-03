import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FrequenciesListComponent } from './components/frequencies-list/frequencies-list.component';
import { FrequenciesFormComponent } from './components/frequencies-form/frequencies-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FrequenciesListComponent,
    FrequenciesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
