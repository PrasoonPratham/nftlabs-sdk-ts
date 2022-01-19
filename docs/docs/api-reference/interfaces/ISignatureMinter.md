---
id: "ISignatureMinter"
title: "Interface: ISignatureMinter"
sidebar_label: "ISignatureMinter"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`NFTModule`](../classes/NFTModule)

## Methods

### generateSignature

▸ **generateSignature**(`mintRequest`): `Promise`<{ `payload`: [`SignaturePayload`](SignaturePayload) ; `signature`: `string`  }\>

Generates a signature. This should only be called
by wallets that have the `MINTER` role on the contract. Otherwise
their signature won't be valid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mintRequest` | [`NewSignaturePayload`](NewSignaturePayload) | The request to generate a signature for. |

#### Returns

`Promise`<{ `payload`: [`SignaturePayload`](SignaturePayload) ; `signature`: `string`  }\>

- The payload (with the uri pre-populated) and signature.

#### Defined in

[src/interfaces/modules/ISignatureMinter.ts:36](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/interfaces/modules/ISignatureMinter.ts#L36)

___

### generateSignatureBatch

▸ **generateSignatureBatch**(`payloads`): `Promise`<{ `payload`: [`SignaturePayload`](SignaturePayload) ; `signature`: `string`  }[]\>

Batch generation of signatures.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payloads` | [`NewSignaturePayload`](NewSignaturePayload)[] |

#### Returns

`Promise`<{ `payload`: [`SignaturePayload`](SignaturePayload) ; `signature`: `string`  }[]\>

- The batch of payloads + signatures.

#### Defined in

[src/interfaces/modules/ISignatureMinter.ts:46](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/interfaces/modules/ISignatureMinter.ts#L46)

___

### mintWithSignature

▸ **mintWithSignature**(`req`, `signature`): `Promise`<`BigNumber`\>

Mints an NFT given a payload and signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | [`SignaturePayload`](SignaturePayload) | The payload of the signature that will be minted. |
| `signature` | `string` | The signature of the payload. |

#### Returns

`Promise`<`BigNumber`\>

- The ID of the minted token.

#### Defined in

[src/interfaces/modules/ISignatureMinter.ts:15](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/interfaces/modules/ISignatureMinter.ts#L15)

___

### verify

▸ **verify**(`mintRequest`, `signature`): `Promise`<`boolean`\>

Verifies the signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mintRequest` | [`SignaturePayload`](SignaturePayload) | The signature of the pyaload to verify. |
| `signature` | `string` | - |

#### Returns

`Promise`<`boolean`\>

- True if the signature is valid, false otherwise.

#### Defined in

[src/interfaces/modules/ISignatureMinter.ts:26](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/interfaces/modules/ISignatureMinter.ts#L26)
