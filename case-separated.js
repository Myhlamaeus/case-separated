function CaseSeparated(separator) {
    Object.defineProperty(this, {
        separator: {
            value: separator,
            enumerable: true,
            configurable: false
        }
    });
}

CaseSeparated.prototype.parse = function(val, separator) {
    if(typeof(val) === "undefined" || val === null) {
        return [];
    }

    return String(val).split(separator);
};

CaseSeparated.prototype.stringify = function(val, separator) {
    if(typeof(val) === "undefined" || val === null) {
        return "";
    }

    if(Array.isArray(val)) {
        return val.map(this.stringify).join(separator);
    }

    return String(val);
};

module.exports = CaseSeparated;
