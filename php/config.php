<?php
declare(strict_types=1);

// YugiLimitRegulation SDK configuration

class YugiLimitRegulationConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "YugiLimitRegulation",
                "slug" => "yugi-limit-regulation",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://dawnbrandbots.github.io/yaml-yugi-limit-regulation",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "currentvector" => [],
                ],
            ],
            "entity" => [
        'currentvector' => [
          'fields' => [
            [
              'name' => 'effective',
              'title' => 'Effective',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)',
              'format' => 'date',
            ],
            [
              'name' => 'forbidden',
              'title' => 'Forbidden',
              'type' => '`$ARRAY`',
              'short' => 'List of card IDs that are forbidden (cannot be used)',
            ],
            [
              'name' => 'format',
              'title' => 'Format',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The game format this limit regulation applies to',
            ],
            [
              'name' => 'limited',
              'title' => 'Limited',
              'type' => '`$ARRAY`',
              'short' => 'List of card IDs that are limited (only 1 copy allowed)',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name or identifier of the limit regulation',
            ],
            [
              'name' => 'semi_limited',
              'title' => 'Semi Limited',
              'type' => '`$ARRAY`',
              'short' => 'List of card IDs that are semi-limited (only 2 copies allowed)',
            ],
            [
              'name' => 'unlimited',
              'title' => 'Unlimited',
              'type' => '`$ARRAY`',
              'short' => 'List of card IDs that have been moved to unlimited (3 copies allowed)',
            ],
          ],
          'name' => 'currentvector',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/genesys/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'genesys',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'genesys',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/master-duel/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'master-duel',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'master-duel',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ocg-ae/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'ocg-ae',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'ocg-ae',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ocg-cn/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'ocg-cn',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'ocg-cn',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ocg/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'ocg',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'ocg',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/rush/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'rush',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'rush',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/tcg/current.vector.json',
                  'segments' => [
                    [
                      'lit' => 'tcg',
                    ],
                    [
                      'lit' => 'current.vector.json',
                    ],
                  ],
                  'parts' => [
                    'tcg',
                    'current.vector.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return YugiLimitRegulationFeatures::make_feature($name);
    }
}
