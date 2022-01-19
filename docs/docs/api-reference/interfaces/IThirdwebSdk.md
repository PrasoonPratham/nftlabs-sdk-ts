---
id: "IThirdwebSdk"
title: "Interface: IThirdwebSdk"
sidebar_label: "IThirdwebSdk"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`ThirdwebSDK`](../classes/ThirdwebSDK)

## Methods

### createSnapshot

▸ **createSnapshot**(`leafs`): `Promise`<{ `merkleRoot`: `string` ; `snapshot`: [`Snapshot`](../classes/Snapshot) ; `snapshotUri`: `string` }\>

Creates a snapshot from a list of leafs. The leafs could be addresses,
hashes, etc.

**`beta`** - This method is still in beta and the API is subject to change.

#### Parameters

| Name    | Type       | Description                                                  |
| :------ | :--------- | :----------------------------------------------------------- |
| `leafs` | `string`[] | The list of leafs to create a snapshot from (e.g. addresses) |

#### Returns

`Promise`<{ `merkleRoot`: `string` ; `snapshot`: [`Snapshot`](../classes/Snapshot) ; `snapshotUri`: `string` }\>

- An object containing the snapshot URI (which is uploaded to storage) and the merkle root (which can be used in a Claim Condition)

#### Defined in

[src/interfaces/IThirdwebSdk.ts:14](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IThirdwebSdk.ts#L14)
