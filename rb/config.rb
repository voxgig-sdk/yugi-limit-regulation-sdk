# YugiLimitRegulation SDK configuration

module YugiLimitRegulationConfig
  def self.make_config
    {
      "main" => {
        "name" => "YugiLimitRegulation",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "currentvector" => {},
        },
      },
      "entity" => {
        "currentvector" => {
          "fields" => [
            {
              "active" => true,
              "name" => "effective",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "forbidden",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "format",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "limited",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "semi_limited",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "unlimited",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 6,
            },
          ],
          "name" => "currentvector",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/genesys/current.vector.json",
                  "parts" => [
                    "genesys",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/master-duel/current.vector.json",
                  "parts" => [
                    "master-duel",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/ocg-ae/current.vector.json",
                  "parts" => [
                    "ocg-ae",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 2,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/ocg-cn/current.vector.json",
                  "parts" => [
                    "ocg-cn",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 3,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/ocg/current.vector.json",
                  "parts" => [
                    "ocg",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 4,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/rush/current.vector.json",
                  "parts" => [
                    "rush",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 5,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/tcg/current.vector.json",
                  "parts" => [
                    "tcg",
                    "current.vector.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 6,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    YugiLimitRegulationFeatures.make_feature(name)
  end
end
