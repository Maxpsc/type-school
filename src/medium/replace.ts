export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S : S extends `${infer R}${From}${infer U}` ? `${R}${To}${U}` : S;

// 借助replace实现的replaceAll
// export type ReplaceAll<S extends string, From extends string, To extends string> = Replace<
//   S,
//   From,
//   To
// > extends `${infer R}${From}${infer U}`
//   ? ReplaceAll<Replace<S, From, To>, From, To>
//   : Replace<S, From, To>;

export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
	? S
	: S extends `${infer R}${From}${infer U}`
		? `${ReplaceAll<R, From, To>}${To}${ReplaceAll<U, From, To>}`
		: S

type replaced = Replace<'types are fun!', ' ', '111'>; // expected to be 'types are awesome!'

type replaced2 = ReplaceAll<'ha ha ha 123', 'ha ', '1'>;