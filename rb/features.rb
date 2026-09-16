# YugiLimitRegulation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module YugiLimitRegulationFeatures
  def self.make_feature(name)
    case name
    when "base"
      YugiLimitRegulationBaseFeature.new
    when "ratelimit"
      YugiLimitRegulationRatelimitFeature.new
    when "retry"
      YugiLimitRegulationRetryFeature.new
    when "test"
      YugiLimitRegulationTestFeature.new
    when "timeout"
      YugiLimitRegulationTimeoutFeature.new
    else
      YugiLimitRegulationBaseFeature.new
    end
  end
end
