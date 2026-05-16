package utility

import "github.com/voxgig-sdk/yugi-limit-regulation-sdk/core"

func featureAddUtil(ctx *core.Context, f core.Feature) {
	client := ctx.Client
	features := client.Features

	client.Features = append(features, f)
}
