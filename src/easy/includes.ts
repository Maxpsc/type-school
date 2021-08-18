export type Includes<T extends any[], P> = P extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>; // expected to be `true`

type res = Includes<number[], string> // false