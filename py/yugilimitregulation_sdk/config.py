# YugiLimitRegulation SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "forbidden",
            "type": "`$ARRAY`",
          },
          {
            "name": "format",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "limited",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "semi_limited",
            "type": "`$ARRAY`",
          },
          {
            "name": "unlimited",
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
                "parts": [
                  "genesys",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/master-duel/current.vector.json",
                "parts": [
                  "master-duel",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/ocg-ae/current.vector.json",
                "parts": [
                  "ocg-ae",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/ocg-cn/current.vector.json",
                "parts": [
                  "ocg-cn",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/ocg/current.vector.json",
                "parts": [
                  "ocg",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/rush/current.vector.json",
                "parts": [
                  "rush",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/tcg/current.vector.json",
                "parts": [
                  "tcg",
                  "current.vector.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
