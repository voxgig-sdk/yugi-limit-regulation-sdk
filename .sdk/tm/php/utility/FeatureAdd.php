<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility: feature_add

class YugiLimitRegulationFeatureAdd
{
    public static function call(YugiLimitRegulationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
