# 타입 가드

## `isUndefined`
```ts
const isUndefined = (value: unknown): value is undefined =>
  typeof value === "undefined";
```

## `isString`
```ts
const isString = (value: unknown): value is string => typeof value === "string";
```

## `isNumber`
```ts
const isNumber = (value: unknown): value is number => typeof value === "number";
```

## `isBoolean`
```ts
const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";
```