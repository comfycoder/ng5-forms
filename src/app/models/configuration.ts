export class Configuration {
    baseName: string;
    baseApiUrl: string;

    constructor(baseName: string, baseApiUrl: string) {
      this.baseName = baseName;
      this.baseApiUrl = baseApiUrl;
    }
}
