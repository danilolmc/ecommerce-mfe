#!/bin/bash

TEMPLATE_URL=$1
BUCKET_NAME=$2
APP_NAME=$3
STACK_NAME=$4
SHELL_APP=$5

if ! aws s3api head-bucket --bucket $BUCKET_NAME --profile localstack; then

    echo "Validating Template..."

    if aws cloudformation validate-template --template-body file://$TEMPLATE_URL --profile localstack; then 
        echo;
        echo "Template validate successfully"
        echo;
        echo "Bucket $BUCKET_NAME does not exist."
        echo;
        echo "Creating bucket $BUCKET_NAME..."

        if aws cloudformation deploy \
            --template-file "$TEMPLATE_URL" \
            --stack-name "$STACK_NAME" \
            --parameter-overrides BucketName=$BUCKET_NAME ShellAppBucketUrl=$SHELL_APP \
            --capabilities "CAPABILITY_IAM" \
            --profile "localstack" \
            --debug
        then
            echo "Stack created successfully"
        else
            echo "Failed to create stack"
            exit 1
        fi
    else 
        echo "Invalid template"
        exit 1
    fi
fi

echo Deploying $APP_NAME app...

if ! aws s3 sync dist/apps/$APP_NAME s3://$BUCKET_NAME --profile localstack --delete; then
    echo Error on move $APP_NAME app files to S3
    exit 1;
fi

echo;
echo $APP_NAME app deployed successfully

   