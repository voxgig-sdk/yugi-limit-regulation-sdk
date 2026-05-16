package voxgigyugilimitregulationsdk

import (
	"github.com/voxgig-sdk/yugi-limit-regulation-sdk/core"
	"github.com/voxgig-sdk/yugi-limit-regulation-sdk/entity"
	"github.com/voxgig-sdk/yugi-limit-regulation-sdk/feature"
	_ "github.com/voxgig-sdk/yugi-limit-regulation-sdk/utility"
)

// Type aliases preserve external API.
type YugiLimitRegulationSDK = core.YugiLimitRegulationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type YugiLimitRegulationEntity = core.YugiLimitRegulationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type YugiLimitRegulationError = core.YugiLimitRegulationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCurrentvectorEntityFunc = func(client *core.YugiLimitRegulationSDK, entopts map[string]any) core.YugiLimitRegulationEntity {
		return entity.NewCurrentvectorEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewYugiLimitRegulationSDK = core.NewYugiLimitRegulationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
