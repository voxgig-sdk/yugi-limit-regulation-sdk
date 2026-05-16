# ProjectName SDK exists test

import pytest
from yugilimitregulation_sdk import YugiLimitRegulationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = YugiLimitRegulationSDK.test(None, None)
        assert testsdk is not None
