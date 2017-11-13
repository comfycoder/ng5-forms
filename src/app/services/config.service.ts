import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Configuration } from '../models';

@Injectable()
export class ConfigService {

  private _config: Configuration;

  constructor(private http: Http) { }

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(): Promise<any> {

    this._config = null;

    return this.http
      .get('./assets/config.json')
      .map((res: Response) => res.json())
      .toPromise()
      .then((data: any) => {
        this._config = <Configuration>data;
      })
      .catch((err: any) => Promise.resolve());
  }

  get config(): Configuration {
    return this._config;
  }

  setConfigData(config: Configuration) {
    this._config = config;
  }
}
