---
id: "PackModuleMetadata"
title: "Class: PackModuleMetadata"
sidebar_label: "PackModuleMetadata"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CommonModuleMetadata`](CommonModuleMetadata)

  ↳ **`PackModuleMetadata`**

## Constructors

### constructor

• **new PackModuleMetadata**()

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[constructor](CommonModuleMetadata#constructor)

## Properties

### description

• `Optional` **description**: `string` = `undefined`

The description of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[description](CommonModuleMetadata#description)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L23)

___

### externalLink

• `Optional` **externalLink**: `string` = `undefined`

An external link for the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[externalLink](CommonModuleMetadata#externallink)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L39)

___

### feeRecipient

• `Optional` **feeRecipient**: `string` = `undefined`

The address of the royalty recipient. All royalties will be sent
to this address.

#### Defined in

[src/types/module-deployments/PackModuleMetadata.ts:30](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/PackModuleMetadata.ts#L30)

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

[src/types/module-deployments/CommonModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L33)

___

### name

• **name**: `string` = `""`

The name of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[name](CommonModuleMetadata#name)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L17)

___

### sellerFeeBasisPoints

• **sellerFeeBasisPoints**: `number` = `0`

The amount of royalty collected on all royalties represented as basis points.
The default is 0 (no royalties).

1 basis point = 0.01%

For example: if this value is 100, then the royalty is 1% of the total sales.

#### Defined in

[src/types/module-deployments/PackModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/PackModuleMetadata.ts#L23)
