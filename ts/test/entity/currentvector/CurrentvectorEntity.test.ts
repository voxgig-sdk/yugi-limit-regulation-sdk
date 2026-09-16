

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"effective","req":true,"short":"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)","type":"`$STRING`","index$":0},{"active":true,"name":"forbidden","req":false,"short":"List of card IDs that are forbidden (cannot be used)","type":"`$ARRAY`","index$":1},{"active":true,"name":"format","req":true,"short":"The game format this limit regulation applies to","type":"`$STRING`","index$":2},{"active":true,"name":"limited","req":false,"short":"List of card IDs that are limited (only 1 copy allowed)","type":"`$ARRAY`","index$":3},{"active":true,"name":"name","req":false,"short":"Name or identifier of the limit regulation","type":"`$STRING`","index$":4},{"active":true,"name":"semi_limited","req":false,"short":"List of card IDs that are semi-limited (only 2 copies allowed)","type":"`$ARRAY`","index$":5},{"active":true,"name":"unlimited","req":false,"short":"List of card IDs that have been moved to unlimited (3 copies allowed)","type":"`$ARRAY`","index$":6}],"name":"currentvector","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /genesys/current.vector.json","json":"{\"operationId\":\"getCurrentGenesysBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current TCG Genesys banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/genesys/current.vector.json","segments":[{"lit":"genesys"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /master-duel/current.vector.json","json":"{\"operationId\":\"getCurrentMasterDuelBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current Master Duel banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/master-duel/current.vector.json","segments":[{"lit":"master-duel"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"GET /ocg-ae/current.vector.json","json":"{\"operationId\":\"getCurrentOCGAEBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current OCG-AE banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ocg-ae/current.vector.json","segments":[{"lit":"ocg-ae"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{},"contract":{"id":"GET /ocg-cn/current.vector.json","json":"{\"operationId\":\"getCurrentOCGCNBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current OCG China banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ocg-cn/current.vector.json","segments":[{"lit":"ocg-cn"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"GET /ocg/current.vector.json","json":"{\"operationId\":\"getCurrentOCGBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current OCG banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ocg/current.vector.json","segments":[{"lit":"ocg"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4},{"active":true,"args":{},"contract":{"id":"GET /rush/current.vector.json","json":"{\"operationId\":\"getCurrentRushBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current Rush Duel banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/rush/current.vector.json","segments":[{"lit":"rush"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":5},{"active":true,"args":{},"contract":{"id":"GET /tcg/current.vector.json","json":"{\"operationId\":\"getCurrentTCGBanlist\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A Forbidden & Limited List (banlist) containing card limitations for a specific Yu-Gi-Oh! format\",\"properties\":{\"effective\":{\"description\":\"Effective date of the limit regulation in ISO 8601 format (YYYY-MM-DD)\",\"format\":\"date\",\"type\":\"string\"},\"forbidden\":{\"description\":\"List of card IDs that are forbidden (cannot be used)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"format\":{\"description\":\"The game format this limit regulation applies to\",\"enum\":[\"TCG\",\"OCG\",\"OCG-AE\",\"OCG-CN\",\"Rush Duel\",\"Master Duel\",\"TCG Genesys\"],\"type\":\"string\"},\"limited\":{\"description\":\"List of card IDs that are limited (only 1 copy allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"name\":{\"description\":\"Name or identifier of the limit regulation\",\"type\":\"string\"},\"semi_limited\":{\"description\":\"List of card IDs that are semi-limited (only 2 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"unlimited\":{\"description\":\"List of card IDs that have been moved to unlimited (3 copies allowed)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"effective\",\"format\"],\"type\":\"object\"}}},\"description\":\"Successful response with current TCG banlist\"},\"404\":{\"description\":\"Banlist not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/tcg/current.vector.json","segments":[{"lit":"tcg"},{"lit":"current.vector.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"currentvector","name__orig":"currentvector","Name":"Currentvector","name_":"currentvector","name-":"currentvector","NAME":"CURRENTVECTOR","index$":0}, {"active":true,"entity":"currentvector","key$":"BasicCurrentvectorFlow","kind":"basic","name":"BasicCurrentvectorFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"currentvector_ref01"}}],"index$":0}]}, 'Currentvector')
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
  
