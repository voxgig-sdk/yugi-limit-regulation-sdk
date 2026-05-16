<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class YugiLimitRegulationMakeContext
{
    public static function call(array $ctxmap, ?YugiLimitRegulationContext $basectx): YugiLimitRegulationContext
    {
        return new YugiLimitRegulationContext($ctxmap, $basectx);
    }
}
