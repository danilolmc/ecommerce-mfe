import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { MetaReducer, provideStore } from '@ngrx/store';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { cartReducer, localStorageSyncReducer } from '@shopping/shared/state';

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(MatSnackBarModule),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideStore({
      cart: cartReducer
    }, { metaReducers })
  ]
};
