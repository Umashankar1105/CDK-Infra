import { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME!;

export const handler = async (event: any) => {
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

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File processed successfully', id: itemId }),
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error processing file:', error.message, error.stack);
    } else {
      console.error('Unknown error:', error);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
