const valueOrCall = <T>(value: T | (() => T)): T =>
  value instanceof Function ? value() : value;

export default valueOrCall;
