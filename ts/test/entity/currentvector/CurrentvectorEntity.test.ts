

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { YugiLimitRegulationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CurrentvectorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when YUGI_LIMIT_REGULATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('YUGI_LIMIT_REGULATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = YugiLimitRegulationSDK.test()
    const ent = testsdk.Currentvector()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.YUGI_LIMIT_REGULATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'currentvector.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"effective":{"a":true,"fo":"date","h":"Effective","n":"effective","r":true,"sh":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","t":"`$STRING`","key$":"effective","index$":0},"forbidden":{"a":true,"h":"Forbidden","n":"forbidden","r":false,"sh":"List of card IDs that are forbidden (cannot be used)","t":"`$ARRAY`","key$":"forbidden","index$":1},"format":{"a":true,"h":"Format","n":"format","r":true,"sh":"The game format this limit regulation applies to","t":"`$STRING`","key$":"format","index$":2},"limited":{"a":true,"h":"Limited","n":"limited","r":false,"sh":"List of card IDs that are limited (only 1 copy allowed)","t":"`$ARRAY`","key$":"limited","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name or identifier of the limit regulation","t":"`$STRING`","key$":"name","index$":4},"semi_limited":{"a":true,"h":"Semi Limited","n":"semi_limited","r":false,"sh":"List of card IDs that are semi-limited (only 2 copies allowed)","t":"`$ARRAY`","key$":"semi_limited","index$":5},"unlimited":{"a":true,"h":"Unlimited","n":"unlimited","r":false,"sh":"List of card IDs that have been moved to unlimited (3 copies allowed)","t":"`$ARRAY`","key$":"unlimited","index$":6}},"name":"currentvector","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /genesys/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/genesys/current.vector.json","q":{},"r":{},"s":[{"lit":"genesys"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /master-duel/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/master-duel/current.vector.json","q":{},"r":{},"s":[{"lit":"master-duel"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /ocg-ae/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/ocg-ae/current.vector.json","q":{},"r":{},"s":[{"lit":"ocg-ae"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /ocg-cn/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/ocg-cn/current.vector.json","q":{},"r":{},"s":[{"lit":"ocg-cn"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /ocg/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/ocg/current.vector.json","q":{},"r":{},"s":[{"lit":"ocg"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /rush/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/rush/current.vector.json","q":{},"r":{},"s":[{"lit":"rush"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /tcg/current.vector.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/tcg/current.vector.json","q":{},"r":{},"s":[{"lit":"tcg"},{"lit":"current.vector.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"currentvector","name__orig":"currentvector","Name":"Currentvector","name_":"currentvector","name-":"currentvector","NAME":"CURRENTVECTOR","index$":0}, {"active":true,"entity":"currentvector","key$":"BasicCurrentvectorFlow","kind":"basic","name":"BasicCurrentvectorFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"currentvector_ref01"}}],"index$":0}]}, 'Currentvector', {"GET /genesys/current.vector.json":{"protocol":"http","operationId":"getCurrentGenesysBanlist","responses":{"200":{"description":"Successful response with current TCG Genesys banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"},"GET /master-duel/current.vector.json":{"protocol":"http","operationId":"getCurrentMasterDuelBanlist","responses":{"200":{"description":"Successful response with current Master Duel banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"},"GET /ocg-ae/current.vector.json":{"protocol":"http","operationId":"getCurrentOCGAEBanlist","responses":{"200":{"description":"Successful response with current OCG-AE banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"},"GET /ocg-cn/current.vector.json":{"protocol":"http","operationId":"getCurrentOCGCNBanlist","responses":{"200":{"description":"Successful response with current OCG China banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"},"GET /ocg/current.vector.json":{"protocol":"http","operationId":"getCurrentOCGBanlist","responses":{"200":{"description":"Successful response with current OCG banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"},"GET /rush/current.vector.json":{"protocol":"http","operationId":"getCurrentRushBanlist","responses":{"200":{"description":"Successful response with current Rush Duel banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"},"GET /tcg/current.vector.json":{"protocol":"http","operationId":"getCurrentTCGBanlist","responses":{"200":{"description":"Successful response with current TCG banlist","content":{"application/json":{"schema":{"type":"object","description":"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format","properties":{"name":{"description":"Name or identifier of the limit regulation","key$":"name","type":"string"},"effective":{"description":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","format":"date","key$":"effective","type":"string"},"format":{"description":"The game format this limit regulation applies to","enum":["TCG","OCG","OCG-AE","OCG-CN","Rush Duel","Master Duel","TCG Genesys"],"key$":"format","type":"string"},"forbidden":{"description":"List of card IDs that are forbidden (cannot be used)","items":{"type":"integer"},"key$":"forbidden","type":"array"},"limited":{"description":"List of card IDs that are limited (only 1 copy allowed)","items":{"type":"integer"},"key$":"limited","type":"array"},"semi_limited":{"description":"List of card IDs that are semi-limited (only 2 copies allowed)","items":{"type":"integer"},"key$":"semi_limited","type":"array"},"unlimited":{"description":"List of card IDs that have been moved to unlimited (3 copies allowed)","items":{"type":"integer"},"key$":"unlimited","type":"array"}},"required":["effective","format"],"x-ref":"#/components/schemas/LimitRegulation","index$":0}}}},"404":{"description":"Banlist not found"}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let currentvector_ref01_data = Object.values(setup.data.existing.currentvector)[0] as any

    // LIST
    const currentvector_ref01_ent = client.Currentvector()
    const currentvector_ref01_match: any = {}

    const currentvector_ref01_list = (await currentvector_ref01_ent.list(currentvector_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/currentvector/CurrentvectorTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = YugiLimitRegulationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['currentvector01','currentvector02','currentvector03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'YUGI_LIMIT_REGULATION_TEST_CURRENTVECTOR_ENTID': idmap,
    'YUGI_LIMIT_REGULATION_TEST_LIVE': 'FALSE',
    'YUGI_LIMIT_REGULATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['YUGI_LIMIT_REGULATION_TEST_CURRENTVECTOR_ENTID']

  const live = 'TRUE' === env.YUGI_LIMIT_REGULATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['YUGI_LIMIT_REGULATION_TEST_CURRENTVECTOR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new YugiLimitRegulationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.YUGI_LIMIT_REGULATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
