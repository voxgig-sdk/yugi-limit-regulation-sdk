package = "voxgig-sdk-yugi-limit-regulation"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/yugi-limit-regulation-sdk.git"
}
description = {
  summary = "YugiLimitRegulation SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["yugi-limit-regulation_sdk"] = "yugi-limit-regulation_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
