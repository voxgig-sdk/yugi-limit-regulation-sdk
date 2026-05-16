<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility: prepare_headers

class YugiLimitRegulationPrepareHeaders
{
    public static function call(YugiLimitRegulationContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
