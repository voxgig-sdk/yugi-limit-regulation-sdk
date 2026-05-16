-- ProjectName SDK exists test

local sdk = require("yugi-limit-regulation_sdk")

describe("YugiLimitRegulationSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
