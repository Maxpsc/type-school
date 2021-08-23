export type AppendToObject<T extends object, P extends string, V> = {
  [k in keyof T]: T[k];
} & {
	[k in P]: V;
};

type Test = { id: '1' };
type Result = AppendToObject<Test, 'value', 4>; // expected to be { id: '1', value: 4 }

const obj: Result = {
	id: '1',
	value: 4
}