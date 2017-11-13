import { Injectable } from '@angular/core';

import { Configuration } from '../models';

@Injectable()
export class AppStateService {

  private config: Configuration;

  redirectUrl: string;

  errorMessage: string;

  constructor() { }

  setConfiguration(config: Configuration) {
    this.config = Object.assign({}, config);
  }

  getConfiguration(): Configuration {
    return Object.assign({}, this.config);
  }
  hasBeenLaunched() {
    if (this.configInitialized()) {
      return true;
    }
    return false;
  }

  hasBeenInitialized() {
    if (this.configInitialized()) {
      return true;
    }
    return false;
  }

  configInitialized() {
    if (this.config && this.config.baseApiUrl && this.config.baseApiUrl.length > 3) {
      return true;
    }
    return false;
  }
}
