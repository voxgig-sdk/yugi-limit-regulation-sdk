-- YugiLimitRegulation SDK error

local YugiLimitRegulationError = {}
YugiLimitRegulationError.__index = YugiLimitRegulationError


function YugiLimitRegulationError.new(code, msg, ctx)
  local self = setmetatable({}, YugiLimitRegulationError)
  self.is_sdk_error = true
  self.sdk = "YugiLimitRegulation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function YugiLimitRegulationError:error()
  return self.msg
end


function YugiLimitRegulationError:__tostring()
  return self.msg
end


return YugiLimitRegulationError
