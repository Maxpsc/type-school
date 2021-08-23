export type MyReadonly2<T, U extends keyof T> = {
  readonly [P in U]: T[P];
} & {
	[K in keyof T as K extends U ? never : K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
