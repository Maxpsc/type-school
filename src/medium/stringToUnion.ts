export type StringToUnion<T extends string> = T extends ''
	? never
	: T extends `${infer First}${infer Rest}`
		? First | StringToUnion<Rest>
		: never

type Test = '123abb';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3" | "a" | "b"
