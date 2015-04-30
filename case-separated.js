export default class CaseSeparated {
  constructor (separator) {
    Object.defineProperty(this, 'separator', {
      value: separator,
      enumerable: true,
      configurable: false
    })
  }

  parse (val) {
    if (typeof (val) === 'undefined' || val === null) {
      return []
    }

    return String(val).split(this.separator)
  }

  stringify (val) {
    if (typeof (val) === 'undefined' || val === null) {
      return ''
    }

    if (Array.isArray(val)) {
      return val.map(this.stringify).join(this.separator)
    }

    return String(val)
  }

  is (val) {
    return typeof (val) !== 'undefined' && val !== null && String(val).indexOf(this.separator) !== -1
  }
}
