# YugiLimitRegulation SDK configuration

module YugiLimitRegulationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "YugiLimitRegulation",
        "slug" => "yugi-limit-regulation",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "name" => "effective",
              "req" => true,
              "short" => "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
              "type" => "`$STRING`",
            },
            {
              "name" => "forbidden",
              "short" => "List of card IDs that are forbidden (cannot be used)",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "format",
              "req" => true,
              "short" => "The game format this limit regulation applies to",
              "type" => "`$STRING`",
            },
            {
              "name" => "limited",
              "short" => "List of card IDs that are limited (only 1 copy allowed)",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "short" => "Name or identifier of the limit regulation",
              "type" => "`$STRING`",
            },
            {
              "name" => "semi_limited",
              "short" => "List of card IDs that are semi-limited (only 2 copies allowed)",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "unlimited",
              "short" => "List of card IDs that have been moved to unlimited (3 copies allowed)",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "currentvector",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
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
