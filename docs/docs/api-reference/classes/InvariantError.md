---
id: "InvariantError"
title: "Class: InvariantError"
sidebar_label: "InvariantError"
sidebar_position: 0
custom_edit_url: null
---

Error that may get thrown when an invariant assummption fails.

## Hierarchy

- `Error`

  ↳ **`InvariantError`**

## Constructors

### constructor

• **new InvariantError**(`message?`)

**`internal`**

#### Parameters

| Name      | Type     | Default value    |
| :-------- | :------- | :--------------- |
| `message` | `string` | `genericMessage` |

#### Overrides

Error.constructor

#### Defined in

[src/common/invariant.ts:26](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/common/invariant.ts#L26)

## Properties

### framesToPop

• **framesToPop**: `number` = `1`

**`internal`**

#### Defined in

[src/common/invariant.ts:18](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/common/invariant.ts#L18)

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

• **name**: `string` = `genericMessage`

**`internal`**

#### Overrides

Error.name

#### Defined in

[src/common/invariant.ts:22](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/common/invariant.ts#L22)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1024

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
