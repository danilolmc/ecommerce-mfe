# Shopping Eccomerce App

Microfrontend Eccomerce app built with Angular and Module Federation


## Technologies

- Angular
- NgRx
- Webpack Module Federation
- TailwindCSS
- Localstack
- Docker
- S3
- CloudFormation

## Running

```shell 
// Clone repo
git clone https://github.com/danilolmc/ecommerce-mfe.git

// Install dependencies
npm install

// Run de app
npm run start:dev
```

## Deploying Locally

1. Make sure you have docker and a localstack container up and running

2. Run the following script for deploying at localstack S3


```shell
npx nx affected --target=deploy_localstack
```

## Deploying to prod

1. Make sure you have an AWS account with Cloud Formation and S3 necessary permissions

2. Run the following command:

```shell
npx nx affected --target=deploy
```

If you have an AWS account configured the proper way then all the apps should be deployed successfully


<hr>

Made with ❤️ by Danilo
