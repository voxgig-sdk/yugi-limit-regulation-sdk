<?php
declare(strict_types=1);

// YugiLimitRegulation SDK exists test

require_once __DIR__ . '/../yugilimitregulation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = YugiLimitRegulationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
