---
id: "ISplitsModule"
title: "Interface: ISplitsModule"
sidebar_label: "ISplitsModule"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`SplitsModule`](../classes/SplitsModule)

## Methods

### balanceOf

▸ **balanceOf**(`address`): `Promise`<`BigNumber`\>

Returns the amount of royalty available for a recipient
to withdraw in the native currency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the recipient to check the balance of. |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/royalty.ts:34](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L34)

___

### balanceOfToken

▸ **balanceOfToken**(`walletAddress`, `tokenAddress`): `Promise`<[`CurrencyValue`](CurrencyValue)\>

Returns the amount of royalty available for a recipient
to withdraw in the native currency in a specific currency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | The address of the recipient to check the balance of. |
| `tokenAddress` | `string` | The address of the currency to check the balance in. |

#### Returns

`Promise`<[`CurrencyValue`](CurrencyValue)\>

#### Defined in

[src/modules/royalty.ts:43](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L43)

___

### distribute

▸ **distribute**(): `Promise`<`void`\>

Distributes all funds to the recipients.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/royalty.ts:72](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L72)

___

### distributeToken

▸ **distributeToken**(`tokenAddress`): `Promise`<`void`\>

Distributes all funds to the recipients in the specified currency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | The address of the currency to distribute the funds in. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/royalty.ts:79](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L79)

___

### getAllRecipients

▸ **getAllRecipients**(): `Promise`<[`SplitRecipient`](SplitRecipient)[]\>

Returns a list of all recipients with their
respective split percentages.

#### Returns

`Promise`<[`SplitRecipient`](SplitRecipient)[]\>

#### Defined in

[src/modules/royalty.ts:19](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L19)

___

### getRecipientSplitPercentage

▸ **getRecipientSplitPercentage**(`address`): `Promise`<[`SplitRecipient`](SplitRecipient)\>

Get the split percentage of a recipient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the recipient. |

#### Returns

`Promise`<[`SplitRecipient`](SplitRecipient)\>

#### Defined in

[src/modules/royalty.ts:26](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L26)

___

### withdraw

▸ **withdraw**(`address`): `Promise`<`void`\>

Transaction that will withdraw the split amount of royalty that
the `address` is owed and transfer it to the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address to withdraw royalties for. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/royalty.ts:54](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L54)

___

### withdrawToken

▸ **withdrawToken**(`walletAddress`, `tokenAddress`): `Promise`<`void`\>

Transaction that will withdraw the split amount of royalty that
the `address` is owed and transfer it to the wallet, in the
currency specified by `tokenAddress`.

For example: If the native currency of a chain is ETH but the user
wants to withdraw their split in $MATIC, they should pass
the address of the $MATIC token as the `tokenAddress` parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | The address to withdraw royalties for. |
| `tokenAddress` | `string` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/royalty.ts:67](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/royalty.ts#L67)
