import { Capitalize } from './capitalize'

// type DealRest<T extends string> = T extends `-${infer First}-${infer Rest}`
// 	? `${Capitalize<First>}${DealRest<`-${Rest}`>}`
// 	: T extends `-${infer Last}`
// 		? Capitalize<Last>
// 		: T
 
// export type CamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
// 	? `${First}${DealRest<`-${Rest}`>}`
// 	: T

// type dealRestDemo = DealRest<'-asd-qqq-asd-aaa'>

/** 转驼峰 */
export type CamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
	? `${First}${CamelCase<Capitalize<Rest>>}`
	: T


type demo = CamelCase<'for-bar-baz-asd'> // for-bar-baz -> forBarBaz
type demo2 = CamelCase<'-bar-baz-asd'>
