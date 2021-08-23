export type MergeType<T, U> = {
	[K in keyof U]: U[K]
} & {
	[K in keyof Omit<T, keyof U>]: T[K]
}


type Dog = {
	say: 'wangwang',
	eat: 1
}

type Cat = {
	say: 'miaomiao',
	drink: 2
}

type Res = MergeType<Dog, Cat> // { say: 'miaomiao', eat: 1, drink: 2 }

const test: Res = { say: 'miaomiao', eat: 1, drink: 2 };