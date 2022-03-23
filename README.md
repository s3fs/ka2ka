## ka2ka

### A tool for deromanizing Georgian (ka)

## usage

It accepts a string or a number and converts that into Georgian script according to [this article](https://en.wikipedia.org/wiki/Romanization_of_Georgian#Transliteration_table).

If a no association is found for a letter, the letter is not converted.

```
import ka2ka from 'ka2ka'

ka2ka('Gamarjoba') //'გამარჯობა'

```