-- YugiLimitRegulation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "YugiLimitRegulation",
      slug = "yugi-limit-regulation",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["currentvector"] = {},
      },
    },
    entity = {
      ["currentvector"] = {
        ["fields"] = {
          {
            ["name"] = "effective",
            ["req"] = true,
            ["short"] = "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "forbidden",
            ["short"] = "List of card IDs that are forbidden (cannot be used)",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "format",
            ["req"] = true,
            ["short"] = "The game format this limit regulation applies to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limited",
            ["short"] = "List of card IDs that are limited (only 1 copy allowed)",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name or identifier of the limit regulation",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "semi_limited",
            ["short"] = "List of card IDs that are semi-limited (only 2 copies allowed)",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "unlimited",
            ["short"] = "List of card IDs that have been moved to unlimited (3 copies allowed)",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "currentvector",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/genesys/current.vector.json",
                ["parts"] = {
                  "genesys",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/master-duel/current.vector.json",
                ["parts"] = {
                  "master-duel",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ocg-ae/current.vector.json",
                ["parts"] = {
                  "ocg-ae",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ocg-cn/current.vector.json",
                ["parts"] = {
                  "ocg-cn",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ocg/current.vector.json",
                ["parts"] = {
                  "ocg",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/rush/current.vector.json",
                ["parts"] = {
                  "rush",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tcg/current.vector.json",
                ["parts"] = {
                  "tcg",
                  "current.vector.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
