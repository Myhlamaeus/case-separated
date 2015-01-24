function CaseSeparated(separator) {
    Object.defineProperty(this, "separator", {
        value: separator,
        enumerable: true,
        configurable: false
    });
}

CaseSeparated.prototype.parse = function(val) {
    if(typeof(val) === "undefined" || val === null) {
        return [];
    }

    return String(val).split(this.separator);
};

CaseSeparated.prototype.stringify = function(val) {
    if(typeof(val) === "undefined" || val === null) {
        return "";
    }

    if(Array.isArray(val)) {
        return val.map(this.stringify).join(this.separator);
    }

    return String(val);
};

module.exports = CaseSeparated;
