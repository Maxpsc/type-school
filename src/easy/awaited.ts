//if we have Promise<ExampleType> how to get ExampleType?

export type Awaited<T> = T extends Promise<infer R> ? R : never

type demo = 1

type res = Awaited<Promise<demo>> // 1