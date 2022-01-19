---
id: "SignaturePayload"
title: "Interface: SignaturePayload"
sidebar_label: "SignaturePayload"
sidebar_position: 0
custom_edit_url: null
---

Represents a prepared `SignaturePayload` object, which will be signed
by a wallet.

## Hierarchy

- [`NewSignaturePayload`](NewSignaturePayload)

  ↳ **`SignaturePayload`**

## Properties

### currencyAddress

• **currencyAddress**: `string`

The address of the currency used in the event that there is a price set
on the token. If this is set to the 0x0 address, then its free to mint.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[currencyAddress](NewSignaturePayload#currencyaddress)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:27](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L27)

___

### id

• `Optional` **id**: `string`

A unique identifier for the signature.

If this value is an empty string, then a uuid-v4 will be generated.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[id](NewSignaturePayload#id)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L45)

___

### metadata

• **metadata**: [`MetadataURIOrObject`](../modules#metadatauriorobject)

The metadata of the token to generate a signature for.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[metadata](NewSignaturePayload#metadata)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:11](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L11)

___

### mintEndTimeEpochSeconds

• **mintEndTimeEpochSeconds**: `BigNumberish`

The epoch end time (in seconds) that essentially invalidates the signature
such that it can no longer be claimed.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[mintEndTimeEpochSeconds](NewSignaturePayload#mintendtimeepochseconds)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L38)

___

### mintStartTimeEpochSeconds

• **mintStartTimeEpochSeconds**: `BigNumberish`

The epoch start time (in seconds) when the signature can be claimed.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[mintStartTimeEpochSeconds](NewSignaturePayload#mintstarttimeepochseconds)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:32](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L32)

___

### price

• **price**: `BigNumberish`

The price per the NFT being minted for this particular signature.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[price](NewSignaturePayload#price)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:21](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L21)

___

### to

• **to**: `string`

The receiver of the NFTs being minted when the signature is claimed.

#### Inherited from

[NewSignaturePayload](NewSignaturePayload).[to](NewSignaturePayload#to)

#### Defined in

[src/types/signature-minting/NewSignaturePayload.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/NewSignaturePayload.ts#L16)

___

### uri

• **uri**: `string`

The URI of the token metadata corresponding to this signature

#### Defined in

[src/types/signature-minting/SignaturePayload.ts:11](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/signature-minting/SignaturePayload.ts#L11)
