
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


  main = {
    name: 'YugiLimitRegulation',
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
          "type": "`$STRING`"
        },
        {
          "name": "forbidden",
          "type": "`$ARRAY`"
        },
        {
          "name": "format",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "limited",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "semi_limited",
          "type": "`$ARRAY`"
        },
        {
          "name": "unlimited",
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

