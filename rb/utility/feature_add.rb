# YugiLimitRegulation SDK utility: feature_add
module YugiLimitRegulationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
