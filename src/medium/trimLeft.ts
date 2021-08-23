type WhiteSpace = ' ' | '\n' | '\t' | '\r'

export type TrimLeft<T extends string> = T extends `${WhiteSpace}${infer R}` ? TrimLeft<R> : T;

type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
