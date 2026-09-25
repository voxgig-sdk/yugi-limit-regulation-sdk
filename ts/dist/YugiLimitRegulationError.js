"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YugiLimitRegulationError = void 0;
class YugiLimitRegulationError extends Error {
    isYugiLimitRegulationError = true;
    sdk = 'YugiLimitRegulation';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.YugiLimitRegulationError = YugiLimitRegulationError;
//# sourceMappingURL=YugiLimitRegulationError.js.map