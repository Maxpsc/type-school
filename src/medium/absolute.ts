export type Absolute<T extends number | string | bigint> = T extends number | bigint
	? Absolute<`${T}`>
	: T extends `${infer Minus}${infer N}`
		? Minus extends '-'
			? N extends number | bigint 
				? `${N}`
				: never
			: T
		: never

type Test = 'asd';
type Result = Absolute<Test>; // expected to be "100"
