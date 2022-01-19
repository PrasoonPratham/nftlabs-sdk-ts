---
id: "ListingNotFoundError"
title: "Class: ListingNotFoundError"
sidebar_label: "ListingNotFoundError"
sidebar_position: 0
custom_edit_url: null
---

Thrown when trying to retrieve a listing from a marketplace that doesn't exist

## Hierarchy

- `Error`

  ↳ **`ListingNotFoundError`**

## Constructors

### constructor

• **new ListingNotFoundError**(`marketplaceContractAddress`, `listingId?`)

#### Parameters

| Name                         | Type     |
| :--------------------------- | :------- |
| `marketplaceContractAddress` | `string` |
| `listingId?`                 | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/common/error.ts:131](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/common/error.ts#L131)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1022

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
