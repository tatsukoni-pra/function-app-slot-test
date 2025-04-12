import { app, InvocationContext } from "@azure/functions";

export async function cosmosDBTrigger1(documents: unknown[], context: InvocationContext): Promise<void> {
    context.log(`Cosmos DB function processed ${documents.length} documents`);
}

app.cosmosDB('cosmosDBTrigger1', {
    connectionStringSetting: 'COSMOS_CONNECTION_STRING',
    databaseName: 'SampleDB',
    collectionName: 'SampleContainer',
    createLeaseCollectionIfNotExists: true,
    handler: cosmosDBTrigger1
});
