export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export function isFunction(f) {
  return typeof f === 'function'
}

export function isEmpty(obj) {
  for (let i in obj) return false;
  return true;
}

export function isPromise(p) {
  return p !== null &&
    typeof p === 'object' &&
    typeof p.then === 'function' &&
    typeof p.catch === 'function';
}

export function isAsync(f) {
  return isFunction(f) && f.constructor.name === "AsyncFunction"
}

export function isArray(a){
  return typeof a !== 'undefined' && typeof a.constructor !== 'undefined' && a.constructor === Array
}

export function isString(s){
  return typeof s === 'string'
}
