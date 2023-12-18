export function memoize<T extends string>() {
  return function (_: unknown, __: string, descriptor: PropertyDescriptor) {
    const oldFunction = descriptor.value
    const newFunction: MemoizeFnReturn<T> = memoizeFn(oldFunction)
    descriptor.value = (args: T) => newFunction(args)
  }
}

export type MemoizeFnParam<T> = (args: T) => T

export type MemoizeFnReturn<T> = (args: T) => Map<string, T> | string | undefined

export function memoizeFn<T extends string>(fn: MemoizeFnParam<T>): MemoizeFnReturn<T> {
  const cache: {[key: string]: T} = {  }
  return (args: T): Map<string, T> | string | undefined => {
    const key: T = args
    if (key in cache) {
      console.warn('from cache', '| cache: ', cache, '| key: ', key)
      return cache[key]
    } else {
      console.warn('NOT from cache', '| cache: ', cache, '| key: ', key)
      return cache[key] = fn(args)
    }
  }
}
