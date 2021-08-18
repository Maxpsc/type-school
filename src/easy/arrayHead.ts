import { UnionToIntersection } from '../unionToIntersection'

export type First<T extends any[]> = T extends [infer R, ...any] ? R : never
export type ArrayItem<T extends any[]> = T[number]
export type ArrayItemIntersection<T extends any[]> = UnionToIntersection<T[number]>

type Empty = [];
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, '2', false];
type arr3 = ({ a: number} | {b: string})[]

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<Empty>; // expected to be never

type Item = ArrayItem<arr1> // 'a' | 'b' | 'c'

type Item2 = ArrayItemIntersection<arr2>; // never
type Item3 = ArrayItemIntersection<arr3>; // you guess?