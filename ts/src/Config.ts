
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://dawnbrandbots.github.io/yaml-yugi-limit-regulation',

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
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "forbidden",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "format",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "limited",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 3
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "semi_limited",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 5
        },
        {
          "name": "unlimited",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 6
        }
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
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/master-duel/current.vector.json",
              "parts": [
                "master-duel",
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 1
            },
            {
              "method": "GET",
              "orig": "/ocg-ae/current.vector.json",
              "parts": [
                "ocg-ae",
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            },
            {
              "method": "GET",
              "orig": "/ocg-cn/current.vector.json",
              "parts": [
                "ocg-cn",
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 3
            },
            {
              "method": "GET",
              "orig": "/ocg/current.vector.json",
              "parts": [
                "ocg",
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 4
            },
            {
              "method": "GET",
              "orig": "/rush/current.vector.json",
              "parts": [
                "rush",
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 5
            },
            {
              "method": "GET",
              "orig": "/tcg/current.vector.json",
              "parts": [
                "tcg",
                "current.vector.json"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 6
            }
          ],
          "input": "data",
          "key$": "list"
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

