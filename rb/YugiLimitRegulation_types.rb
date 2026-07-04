# frozen_string_literal: true

# Typed models for the YugiLimitRegulation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Currentvector entity data model.
#
# @!attribute [rw] effective
#   @return [String]
#
# @!attribute [rw] forbidden
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String]
#
# @!attribute [rw] limited
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] semi_limited
#   @return [Array, nil]
#
# @!attribute [rw] unlimited
#   @return [Array, nil]
Currentvector = Struct.new(
  :effective,
  :forbidden,
  :format,
  :limited,
  :name,
  :semi_limited,
  :unlimited,
  keyword_init: true
)

# Match filter for Currentvector#list (any subset of Currentvector fields).
#
# @!attribute [rw] effective
#   @return [String, nil]
#
# @!attribute [rw] forbidden
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] limited
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] semi_limited
#   @return [Array, nil]
#
# @!attribute [rw] unlimited
#   @return [Array, nil]
CurrentvectorListMatch = Struct.new(
  :effective,
  :forbidden,
  :format,
  :limited,
  :name,
  :semi_limited,
  :unlimited,
  keyword_init: true
)

