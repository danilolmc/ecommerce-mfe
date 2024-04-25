import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { MetaReducer, provideStore } from '@ngrx/store';
import { cartReducer, localStorageSyncReducer } from '@shopping/shared/state';

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore({ cart: cartReducer }, { metaReducers })
  ],
};
