# Welcome to your CDK TypeScript project

This project sets up a serverless data processing pipeline using AWS CDK. It integrates API Gateway, Lambda, and DynamoDB to handle file uploads, process the data, and store the results in a scalable database.

## Useful commands

- **npm run build**: compile TypeScript to JavaScript
- **npm run watch**: watch for changes and compile
- **npm run test**: perform the jest unit tests
- **npx cdk deploy**: deploy this stack to your default AWS account/region
- **npx cdk diff**: compare the deployed stack with the current state
- **npx cdk synth**: emits the synthesized CloudFormation template

<<<<<<< HEAD
<<<<<<< HEAD
# Serverless Data Processing Pipeline

This project creates a serverless data processing pipeline using AWS CDK. The pipeline includes a Lambda function that processes text file uploads via an API Gateway POST request and stores the content in DynamoDB.

## Project Structure

```
├── bin/
│   └── infra.ts                     # Entry point for the CDK application
├── lib/
│   └── infra-stack.ts               # Main stack definition
├── lambda/
│   └── index.ts                     # Lambda function code
├── node_modules/                    # Node.js modules
├── cdk.json                         # CDK configuration
├── package.json                     # Node.js project configuration
├── package-lock.json                # Node.js lockfile
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```
# Welcome to your CDK TypeScript project

This project sets up a serverless data processing pipeline using AWS CDK. It integrates API Gateway, Lambda, and DynamoDB to handle file uploads, process the data, and store the results in a scalable database.

## Useful commands

- **npm run build**: compile TypeScript to JavaScript
- **npm run watch**: watch for changes and compile
- **npm run test**: perform the jest unit tests
- **npx cdk deploy**: deploy this stack to your default AWS account/region
- **npx cdk diff**: compare the deployed stack with the current state
- **npx cdk synth**: emits the synthesized CloudFormation template

## Step 1: Project Setup

### Prerequisites

Ensure you have Python 3.x, AWS CLI, and AWS CDK installed. Configure AWS CLI with your credentials.

 **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository/serverless-data-pipeline.git
   cd serverless-data-pipeline
   ```

**AWS CDK Initialization:**
Start by setting up an AWS CDK project in TypeScript.
Initialize the CDK project

 ```bash
   cdk init app --language=typescript
   ```
**Install the  CDK necessary packages:**

```bash
npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/aws-dynamodb @aws-cdk/aws-iam
npm install -g aws-cdk --save
npm install -g uuid --save

```
once after packages installed check package.json & node_modules folder ,we can see all the dependency folder 
### AWS CLI Configuration

Configure AWS CLI with your AWS account credentials:

```bash
aws configure
```

## Step 2: CDK Stack Configuration

### API and Lambda Integration

- **API Gateway**: Receives POST requests and triggers a Lambda function for text file uploads.
   Refer the file given below to know about construct resources   
   ```
   infra/lib/infra-stack.ts
   ```
- **Lambda Function**: Written in TypeScript, this function parses and processes the contents of the uploaded text files.
  ```
   infra/lambda/index.ts
   ```

### Data Processing

- The Lambda function extracts content from the uploaded text files and processes it.

### Data Storage

- **Amazon DynamoDB**: The processed data is stored in a DynamoDB table, ensuring scalability and durability.

### Monitoring

- **Amazon CloudWatch**: Logs and performance metrics are automatically captured for monitoring and troubleshooting.



### Infrastructure as Code 

- **AWS CDK**: All resources are defined and managed using AWS CDK, allowing for easy deployment and management of the entire stack.
```bash
   cdk bootstrap
   ```
  This command will create all required CF templates and ready to deploy the resources.
## Step 3: Deploying the Stack

To deploy the stack, use the following command:

```bash
cdk deploy
```

This command will create all the necessary AWS resources, including the API Gateway, Lambda function, and DynamoDB table.

## Step 4: Testing the API

After deployment, you can test the API by uploading a text file using `curl`:

```bash
curl -X POST -H "Content-Type: text/plain" --data-binary "@sample.txt" https://r9vszfqsr4.execute-api.us-east-1.amazonaws.com/prod
```

Replace `sample.txt` with the path to your text file, and `https://your-api-gateway-url/your-endpoint` with the actual URL of your API Gateway.

