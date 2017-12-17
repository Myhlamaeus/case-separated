export default class CaseSeparated {
  constructor(separator) {
    Object.defineProperty(this, 'separator', {
      value: separator,
      enumerable: true,
      writable: false,
      configurable: true
    });
  }

  parse(val) {
    if ([undefined, null].includes(val)) {
      return [];
    }

    return String(val).split(this.separator);
  }

  stringify(val) {
    if ([undefined, null].includes(val)) {
      return [];
    }

    if (Array.isArray(val)) {
      return val.map(this.stringify, this).join(this.separator);
    }

    return String(val);
  }

  is(val) {
    return ![undefined, null].includes(val) && String(val).includes(this.separator);
  }
}
