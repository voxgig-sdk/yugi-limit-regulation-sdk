
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'YugiLimitRegulation',
        slug: "yugi-limit-regulation",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      currentvector: {
      },

    }
  }


  entity = {
    "currentvector": {
      "fields": [
        {
          "name": "effective",
          "req": true,
          "short": "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
          "type": "`$STRING`"
        },
        {
          "name": "forbidden",
          "short": "List of card IDs that are forbidden (cannot be used)",
          "type": "`$ARRAY`"
        },
        {
          "name": "format",
          "req": true,
          "short": "The game format this limit regulation applies to",
          "type": "`$STRING`"
        },
        {
          "name": "limited",
          "short": "List of card IDs that are limited (only 1 copy allowed)",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "short": "Name or identifier of the limit regulation",
          "type": "`$STRING`"
        },
        {
          "name": "semi_limited",
          "short": "List of card IDs that are semi-limited (only 2 copies allowed)",
          "type": "`$ARRAY`"
        },
        {
          "name": "unlimited",
          "short": "List of card IDs that have been moved to unlimited (3 copies allowed)",
          "type": "`$ARRAY`"
        }
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
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/master-duel/current.vector.json",
              "parts": [
                "master-duel",
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ocg-ae/current.vector.json",
              "parts": [
                "ocg-ae",
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ocg-cn/current.vector.json",
              "parts": [
                "ocg-cn",
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ocg/current.vector.json",
              "parts": [
                "ocg",
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/rush/current.vector.json",
              "parts": [
                "rush",
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/tcg/current.vector.json",
              "parts": [
                "tcg",
                "current.vector.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

