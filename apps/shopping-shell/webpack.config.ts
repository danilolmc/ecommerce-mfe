import { withModuleFederationPlugin } from '@angular-architects/module-federation/webpack';
import config from './module-federation.config';

export default withModuleFederationPlugin({
    ...config,
    shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '17.3' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '17.3' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '17.3' },
        '@ngrx/store': { singleton: true, strictVersion: true, requiredVersion: '17.2' },
      },  
});
