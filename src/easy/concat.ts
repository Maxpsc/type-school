// export type Concat<A1 extends any[], A2 extends any[]> = (A1[number] | A2[number])[]
export type Concat<A1 extends any[], A2 extends any[]> = [...A1, ...A2]

type Result = Concat<[1], [2]>; // expected to be [1, 2]

type Result2 = Concat<number[], boolean[]>
