/// <reference types="vite/client" />
// 类型提示显示展开后的信息
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// 类型提示显示展开深层后的信息
type ExpandRecursively<T> = T extends object ? (T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never) : T;
