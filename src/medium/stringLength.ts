export type StringLength<S extends string, T extends any[] = []> = S extends ''
  ? T['length']
  : S extends `${infer L}${infer R}`
  ? StringLength<R, [...T, L]>
  : T['length'];

type demo = '1'
type len = StringLength<demo> // 5
