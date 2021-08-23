export type Chainable<T extends Record<string, any>> = {
  option<K extends keyof T>(k: K, v: T[K]): Chainable<Pick<T, Exclude<keyof T, K>>>;
  get(): T;
};

declare const config: Chainable<Result>;

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

