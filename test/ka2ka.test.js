import ka2ka from "../ka2ka.js"

test("Gamarjoba", () => {
  expect(ka2ka("Gamarjoba")).toEqual("გამარჯობა")
})

test("A sentence", () => {
  expect(ka2ka("90 baq'aq'ebi ch'aobshi q'iq'inen")).toEqual("90 ბაყაყები ჭაობში ყიყინენ")
})

test("Alt spelling", () => {
  expect(ka2ka("otxi baqaqebi")).toEqual(ka2ka("otkhi baq'aq'ebi"))
})

test('Numbers', () => {
  expect(ka2ka(9)).toEqual("9")
})