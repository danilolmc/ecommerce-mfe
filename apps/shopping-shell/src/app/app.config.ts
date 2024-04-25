import { ApplicationConfig, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IsActiveMatchOptions, Router, UrlTree, provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { MetaReducer, provideStore } from '@ngrx/store';
import { cartReducer, localStorageSyncReducer } from '@shopping/shared/state';
import { appRoutes } from './app.routes';
export const metaReducers: MetaReducer[] = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
      withViewTransitions({
        onViewTransitionCreated: ({ transition }) => {
          const router = inject(Router);
          const targetUrl = router.getCurrentNavigation()?.finalUrl as UrlTree;

          const config: IsActiveMatchOptions = {
            paths: 'exact',
            matrixParams: 'exact',
            fragment: 'ignored',
            queryParams: 'ignored',
          };

          if (router.isActive(targetUrl, config)) {
            transition.skipTransition();
          }
        }
      }),
      withComponentInputBinding(),
    ),
    provideAnimations(),
    provideStore({
      cart: cartReducer
    }, { metaReducers }),
  ],
};
