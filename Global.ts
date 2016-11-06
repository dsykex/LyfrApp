import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class Global{
    db_host: string = 'flypapermagazine.com';
    db_name: string = 'flypaper_scdb';
    db_username: string = 'flypaper_scmgr';
    db_password: string = 'maxwel123';
    user: any;

    constructor(public http: Http){

    }

    getAllData(db){
        let conData = {
            db_host: this.db_host,
            db_name: this.db_name,
            db_username: this.db_username,
            db_password: this.db_password,
            query: 'get all '+db,
            all: true
        };
        return this.http.post('http://dsykes.net16.net/test.php', conData).map(res => res.json());
    }
    
    insertData(query){
        let conData = {
            db_host: this.db_host,
            db_name: this.db_name,
            db_username: this.db_username,
            db_password: this.db_password,
            query: query
        };
        return this.http.post('http://dsykes.net16.net/update.php', conData).map(res => res);
    }

    getObject(db, col, val){
        let conData = {
            db_host: this.db_host,
            db_name: this.db_name,
            db_username: this.db_username,
            db_password: this.db_password,
            query: 'get '+db+' '+col+' '+val+' spec',
            all: false
        };
        return this.http.post('http://dsykes.net16.net/test.php', conData).map(res => res.json());
    }
}