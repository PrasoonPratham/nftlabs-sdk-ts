---
id: "DropModuleMetadata"
title: "Class: DropModuleMetadata"
sidebar_label: "DropModuleMetadata"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CommonModuleMetadata`](CommonModuleMetadata)

  ↳ **`DropModuleMetadata`**

## Constructors

### constructor

• **new DropModuleMetadata**()

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[constructor](CommonModuleMetadata#constructor)

## Properties

### baseTokenUri

• `Optional` **baseTokenUri**: `string` = `""`

The IPFS base URI thats prepended to all token URIs. This allows
you to batch upload all the metadata for the tokens ahead of time
so they can be lazy minted later

e.g. if a Drop Collection has a token URI of /ipfs/BOREDAPES/TOKEN1, then the IPFS base URI is /BOREDAPES/

**`deprecated`** - No longer applicable. This value is ignored.

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:99](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L99)

___

### description

• `Optional` **description**: `string` = `undefined`

The description of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[description](CommonModuleMetadata#description)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L23)

___

### externalLink

• `Optional` **externalLink**: `string` = `undefined`

An external link for the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[externalLink](CommonModuleMetadata#externallink)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L39)

___

### feeRecipient

• `Optional` **feeRecipient**: `string` = `undefined`

The address of the royalty recipient. All royalties will be sent
to this address.

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L50)

___

### image

• `Optional` **image**: `string` \| `FileOrBuffer` = `undefined`

An image for the module.

If the image is a File or Buffer, it will be uploaded to IPFS.
If the image is a string, it will be used as-is (in case you already uploaded it to IPFS
and the property is the IPFS hash uri).

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[image](CommonModuleMetadata#image)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L33)

___

### maxSupply

• **maxSupply**: `number` = `1`

The max supply

**`deprecated`** - No longer applicable. This value is ignored.

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:64](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L64)

___

### name

• **name**: `string` = `""`

The name of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[name](CommonModuleMetadata#name)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L17)

___

### primarySaleFeeBasisPoints

• `Optional` **primarySaleFeeBasisPoints**: `number` = `0`

The amount of fees collected on the primary sale, represented as basis points. The default is 0.

For example, if the primary sale is $100 and the primary fee is 1000 BPS, then the primary fee of $10
is distributed to the primary sale recipient.

The destination for this fee is either the project address, or a Splits contract address
if it was set using the `setModuleRoyaltyTreasury` method.

1 basis point = 0.01%

For example: if this value is 100, then the royalty is 1% of the total sales.

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:43](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L43)

___

### primarySaleRecipientAddress

• **primarySaleRecipientAddress**: `string` = `""`

The address of the receiver of the initial sale.You can use this field to
distribute the initial sale proceeds. All drop contracts are required to set this field,
even if the tokens are planned to be free. If you plan to do a free drop, you can set this
field to `AddressZero`

This does not effect royalties in any way.

For example, if a token is sold for $100, and there is a 0% fee,
then $100 will be distributed to the address set on this property.

If the token is sold for $100, and there is a 10% primary sale fee,
then $90 will be distributed to the address set on this property.

All secondary sales will use the `sellerFeeBasisPoints` and royalty recipient address.

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:83](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L83)

___

### sellerFeeBasisPoints

• `Optional` **sellerFeeBasisPoints**: `number` = `0`

The amount of royalty collected on all royalties represented as basis points.
The default is 0 (no royalties).

1 basis point = 0.01%

For example: if this value is 100, then the royalty is 1% of the total sales.

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L23)

___

### symbol

• `Optional` **symbol**: `string`

The symbol for the Drop Collection

#### Defined in

[src/types/module-deployments/DropModuleMetadata.ts:56](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/DropModuleMetadata.ts#L56)
