import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Global} from '../../Global';

export class EventComp extends Global{
    events: any;
    constructor(public http: Http, public navCtrl: NavController){
        super(http);
    }
}