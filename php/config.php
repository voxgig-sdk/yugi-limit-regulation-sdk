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
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'req' => true,
              'short' => 'Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'forbidden',
              'short' => 'List of card IDs that are forbidden (cannot be used)',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'format',
              'req' => true,
              'short' => 'The game format this limit regulation applies to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'limited',
              'short' => 'List of card IDs that are limited (only 1 copy allowed)',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'short' => 'Name or identifier of the limit regulation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'semi_limited',
              'short' => 'List of card IDs that are semi-limited (only 2 copies allowed)',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'unlimited',
              'short' => 'List of card IDs that have been moved to unlimited (3 copies allowed)',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'currentvector',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/genesys/current.vector.json',
                  'parts' => [
                    'genesys',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/master-duel/current.vector.json',
                  'parts' => [
                    'master-duel',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ocg-ae/current.vector.json',
                  'parts' => [
                    'ocg-ae',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ocg-cn/current.vector.json',
                  'parts' => [
                    'ocg-cn',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ocg/current.vector.json',
                  'parts' => [
                    'ocg',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/rush/current.vector.json',
                  'parts' => [
                    'rush',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/tcg/current.vector.json',
                  'parts' => [
                    'tcg',
                    'current.vector.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
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
