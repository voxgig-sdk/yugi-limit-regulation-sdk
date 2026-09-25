"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'YugiLimitRegulation',
        slug: "yugi-limit-regulation",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
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
    };
    options = {
        base: "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            currentvector: {},
        }
    };
    entity = {
        "currentvector": {
            "fields": [
                {
                    "name": "effective",
                    "title": "Effective",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
                    "format": "date"
                },
                {
                    "name": "forbidden",
                    "title": "Forbidden",
                    "type": "`$ARRAY`",
                    "short": "List of card IDs that are forbidden (cannot be used)"
                },
                {
                    "name": "format",
                    "title": "Format",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The game format this limit regulation applies to"
                },
                {
                    "name": "limited",
                    "title": "Limited",
                    "type": "`$ARRAY`",
                    "short": "List of card IDs that are limited (only 1 copy allowed)"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name or identifier of the limit regulation"
                },
                {
                    "name": "semi_limited",
                    "title": "Semi Limited",
                    "type": "`$ARRAY`",
                    "short": "List of card IDs that are semi-limited (only 2 copies allowed)"
                },
                {
                    "name": "unlimited",
                    "title": "Unlimited",
                    "type": "`$ARRAY`",
                    "short": "List of card IDs that have been moved to unlimited (3 copies allowed)"
                }
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
                                    "lit": "genesys"
                                },
                                {
                                    "lit": "current.vector.json"
                                }
                            ],
                            "parts": [
                                "genesys",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "master-duel",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "ocg-ae",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "ocg-cn",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "ocg",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "rush",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "tcg",
                                "current.vector.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map