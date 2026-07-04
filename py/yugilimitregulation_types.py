# Typed models for the YugiLimitRegulation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Currentvector:
    effective: str
    format: str
    forbidden: Optional[list] = None
    limited: Optional[list] = None
    name: Optional[str] = None
    semi_limited: Optional[list] = None
    unlimited: Optional[list] = None


@dataclass
class CurrentvectorListMatch:
    effective: Optional[str] = None
    forbidden: Optional[list] = None
    format: Optional[str] = None
    limited: Optional[list] = None
    name: Optional[str] = None
    semi_limited: Optional[list] = None
    unlimited: Optional[list] = None

