export type Pop<T extends any[]> = T extends [...infer Prev, any] ? Prev : []
export type Push<T extends any[], C> = [...T, C]
export type Shift<T extends any[]> = T extends [any, ...infer Sub] ? Sub : []
export type Unshfit<T extends any[], C> = [C, ...T]

type arr1 = [1,2,3]

type afterPop = Pop<arr1> // [1,2]
type afterPush = Push<arr1, 4> // [1,2,3,4]
type afterShift = Shift<arr1> // [2,3]
type afterUnshfit = Unshfit<arr1, 0> // [0,1,2,3]