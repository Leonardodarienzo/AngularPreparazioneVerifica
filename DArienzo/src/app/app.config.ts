import { ApplicationConfig } from '@angular/core';
import { ROUTES, provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
