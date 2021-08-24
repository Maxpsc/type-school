// 标明哪些是false
// 备注：ts里所有类型都是{}的子类型，所以{}不能用于表示空object
type IsFalsy = 0 | '' | false | [] | Record<string | number, never>

// type demo = 1 extends {} ? 0 : 1

export type AnyOf<T extends any[]> = T extends [infer Head, ...infer Rest]
	? Head extends IsFalsy
		? AnyOf<Rest>
		: true
	: false

type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.
