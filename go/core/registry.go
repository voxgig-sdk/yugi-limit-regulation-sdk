package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCurrentvectorEntityFunc func(client *YugiLimitRegulationSDK, entopts map[string]any) YugiLimitRegulationEntity

