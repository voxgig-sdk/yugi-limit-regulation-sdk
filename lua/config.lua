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
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
            ["format"] = "date",
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
                ["segments"] = {
                  {
                    ["lit"] = "genesys",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "genesys",
                  "current.vector.json",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/master-duel/current.vector.json",
                ["segments"] = {
                  {
                    ["lit"] = "master-duel",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "master-duel",
                  "current.vector.json",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ocg-ae/current.vector.json",
                ["segments"] = {
                  {
                    ["lit"] = "ocg-ae",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "ocg-ae",
                  "current.vector.json",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ocg-cn/current.vector.json",
                ["segments"] = {
                  {
                    ["lit"] = "ocg-cn",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "ocg-cn",
                  "current.vector.json",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ocg/current.vector.json",
                ["segments"] = {
                  {
                    ["lit"] = "ocg",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "ocg",
                  "current.vector.json",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/rush/current.vector.json",
                ["segments"] = {
                  {
                    ["lit"] = "rush",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "rush",
                  "current.vector.json",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tcg/current.vector.json",
                ["segments"] = {
                  {
                    ["lit"] = "tcg",
                  },
                  {
                    ["lit"] = "current.vector.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "tcg",
                  "current.vector.json",
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
