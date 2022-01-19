---
id: "ClaimConditionFactory"
title: "Class: ClaimConditionFactory"
sidebar_label: "ClaimConditionFactory"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ClaimConditionFactory**(`createSnapshotFunc`)

#### Parameters

| Name                 | Type                                                                              |
| :------------------- | :-------------------------------------------------------------------------------- |
| `createSnapshotFunc` | (`leafs`: `string`[]) => `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\> |

#### Defined in

[src/factories/ClaimConditionFactory.ts:12](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L12)

## Properties

### createSnapshot

• `Private` **createSnapshot**: (`leafs`: `string`[]) => `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

#### Type declaration

▸ (`leafs`): `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

##### Parameters

| Name    | Type       |
| :------ | :--------- |
| `leafs` | `string`[] |

##### Returns

`Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

#### Defined in

[src/factories/ClaimConditionFactory.ts:9](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L9)

---

### phases

• `Private` **phases**: [`ClaimConditionPhase`](ClaimConditionPhase)[] = `[]`

#### Defined in

[src/factories/ClaimConditionFactory.ts:8](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L8)

## Methods

### allSnapshots

▸ **allSnapshots**(): [`SnapshotInfo`](../interfaces/SnapshotInfo)[]

Helper method fetches all snapshots from a factory.

#### Returns

[`SnapshotInfo`](../interfaces/SnapshotInfo)[]

- All snapshots in the condition factory.

#### Defined in

[src/factories/ClaimConditionFactory.ts:170](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L170)

---

### buildConditions

▸ **buildConditions**(): `Promise`<[`PublicClaimCondition`](../interfaces/PublicClaimCondition)[]\>

Used internally when creating a drop module/updating
the claim conditions of a drop module.

**`internal`**

#### Returns

`Promise`<[`PublicClaimCondition`](../interfaces/PublicClaimCondition)[]\>

- The claim conditions that will be used when validating a users claim transaction.

#### Defined in

[src/factories/ClaimConditionFactory.ts:24](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L24)

---

### buildConditionsForDropV1

▸ **buildConditionsForDropV1**(): `Promise`<[`PublicClaimCondition`](../interfaces/PublicClaimCondition)[]\>

Used internally when creating a drop module/updating
the claim conditions of a drop module.

**`internal`**

#### Returns

`Promise`<[`PublicClaimCondition`](../interfaces/PublicClaimCondition)[]\>

- The claim conditions that will be used when validating a users claim transaction.

#### Defined in

[src/factories/ClaimConditionFactory.ts:52](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L52)

---

### deleteClaimPhase

▸ **deleteClaimPhase**(`index`): `Promise`<`void`\>

Removes a claim condition phase from the factory.

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/factories/ClaimConditionFactory.ts:148](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L148)

---

### fromPublicClaimConditions

▸ **fromPublicClaimConditions**(`conditions`): [`ClaimConditionFactory`](ClaimConditionFactory)

Converts a set of generic `PublicClaimCondition`s into a `ClaimConditionFactory`

#### Parameters

| Name         | Type                                                           | Description                                                            |
| :----------- | :------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `conditions` | [`PublicClaimCondition`](../interfaces/PublicClaimCondition)[] | The conditions to load, should be returned directly from the contract. |

#### Returns

[`ClaimConditionFactory`](ClaimConditionFactory)

- The loaded claim condition factory.

#### Defined in

[src/factories/ClaimConditionFactory.ts:89](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L89)

---

### newClaimPhase

▸ **newClaimPhase**(`__namedParameters`): [`ClaimConditionPhase`](ClaimConditionPhase)

Creates a new claim 'phase' with its own set of claim conditions

#### Parameters

| Name                                           | Type               |
| :--------------------------------------------- | :----------------- |
| `__namedParameters`                            | `Object`           |
| `__namedParameters.maxQuantity?`               | `BigNumberish`     |
| `__namedParameters.maxQuantityPerTransaction?` | `BigNumberish`     |
| `__namedParameters.startTime`                  | `number` \| `Date` |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

- The claim condition builder.

#### Defined in

[src/factories/ClaimConditionFactory.ts:122](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L122)

---

### removeClaimPhase

▸ **removeClaimPhase**(`_index`): `void`

**`deprecated`** - Use [ClaimConditionFactory.deleteClaimPhase](ClaimConditionFactory#deleteclaimphase) instead.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `_index` | `number` |

#### Returns

`void`

#### Defined in

[src/factories/ClaimConditionFactory.ts:161](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/factories/ClaimConditionFactory.ts#L161)
