
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YugiLimitRegulationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = YugiLimitRegulationSDK.test()
    equal(testsdk instanceof YugiLimitRegulationSDK, true,
      'YugiLimitRegulationSDK.test() must return a client synchronously')
  })

})
