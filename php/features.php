<?php
declare(strict_types=1);

// YugiLimitRegulation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class YugiLimitRegulationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new YugiLimitRegulationBaseFeature();
            case "test":
                return new YugiLimitRegulationTestFeature();
            default:
                return new YugiLimitRegulationBaseFeature();
        }
    }
}
