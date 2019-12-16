import winston, { loggers } from 'winston';

// const generateLog = (ctx: Koa.Context, usageTime: number) => {
//     const msg: string = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${usageTime}ms`;
//     return msg;
// }

// export default function(winstonInstance) {
//     return async(ctx: Koa.Context, next: () => Promise<any>) => {
//         const start = new Date().getTime();
//         await next();
//         const usageTime = new Date().getTime() - start;

//         let logLevel: string;
//         if (ctx.status >= 500) {
//             logLevel = 'error';
//         } else if (ctx.status >= 400) {
//             logLevel = 'warn';
//         } else if (ctx.status >= 100) {
//             logLevel = 'info';
//         }
//         winstonInstance.log(logLevel, generateLog(ctx, usageTime));
//     }
// }