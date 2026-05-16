
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YugiLimitRegulationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await YugiLimitRegulationSDK.test()
    equal(null !== testsdk, true)
  })

})
