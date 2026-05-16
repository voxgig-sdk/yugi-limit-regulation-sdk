<?php
declare(strict_types=1);

// YugiLimitRegulation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

YugiLimitRegulationUtility::setRegistrar(function (YugiLimitRegulationUtility $u): void {
    $u->clean = [YugiLimitRegulationClean::class, 'call'];
    $u->done = [YugiLimitRegulationDone::class, 'call'];
    $u->make_error = [YugiLimitRegulationMakeError::class, 'call'];
    $u->feature_add = [YugiLimitRegulationFeatureAdd::class, 'call'];
    $u->feature_hook = [YugiLimitRegulationFeatureHook::class, 'call'];
    $u->feature_init = [YugiLimitRegulationFeatureInit::class, 'call'];
    $u->fetcher = [YugiLimitRegulationFetcher::class, 'call'];
    $u->make_fetch_def = [YugiLimitRegulationMakeFetchDef::class, 'call'];
    $u->make_context = [YugiLimitRegulationMakeContext::class, 'call'];
    $u->make_options = [YugiLimitRegulationMakeOptions::class, 'call'];
    $u->make_request = [YugiLimitRegulationMakeRequest::class, 'call'];
    $u->make_response = [YugiLimitRegulationMakeResponse::class, 'call'];
    $u->make_result = [YugiLimitRegulationMakeResult::class, 'call'];
    $u->make_point = [YugiLimitRegulationMakePoint::class, 'call'];
    $u->make_spec = [YugiLimitRegulationMakeSpec::class, 'call'];
    $u->make_url = [YugiLimitRegulationMakeUrl::class, 'call'];
    $u->param = [YugiLimitRegulationParam::class, 'call'];
    $u->prepare_auth = [YugiLimitRegulationPrepareAuth::class, 'call'];
    $u->prepare_body = [YugiLimitRegulationPrepareBody::class, 'call'];
    $u->prepare_headers = [YugiLimitRegulationPrepareHeaders::class, 'call'];
    $u->prepare_method = [YugiLimitRegulationPrepareMethod::class, 'call'];
    $u->prepare_params = [YugiLimitRegulationPrepareParams::class, 'call'];
    $u->prepare_path = [YugiLimitRegulationPreparePath::class, 'call'];
    $u->prepare_query = [YugiLimitRegulationPrepareQuery::class, 'call'];
    $u->result_basic = [YugiLimitRegulationResultBasic::class, 'call'];
    $u->result_body = [YugiLimitRegulationResultBody::class, 'call'];
    $u->result_headers = [YugiLimitRegulationResultHeaders::class, 'call'];
    $u->transform_request = [YugiLimitRegulationTransformRequest::class, 'call'];
    $u->transform_response = [YugiLimitRegulationTransformResponse::class, 'call'];
});
