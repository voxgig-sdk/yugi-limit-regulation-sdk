<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility: prepare_path

class YugiLimitRegulationPreparePath
{
    public static function call(YugiLimitRegulationContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
