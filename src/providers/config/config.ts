
import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiEndpointDate: string;
  apiEndpointPoster: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
  apiEndpointDate: 'http://www.omdbapi.com/?apikey=5059c36b&',
  apiEndpointPoster: 'http://img.omdbapi.com//?apikey=5059c36b&',
};
