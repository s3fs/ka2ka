const letters = {
  "a": { ka: "ა" },
  "b": { ka: "ბ" },
  "g": { ka: "გ" },
  "d": { ka: "დ" },
  "e": { ka: "ე" },
  "v": { ka: "ვ" },
  "z": { ka: "ზ" },
  "t": { ka: "თ" },
  "i": { ka: "ი" },
  "k'": { ka: "კ" },
  "l": { ka: "ლ" },
  "m": { ka: "მ" },
  "n": { ka: "ნ" },
  "o": { ka: "ო" },
  "p'": { ka: "პ" },
  "zh": { ka: "ჟ" },
  "r": { ka: "რ" },
  "s": { ka: "ს" },
  "t'": { ka: "ტ" },
  "u": { ka: "უ" },
  "p": { ka: "ფ" },
  "k": { ka: "ქ" },
  "gh": { ka: "ღ" },
  "q'": { ka: "ყ" },
  "sh": { ka: "შ" },
  "ch": { ka: "ჩ" },
  "ts": { ka: "ც" },
  "dz": { ka: "ძ" },
  "ts'": { ka: "წ" },
  "ch'": { ka: "ჭ" },
  "kh": { ka: "ხ" },
  "j": { ka: "ჯ" },
  "h": { ka: "ჰ" },
  "c": { ka: "წ"},
  "x": { ka: "ხ"},
  "q": { ka: "ყ" }
}

const cnTable = [
  "ch'", "ts'", "kh",
  "dz", "ts",  "ch",
  "sh", "q'",  "gh",
  "t'", "zh",  "p'",
  "k'"
]

const ka2ka = (str) => {
  let res = ''

  str = String(str).toLowerCase()

  for (let i = 0; i < str.length;) {
    const c3 = str.slice(i, i + 3)
    const c2 = str.slice(i, i + 2)
    const cN = cnTable.find(el => el === c2 || el === c3)
    
    if (cN) {
      res = res.concat(letters[cN].ka)
      cN.length === 3 ? i += 3 : i += 2
    } else {
      res = res.concat(letters[str[i]]?.ka || str[i])
      i++
    }
  }
  
  return res
}

export default ka2ka
