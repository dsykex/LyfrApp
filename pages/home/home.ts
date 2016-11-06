import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Global} from '../../Global';
import {EventComp} from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Global{

  constructor(public navCtrl: NavController, public http: Http) {
    super(http);
    this.navCtrl.setRoot(EventComp);
  }

}
