<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility: prepare_body

class YugiLimitRegulationPrepareBody
{
    public static function call(YugiLimitRegulationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
