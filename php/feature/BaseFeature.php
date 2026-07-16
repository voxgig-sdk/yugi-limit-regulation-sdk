<?php
declare(strict_types=1);

// YugiLimitRegulation SDK base feature

class YugiLimitRegulationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(YugiLimitRegulationContext $ctx, array $options): void {}
    public function PostConstruct(YugiLimitRegulationContext $ctx): void {}
    public function PostConstructEntity(YugiLimitRegulationContext $ctx): void {}
    public function SetData(YugiLimitRegulationContext $ctx): void {}
    public function GetData(YugiLimitRegulationContext $ctx): void {}
    public function GetMatch(YugiLimitRegulationContext $ctx): void {}
    public function SetMatch(YugiLimitRegulationContext $ctx): void {}
    public function PrePoint(YugiLimitRegulationContext $ctx): void {}
    public function PreSpec(YugiLimitRegulationContext $ctx): void {}
    public function PreRequest(YugiLimitRegulationContext $ctx): void {}
    public function PreResponse(YugiLimitRegulationContext $ctx): void {}
    public function PreResult(YugiLimitRegulationContext $ctx): void {}
    public function PreDone(YugiLimitRegulationContext $ctx): void {}
    public function PreUnexpected(YugiLimitRegulationContext $ctx): void {}
}
