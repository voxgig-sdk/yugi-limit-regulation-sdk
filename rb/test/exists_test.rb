# YugiLimitRegulation SDK exists test

require "minitest/autorun"
require_relative "../YugiLimitRegulation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = YugiLimitRegulationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
