import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DynamoDB Table
    const table = new dynamodb.Table(this, 'DataTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Lambda Function using NodejsFunction
    const dataProcessor = new lambda.Function(this, 'DataProcessor', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'), // Ensure the 'lambda' directory contains node_modules
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // API Gateway
    const api = new apigateway.RestApi(this, 'DataProcessorApi', {
      restApiName: 'Data Processor Service',
      description: 'This service processes text files.',
    });

    // Grant Lambda permission to write to the table
    table.grantWriteData(dataProcessor);

    const postIntegration = new apigateway.LambdaIntegration(dataProcessor, {
      requestTemplates: { 'application/json': '{"statusCode": "200"}' },
    });

    api.root.addMethod('POST', postIntegration);
  }
}
