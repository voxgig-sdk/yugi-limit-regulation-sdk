
import { Context } from './Context'


class YugiLimitRegulationError extends Error {

  isYugiLimitRegulationError = true

  sdk = 'YugiLimitRegulation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  YugiLimitRegulationError
}

