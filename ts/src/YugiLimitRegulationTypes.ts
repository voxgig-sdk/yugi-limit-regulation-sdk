// Typed models for the YugiLimitRegulation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Currentvector {
  effective: string
  forbidden?: any[]
  format: string
  limited?: any[]
  name?: string
  semi_limited?: any[]
  unlimited?: any[]
}

export type CurrentvectorListMatch = Partial<Currentvector>

