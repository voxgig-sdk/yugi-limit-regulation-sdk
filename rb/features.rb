# YugiLimitRegulation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module YugiLimitRegulationFeatures
  def self.make_feature(name)
    case name
    when "base"
      YugiLimitRegulationBaseFeature.new
    when "test"
      YugiLimitRegulationTestFeature.new
    else
      YugiLimitRegulationBaseFeature.new
    end
  end
end
