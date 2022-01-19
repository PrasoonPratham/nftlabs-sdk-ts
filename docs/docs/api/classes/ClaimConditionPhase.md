---
id: "ClaimConditionPhase"
title: "Class: ClaimConditionPhase"
sidebar_label: "ClaimConditionPhase"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ClaimConditionPhase**(`createSnapshotFunc`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `createSnapshotFunc` | (`leafs`: `string`[]) => `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\> |

#### Defined in

[src/factories/ClaimConditionPhase.ts:34](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L34)

## Properties

### \_conditionStartTime

• `Private` **\_conditionStartTime**: `number`

#### Defined in

[src/factories/ClaimConditionPhase.ts:12](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L12)

___

### \_currencyAddress

• `Private` **\_currencyAddress**: `string` = `""`

#### Defined in

[src/factories/ClaimConditionPhase.ts:14](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L14)

___

### \_maxQuantity

• `Private` **\_maxQuantity**: `BigNumberish`

#### Defined in

[src/factories/ClaimConditionPhase.ts:18](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L18)

___

### \_merkleCondition

• `Private` `Optional` **\_merkleCondition**: [`SnapshotInfo`](../interfaces/SnapshotInfo) = `undefined`

#### Defined in

[src/factories/ClaimConditionPhase.ts:25](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L25)

___

### \_merkleRootHash

• `Private` **\_merkleRootHash**: `BytesLike`

#### Defined in

[src/factories/ClaimConditionPhase.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L23)

___

### \_price

• `Private` **\_price**: `BigNumberish` = `0`

#### Defined in

[src/factories/ClaimConditionPhase.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L16)

___

### \_quantityLimitPerTransaction

• `Private` **\_quantityLimitPerTransaction**: `BigNumberish` = `ethers.constants.MaxUint256`

#### Defined in

[src/factories/ClaimConditionPhase.ts:20](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L20)

___

### \_snapshot

• `Private` `Optional` **\_snapshot**: `string`[] = `undefined`

#### Defined in

[src/factories/ClaimConditionPhase.ts:27](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L27)

___

### \_waitInSeconds

• `Private` **\_waitInSeconds**: `BigNumberish` = `0`

#### Defined in

[src/factories/ClaimConditionPhase.ts:31](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L31)

___

### createSnapshot

• `Private` **createSnapshot**: (`leafs`: `string`[]) => `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

#### Type declaration

▸ (`leafs`): `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `leafs` | `string`[] |

##### Returns

`Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

#### Defined in

[src/factories/ClaimConditionPhase.ts:29](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L29)

## Methods

### buildPublicClaimCondition

▸ **buildPublicClaimCondition**(): `Promise`<[`PublicMintCondition`](../interfaces/PublicMintCondition)\>

Helper method that provides defaults for each claim condition.

**`internal`**

#### Returns

`Promise`<[`PublicMintCondition`](../interfaces/PublicMintCondition)\>

#### Defined in

[src/factories/ClaimConditionPhase.ts:127](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L127)

___

### getSnapshot

▸ **getSnapshot**(): `undefined` \| [`SnapshotInfo`](../interfaces/SnapshotInfo)

**`internal`**

#### Returns

`undefined` \| [`SnapshotInfo`](../interfaces/SnapshotInfo)

#### Defined in

[src/factories/ClaimConditionPhase.ts:119](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L119)

___

### setConditionStartTime

▸ **setConditionStartTime**(`when`): [`ClaimConditionPhase`](ClaimConditionPhase)

Set the start time for the claim condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `when` | `number` \| `Date` |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:63](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L63)

___

### setMaxQuantity

▸ **setMaxQuantity**(`maxQuantity`): [`ClaimConditionPhase`](ClaimConditionPhase)

Override the maxQuantity for the claim condition after creating the phase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxQuantity` | `BigNumberish` | The max quantity NFTs that can be claimed in this phase. |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:78](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L78)

___

### setMaxQuantityPerTransaction

▸ **setMaxQuantityPerTransaction**(`max`): [`ClaimConditionPhase`](ClaimConditionPhase)

The max quantity of NFTs that can be claimed in a single transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `BigNumberish` | The max quantity NFTs that can be claimed in a single transaction. |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:88](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L88)

___

### setMerkleRoot

▸ **setMerkleRoot**(`root`): [`ClaimConditionPhase`](ClaimConditionPhase)

Sets a merkle root hash for the claim condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `string` | The merkle root hash |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:100](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L100)

___

### setPrice

▸ **setPrice**(`price`, `tokenAddress?`): [`ClaimConditionPhase`](ClaimConditionPhase)

Set the price claim condition for the drop.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `price` | `BigNumberish` | `undefined` | The price of the currency in wei. Must be >= 0. |
| `tokenAddress` | `string` | `AddressZero` | The address of an ERC20 contract to use as the currency for the claim. By default this is the native currency address which is 0x0000000000000000000000000000000000000000 address. |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:44](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L44)

___

### setSnapshot

▸ **setSnapshot**(`addresses`): [`ClaimConditionPhase`](ClaimConditionPhase)

Sets a snapshot for the claim condition. You can use a snapshot
to verify a merkle tree condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `addresses` | `string`[] |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:111](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L111)

___

### setWaitTimeBetweenClaims

▸ **setWaitTimeBetweenClaims**(`waitInSeconds`): [`ClaimConditionPhase`](ClaimConditionPhase)

Wait time enforced after calling `claim` before the next `claim` can be called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `waitInSeconds` | `BigNumberish` | The wait time in seconds. |

#### Returns

[`ClaimConditionPhase`](ClaimConditionPhase)

#### Defined in

[src/factories/ClaimConditionPhase.ts:151](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/factories/ClaimConditionPhase.ts#L151)
