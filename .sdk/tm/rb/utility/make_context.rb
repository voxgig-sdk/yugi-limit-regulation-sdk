# YugiLimitRegulation SDK utility: make_context
require_relative '../core/context'
module YugiLimitRegulationUtilities
  MakeContext = ->(ctxmap, basectx) {
    YugiLimitRegulationContext.new(ctxmap, basectx)
  }
end
