---
id: "NewSignaturePayload"
title: "Interface: NewSignaturePayload"
sidebar_label: "NewSignaturePayload"
sidebar_position: 0
custom_edit_url: null
---

Represents a new `SignatureMint` request.

## Hierarchy

- **`NewSignaturePayload`**

  ↳ [`SignaturePayload`](SignaturePayload)

## Properties

### currencyAddress

• **currencyAddress**: `string`

The address of the currency used in the event that there is a price set
on the token. If this is set to the 0x0 address, then its free to mint.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:27](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L27)

___

### id

• `Optional` **id**: `string`

A unique identifier for the signature.

If this value is an empty string, then a uuid-v4 will be generated.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L45)

___

### metadata

• **metadata**: [`MetadataURIOrObject`](../modules#metadatauriorobject)

The metadata of the token to generate a signature for.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:11](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L11)

___

### mintEndTimeEpochSeconds

• **mintEndTimeEpochSeconds**: `BigNumberish`

The epoch end time (in seconds) that essentially invalidates the signature
such that it can no longer be claimed.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L38)

___

### mintStartTimeEpochSeconds

• **mintStartTimeEpochSeconds**: `BigNumberish`

The epoch start time (in seconds) when the signature can be claimed.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:32](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L32)

___

### price

• **price**: `BigNumberish`

The price per the NFT being minted for this particular signature.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:21](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L21)

___

### to

• **to**: `string`

The receiver of the NFTs being minted when the signature is claimed.

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L16)
