---
id: "ITransferable"
title: "Interface: ITransferable"
sidebar_label: "ITransferable"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`BundleDropModule`](../classes/BundleDropModule)
- [`BundleModule`](../classes/BundleModule)
- [`DropModule`](../classes/DropModule)
- [`NFTModule`](../classes/NFTModule)
- [`PackModule`](../classes/PackModule)
- [`TokenModule`](../classes/TokenModule)

## Methods

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Returns true if transfers are restricted. Otherwise returns false.

#### Returns

`Promise`<`boolean`\>

- True if transfers are restricted.

#### Defined in

[src/interfaces/contracts/ITransferable.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/contracts/ITransferable.ts#L16)

---

### setRestrictedTransfer

▸ **setRestrictedTransfer**(`restrict`): `Promise`<`TransactionReceipt`\>

Setter for transfer restriction.

#### Parameters

| Name       | Type      | Description                                                      |
| :--------- | :-------- | :--------------------------------------------------------------- |
| `restrict` | `boolean` | Boolean indicating whether to restrict transfer. (default: true) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/interfaces/contracts/ITransferable.ts:9](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/contracts/ITransferable.ts#L9)
