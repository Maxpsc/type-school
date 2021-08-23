export type AppendArgument<F extends Function, Arg extends any> = F extends (...args: infer P) => infer R
  ? (...args: [...P, Arg]) => R
  : never

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
