# YugiLimitRegulation SDK feature factory

from feature.base_feature import YugiLimitRegulationBaseFeature
from feature.test_feature import YugiLimitRegulationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: YugiLimitRegulationBaseFeature(),
        "test": lambda: YugiLimitRegulationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
