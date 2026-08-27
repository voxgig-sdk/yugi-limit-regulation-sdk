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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
								"parts": []any{
									"genesys",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/master-duel/current.vector.json",
								"parts": []any{
									"master-duel",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/ocg-ae/current.vector.json",
								"parts": []any{
									"ocg-ae",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/ocg-cn/current.vector.json",
								"parts": []any{
									"ocg-cn",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/ocg/current.vector.json",
								"parts": []any{
									"ocg",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/rush/current.vector.json",
								"parts": []any{
									"rush",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/tcg/current.vector.json",
								"parts": []any{
									"tcg",
									"current.vector.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
