# YugiLimitRegulation SDK configuration


def make_config():
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "forbidden",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "format",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "limited",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "semi_limited",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "unlimited",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 6,
          },
        ],
        "name": "currentvector",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/genesys/current.vector.json",
                "parts": [
                  "genesys",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/master-duel/current.vector.json",
                "parts": [
                  "master-duel",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 1,
              },
              {
                "method": "GET",
                "orig": "/ocg-ae/current.vector.json",
                "parts": [
                  "ocg-ae",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 2,
              },
              {
                "method": "GET",
                "orig": "/ocg-cn/current.vector.json",
                "parts": [
                  "ocg-cn",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 3,
              },
              {
                "method": "GET",
                "orig": "/ocg/current.vector.json",
                "parts": [
                  "ocg",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 4,
              },
              {
                "method": "GET",
                "orig": "/rush/current.vector.json",
                "parts": [
                  "rush",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 5,
              },
              {
                "method": "GET",
                "orig": "/tcg/current.vector.json",
                "parts": [
                  "tcg",
                  "current.vector.json",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 6,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
