import transliterate from "../transliterate.js"

test("Gamarjoba", () => {
  expect(transliterate("Gamarjoba")).toEqual("გამარჯობა")
})

test("A sentence", () => {
  expect(transliterate("90 baq'aq'ebi ch'aobshi q'iq'inen")).toEqual("90 ბაყაყები ჭაობში ყიყინენ")
})

test("Alt spelling", () => {
  expect(transliterate("90 baqaqebi ch'aobshi qiqinen")).toEqual("90 ბაყაყები ჭაობში ყიყინენ")
  expect(transliterate("otxi")).toEqual(transliterate("otkhi"))
})