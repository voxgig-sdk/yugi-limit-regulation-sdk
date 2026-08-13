# YugiLimitRegulation SDK utility: make_context

from projectname_sdk.core.context import YugiLimitRegulationContext


def make_context_util(ctxmap, basectx):
    return YugiLimitRegulationContext(ctxmap, basectx)
