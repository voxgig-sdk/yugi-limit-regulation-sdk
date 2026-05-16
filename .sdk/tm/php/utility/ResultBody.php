<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility: result_body

class YugiLimitRegulationResultBody
{
    public static function call(YugiLimitRegulationContext $ctx): ?YugiLimitRegulationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
