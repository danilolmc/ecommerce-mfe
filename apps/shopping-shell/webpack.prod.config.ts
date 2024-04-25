import { withModuleFederationPlugin } from '@angular-architects/module-federation/webpack';
import config from './module-federation.config';

export default withModuleFederationPlugin({
  ...config,
  remotes: {
    shop: `${process.env.APP_SHOP_URL}`,
    cart: `${process.env.APP_CART_URL}`,
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '17.3' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '17.3' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '17.3' },
    '@ngrx/store': { singleton: true, strictVersion: true, requiredVersion: '17.2' },
  },  
});
