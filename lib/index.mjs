import CaseSeparated from './CaseSeparated';
export { CaseSeparated };

export default function(separator, value) {
  const caseSeparated = new CaseSeparated(separator);
  if (arguments.length < 2) {
    return caseSeparated;
  }

  return caseSeparated.parse(value);
}
