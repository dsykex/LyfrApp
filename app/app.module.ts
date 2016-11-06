import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EventComp} from '../pages/events/events';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventComp
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventComp
  ],
  providers: []
})
export class AppModule {}
