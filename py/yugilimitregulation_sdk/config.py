# YugiLimitRegulation SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "YugiLimitRegulation",
            "slug": "yugi-limit-regulation",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "currentvector": {},
            },
        },
        "entity": {
      "currentvector": {
        "fields": [
          {
            "format": "date",
            "name": "effective",
            "req": True,
            "short": "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
            "type": "`$STRING`",
          },
          {
            "name": "forbidden",
            "short": "List of card IDs that are forbidden (cannot be used)",
            "type": "`$ARRAY`",
          },
          {
            "name": "format",
            "req": True,
            "short": "The game format this limit regulation applies to",
            "type": "`$STRING`",
          },
          {
            "name": "limited",
            "short": "List of card IDs that are limited (only 1 copy allowed)",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "short": "Name or identifier of the limit regulation",
            "type": "`$STRING`",
          },
          {
            "name": "semi_limited",
            "short": "List of card IDs that are semi-limited (only 2 copies allowed)",
            "type": "`$ARRAY`",
          },
          {
            "name": "unlimited",
            "short": "List of card IDs that have been moved to unlimited (3 copies allowed)",
            "type": "`$ARRAY`",
          },
        ],
        "name": "currentvector",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/genesys/current.vector.json",
                "segments": [
                  {
                    "lit": "genesys",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "genesys",
                  "current.vector.json",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/master-duel/current.vector.json",
                "segments": [
                  {
                    "lit": "master-duel",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "master-duel",
                  "current.vector.json",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/ocg-ae/current.vector.json",
                "segments": [
                  {
                    "lit": "ocg-ae",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "ocg-ae",
                  "current.vector.json",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/ocg-cn/current.vector.json",
                "segments": [
                  {
                    "lit": "ocg-cn",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "ocg-cn",
                  "current.vector.json",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/ocg/current.vector.json",
                "segments": [
                  {
                    "lit": "ocg",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "ocg",
                  "current.vector.json",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/rush/current.vector.json",
                "segments": [
                  {
                    "lit": "rush",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "rush",
                  "current.vector.json",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/tcg/current.vector.json",
                "segments": [
                  {
                    "lit": "tcg",
                  },
                  {
                    "lit": "current.vector.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "tcg",
                  "current.vector.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
