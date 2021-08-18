export type UnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void
  ? I
  : never;

type Demo = { a: string } | { b: 2 };

// type B =UnionToIntersection<RangePickerProps<object>>
type B = UnionToIntersection<Demo>;

const a: B = {
  a: '1',
  b: 2,
};
