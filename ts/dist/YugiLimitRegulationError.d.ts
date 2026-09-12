import { Context } from './Context';
declare class YugiLimitRegulationError extends Error {
    isYugiLimitRegulationError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { YugiLimitRegulationError };
