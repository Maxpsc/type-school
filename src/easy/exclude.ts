export type MyExclude<T, U> = T extends U ? never : T

// 你以为的 Exclude
// type c = 'a' | 10 extends 'a' | 'b' | 'c' ? never : 'a' | 10
// // 实际上的 Exclude
// type c =
//   | ('a' extends 'a' | 'b' | 'c' ? never : 'a')
//   | (10 extends 'a' | 'b' | 'c' ? never : 10)

type Demo = 1 | 2 | 3

type test = 1 | 2 | 3 extends 2 ? true : false

type type1 = MyExclude<Demo, 2> // 1 | 3