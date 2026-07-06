<?php
declare(strict_types=1);

// Typed models for the YugiLimitRegulation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Currentvector entity data model. */
class Currentvector
{
    public string $effective;
    public ?array $forbidden = null;
    public string $format;
    public ?array $limited = null;
    public ?string $name = null;
    public ?array $semi_limited = null;
    public ?array $unlimited = null;
}

/** Request payload for Currentvector#list. */
class CurrentvectorListMatch
{
    public ?string $effective = null;
    public ?array $forbidden = null;
    public ?string $format = null;
    public ?array $limited = null;
    public ?string $name = null;
    public ?array $semi_limited = null;
    public ?array $unlimited = null;
}

