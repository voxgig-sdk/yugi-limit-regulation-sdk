# YugiLimitRegulation SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

YugiLimitRegulationUtility.registrar = ->(u) {
  u.clean = YugiLimitRegulationUtilities::Clean
  u.done = YugiLimitRegulationUtilities::Done
  u.make_error = YugiLimitRegulationUtilities::MakeError
  u.feature_add = YugiLimitRegulationUtilities::FeatureAdd
  u.feature_hook = YugiLimitRegulationUtilities::FeatureHook
  u.feature_init = YugiLimitRegulationUtilities::FeatureInit
  u.fetcher = YugiLimitRegulationUtilities::Fetcher
  u.make_fetch_def = YugiLimitRegulationUtilities::MakeFetchDef
  u.make_context = YugiLimitRegulationUtilities::MakeContext
  u.make_options = YugiLimitRegulationUtilities::MakeOptions
  u.make_request = YugiLimitRegulationUtilities::MakeRequest
  u.make_response = YugiLimitRegulationUtilities::MakeResponse
  u.make_result = YugiLimitRegulationUtilities::MakeResult
  u.make_point = YugiLimitRegulationUtilities::MakePoint
  u.make_spec = YugiLimitRegulationUtilities::MakeSpec
  u.make_url = YugiLimitRegulationUtilities::MakeUrl
  u.param = YugiLimitRegulationUtilities::Param
  u.prepare_auth = YugiLimitRegulationUtilities::PrepareAuth
  u.prepare_body = YugiLimitRegulationUtilities::PrepareBody
  u.prepare_headers = YugiLimitRegulationUtilities::PrepareHeaders
  u.prepare_method = YugiLimitRegulationUtilities::PrepareMethod
  u.prepare_params = YugiLimitRegulationUtilities::PrepareParams
  u.prepare_path = YugiLimitRegulationUtilities::PreparePath
  u.prepare_query = YugiLimitRegulationUtilities::PrepareQuery
  u.result_basic = YugiLimitRegulationUtilities::ResultBasic
  u.result_body = YugiLimitRegulationUtilities::ResultBody
  u.result_headers = YugiLimitRegulationUtilities::ResultHeaders
  u.transform_request = YugiLimitRegulationUtilities::TransformRequest
  u.transform_response = YugiLimitRegulationUtilities::TransformResponse
}
