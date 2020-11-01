interface ConcatFn {
  (a: string, ...rest: string[]): string
}

const concat: ConcatFn = (first, ...rest) => {
  return first + rest.join('')
}

concat('Hello', ', ', 'world!')


interface MyHometaskInterface {
  howIDoIt: string,
  simeArray: Array<string | number>,
  withData: Array<{ howIDoIt: string, simeArray: Array<string | number> }>
}

const MyHometask: MyHometaskInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


interface MyArray<T> {
  [n: number]: T
  reduce<U>(fn: (acc: T, curr: T, i?: number, arr?: T[]) => U, initial?: U) : U
}

const arr: MyArray<number> = [1, 2, 767]

arr.reduce((accumulator, currentValue) => accumulator + currentValue, 5)
arr.reduce((accumulator, currentValue) => accumulator + currentValue + 'yo')