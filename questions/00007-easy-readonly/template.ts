// type MyReadonly<T> = any

type MyReadonly<T> = {
  readonly [U in keyof T]: T[U]
}
