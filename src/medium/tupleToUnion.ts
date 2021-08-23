export type TupleToUnion<T> = T extends Array<infer R> ? R : never
// export type TupleToUnion<T extends any[]> = T[number]

type Arr = ['1', '2', '3'];

// type ArrItem = TupleToUnion<Arr>;

const a: TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
