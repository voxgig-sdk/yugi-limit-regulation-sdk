
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "format": "date",
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
              "segments": [
                {
                  "lit": "genesys"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "genesys",
                "current.vector.json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/master-duel/current.vector.json",
              "segments": [
                {
                  "lit": "master-duel"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "master-duel",
                "current.vector.json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ocg-ae/current.vector.json",
              "segments": [
                {
                  "lit": "ocg-ae"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "ocg-ae",
                "current.vector.json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ocg-cn/current.vector.json",
              "segments": [
                {
                  "lit": "ocg-cn"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "ocg-cn",
                "current.vector.json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ocg/current.vector.json",
              "segments": [
                {
                  "lit": "ocg"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "ocg",
                "current.vector.json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/rush/current.vector.json",
              "segments": [
                {
                  "lit": "rush"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "rush",
                "current.vector.json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/tcg/current.vector.json",
              "segments": [
                {
                  "lit": "tcg"
                },
                {
                  "lit": "current.vector.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tcg",
                "current.vector.json"
              ]
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
  config,
  FEATURE_PLUGINS,
}

