export type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends undefined ? T[K] : DeepReadonly<T[K]>;
  // readonly[K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
};

type X = {
  x: {
    a: number;
    b: 'hi';
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type readonlyX = DeepReadonly<X>; // should be same as `Expected`

const todo: readonlyX = {
	x: {
    a: 2,
    b: 'hi'
  },
  y: 'hey'
};

todo.x.a = 111
todo.y = '123'
