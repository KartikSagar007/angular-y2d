import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlueColorDirective } from './blue-color.directive';
import { AgmCoreModule } from '@agm/core';
import { MapsService } from './maps.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDm8YRR4f7320BiB_WdicR8pOxzHMiwquo' 
    }) ],
  declarations: [ AppComponent, HelloComponent, BlueColorDirective ],
  bootstrap:    [ AppComponent ],
  providers: [MapsService]
})
export class AppModule { }
