export function memoize(fn: () => unknown) {
  if (typeof fn !== "function") {
    throw new Error("Function to be memoized must be a function.");
  }
  const results = new Map();

  return (...args: any) => {
    const key = JSON.stringify(args);
    if (results.has(key)) {
      return results.get(key);
    }
    const result = fn.apply(null, args);
    results.set(key, result);
    return result;
  };
}
