export type Diff<T, P extends T> = Pick<T & P, Exclude<keyof P, keyof T>>

type demo = Diff<{a: 1, b:3}, {a: 1, b:3, c:2}> // { c: 2}