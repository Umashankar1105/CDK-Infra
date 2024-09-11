import { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as CloudWatch from 'aws-sdk/clients/cloudwatch';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME!;
const cloudwatch = new CloudWatch();

export const handler = async (event: any) => {
  const startTime = new Date().getTime(); // Start time to measure duration

  try {
    const fileContent = JSON.parse(event.body).fileContent;

    const itemId = uuidv4();
    const params = {
      TableName: tableName,
      Item: {
        id: itemId,
        content: fileContent,
      },
    };

    await dynamoDb.put(params).promise();

    const endTime = new Date().getTime();
    const duration = endTime - startTime; // Measure the duration

    // Log the custom metric to CloudWatch
    await cloudwatch.putMetricData({
      MetricData: [
        {
          MetricName: 'ProcessingDuration',
          Dimensions: [
            {
              Name: 'FunctionName',
              Value: 'DataProcessorLambda',
            },
          ],
          Unit: 'Milliseconds',
          Value: duration,
        },
      ],
      Namespace: 'CustomMetrics',
    }).promise();

    console.log(`Item ${itemId} successfully written to table. Processing duration: ${duration} ms`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File processed successfully', id: itemId }),
    };
  } catch (error) {
    console.error('Error processing file:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};