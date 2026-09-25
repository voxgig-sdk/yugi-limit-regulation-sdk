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
            "name": "effective",
            "title": "Effective",
            "type": "`$STRING`",
            "req": True,
            "short": "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
            "format": "date",
          },
          {
            "name": "forbidden",
            "title": "Forbidden",
            "type": "`$ARRAY`",
            "short": "List of card IDs that are forbidden (cannot be used)",
          },
          {
            "name": "format",
            "title": "Format",
            "type": "`$STRING`",
            "req": True,
            "short": "The game format this limit regulation applies to",
          },
          {
            "name": "limited",
            "title": "Limited",
            "type": "`$ARRAY`",
            "short": "List of card IDs that are limited (only 1 copy allowed)",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name or identifier of the limit regulation",
          },
          {
            "name": "semi_limited",
            "title": "Semi Limited",
            "type": "`$ARRAY`",
            "short": "List of card IDs that are semi-limited (only 2 copies allowed)",
          },
          {
            "name": "unlimited",
            "title": "Unlimited",
            "type": "`$ARRAY`",
            "short": "List of card IDs that have been moved to unlimited (3 copies allowed)",
          },
        ],
        "name": "currentvector",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
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
                "parts": [
                  "genesys",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "master-duel",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "ocg-ae",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "ocg-cn",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "ocg",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "rush",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "tcg",
                  "current.vector.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
