import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SingleplayerServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SingleplayerServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SingleplayerServiceProvider Provider');
  }

}
