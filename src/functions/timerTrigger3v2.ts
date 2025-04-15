import { app, InvocationContext, Timer } from "@azure/functions";

export async function timerTrigger3v2(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('timerTrigger3v2', {
    schedule: '0 */5 * * * *',
    handler: timerTrigger3v2
});
