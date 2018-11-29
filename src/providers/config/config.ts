
import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: 'http://www.omdbapi.com/?apikey=75522b56&',
};
