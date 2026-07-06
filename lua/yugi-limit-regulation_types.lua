-- Typed models for the YugiLimitRegulation SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Currentvector
---@field effective string
---@field forbidden? table
---@field format string
---@field limited? table
---@field name? string
---@field semi_limited? table
---@field unlimited? table

---@class CurrentvectorListMatch
---@field effective? string
---@field forbidden? table
---@field format? string
---@field limited? table
---@field name? string
---@field semi_limited? table
---@field unlimited? table

local M = {}

return M
