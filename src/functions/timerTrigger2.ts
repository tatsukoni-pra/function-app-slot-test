import { app, InvocationContext, Timer } from "@azure/functions";

export async function timerTrigger2(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('timerTrigger2', {
    schedule: '0 */5 * * * *',
    handler: timerTrigger2
});
