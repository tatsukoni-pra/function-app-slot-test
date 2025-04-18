import { app, InvocationContext, Timer } from "@azure/functions";

export async function timerTrigger5(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('timerTrigger5', {
    schedule: '0 */5 * * * *',
    handler: timerTrigger5
});
