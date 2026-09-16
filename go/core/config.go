package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "YugiLimitRegulation",
			"slug": "yugi-limit-regulation",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"currentvector": map[string]any{},
			},
		},
		"entity": map[string]any{
			"currentvector": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "effective",
						"req": true,
						"short": "Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "forbidden",
						"short": "List of card IDs that are forbidden (cannot be used)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "format",
						"req": true,
						"short": "The game format this limit regulation applies to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limited",
						"short": "List of card IDs that are limited (only 1 copy allowed)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "Name or identifier of the limit regulation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "semi_limited",
						"short": "List of card IDs that are semi-limited (only 2 copies allowed)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "unlimited",
						"short": "List of card IDs that have been moved to unlimited (3 copies allowed)",
						"type": "`$ARRAY`",
					},
				},
				"name": "currentvector",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/genesys/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "genesys",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"genesys",
									"current.vector.json",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/master-duel/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "master-duel",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"master-duel",
									"current.vector.json",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/ocg-ae/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "ocg-ae",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ocg-ae",
									"current.vector.json",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/ocg-cn/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "ocg-cn",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ocg-cn",
									"current.vector.json",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/ocg/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "ocg",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ocg",
									"current.vector.json",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/rush/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "rush",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"rush",
									"current.vector.json",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/tcg/current.vector.json",
								"segments": []any{
									map[string]any{
										"lit": "tcg",
									},
									map[string]any{
										"lit": "current.vector.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tcg",
									"current.vector.json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