## Step 5: Monitoring and Logging

we can monitor the performance and logs of your Lambda function in **Amazon CloudWatch**.

## Step 6: Removing the Stack

To remove all resources created by the stack, use the following command:

```bash
cdk destroy
```

This will delete the CloudFormation stack along with all the associated resources like the Lambda function, DynamoDB table, and API Gateway.

## Summary

This project is a complete serverless data processing pipeline that integrates API Gateway, Lambda, and DynamoDB, all managed via AWS CDK. The stack is secure, scalable, and easily deployable via CLI commands.

=======
=======
## Step 1: Project Setup
>>>>>>> 93d23c22c0fb2610a8cd59433296be8a98032f48

### Prerequisites

Ensure you have Python 3.x, AWS CLI, and AWS CDK installed. Configure AWS CLI with your credentials.

 **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository/serverless-data-pipeline.git
   cd serverless-data-pipeline
   ```

**AWS CDK Initialization:**
Start by setting up an AWS CDK project in TypeScript.
Initialize the CDK project

 ```bash
   cdk init app --language=typescript
   ```
**Install the  CDK necessary packages:**

```bash
npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/aws-dynamodb @aws-cdk/aws-iam
npm install -g aws-cdk --save
npm install -g uuid --save

```
once after packages installed check package.json & node_modules folder ,we can see all the dependency folder 
### AWS CLI Configuration

Configure AWS CLI with your AWS account credentials:

```bash
aws configure
<<<<<<< HEAD
>>>>>>> be63dc176a4aec9e1bc3b81cbfbd71506d1c0b38
=======
```

## Step 2: CDK Stack Configuration

### API and Lambda Integration

- **API Gateway**: Receives POST requests and triggers a Lambda function for text file uploads.
   Refer the file given below to know about construct resources   
   ```
   infra/lib/infra-stack.ts
   ```
- **Lambda Function**: Written in TypeScript, this function parses and processes the contents of the uploaded text files.
  ```
   infra/lambda/index.ts
   ```

### Data Processing

- The Lambda function extracts content from the uploaded text files and processes it.

### Data Storage

- **Amazon DynamoDB**: The processed data is stored in a DynamoDB table, ensuring scalability and durability.

### Monitoring

- **Amazon CloudWatch**: Logs and performance metrics are automatically captured for monitoring and troubleshooting.



### Infrastructure as Code 

- **AWS CDK**: All resources are defined and managed using AWS CDK, allowing for easy deployment and management of the entire stack.
```bash
   cdk bootstrap
   ```
  This command will create all required CF templates and ready to deploy the resources.
## Step 3: Deploying the Stack

To deploy the stack, use the following command:

```bash
cdk deploy
```

This command will create all the necessary AWS resources, including the API Gateway, Lambda function, and DynamoDB table.

## Step 4: Testing the API

After deployment, you can test the API by uploading a text file using `curl`:

```bash
curl -X POST -H "Content-Type: text/plain" --data-binary "@sample.txt" https://r9vszfqsr4.execute-api.us-east-1.amazonaws.com/prod
```

Replace `sample.txt` with the path to your text file, and `https://your-api-gateway-url/your-endpoint` with the actual URL of your API Gateway.

## Step 5: Monitoring and Logging

we can monitor the performance and logs of your Lambda function in **Amazon CloudWatch**.

## Step 6: Removing the Stack

To remove all resources created by the stack, use the following command:

```bash
cdk destroy
```

This will delete the CloudFormation stack along with all the associated resources like the Lambda function, DynamoDB table, and API Gateway.

## Summary

This project is a complete serverless data processing pipeline that integrates API Gateway, Lambda, and DynamoDB, all managed via AWS CDK. The stack is secure, scalable, and easily deployable via CLI commands.

>>>>>>> 93d23c22c0fb2610a8cd59433296be8a98032f48
