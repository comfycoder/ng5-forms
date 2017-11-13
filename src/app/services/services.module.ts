import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './config.service';
import { AppStateService } from './app-state.service';
import { FlickrService } from './flickr.service';
import { SpinnerService } from './spinner.service';
import { FormValidationService } from './form-validation.service';

export function configServiceFactory(configService: ConfigService): Function {
  return () => configService.load();
}

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        ConfigService,
        {
          provide: APP_INITIALIZER,
          useFactory: configServiceFactory,
          deps: [ConfigService],
          multi: true
        },
        AppStateService,
        FlickrService,
        SpinnerService,
        FormValidationService
      ]
    };
  }
}
