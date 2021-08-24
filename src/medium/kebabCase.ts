export type Uncapitalize<T extends string> = T extends `${infer Head}${infer Rest}`
	? `${Lowercase<Head>}${Rest}`
	: Lowercase<T>

type str = Uncapitalize<'FooBarBaz'>; // 'fooBarBaz'

/** 转烤羊肉串命名 */
type Kebab<T extends string> = T extends `${infer Head}${infer Rest}`
  ? Uppercase<Head> extends Head
    ? `-${Lowercase<Head>}${Kebab<Rest>}`
    : `${Head}${Kebab<Rest>}`
  : T;

type str2 = Kebab<'fooBarBaz'>; // 'foo-bar-baz'

// finally
export type KebabCase<T extends string> = Kebab<Uncapitalize<T>>;


type demo = KebabCase<'fooBarBaz'> // FooBarBaz -> foo-bar-baz