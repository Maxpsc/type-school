export type MyExclude<T, U extends keyof T> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};

type Demo = {
  a: 1;
  b: string;
  c: false;
};

type type1 = MyExclude<Demo, 'a'>; // {b: string, c: false}
