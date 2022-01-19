---
id: "MarketModuleMetadata"
title: "Class: MarketModuleMetadata"
sidebar_label: "MarketModuleMetadata"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CommonModuleMetadata`](CommonModuleMetadata)

  ↳ **`MarketModuleMetadata`**

## Constructors

### constructor

• **new MarketModuleMetadata**()

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

---

### externalLink

• `Optional` **externalLink**: `string` = `undefined`

An external link for the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[externalLink](CommonModuleMetadata#externallink)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L39)

---

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

---

### marketFeeBasisPoints

• **marketFeeBasisPoints**: `number` = `0`

The fee collected on all sales out of this marketplace. This fee
only applies to items sold from the marketplace and does not
include any resale royalties that occur outside of this marketplace.
The default is 0 (no fees).

1 basis point = 0.01%

For example: if this value is 100, then the royalty is 1% of the total sales.

#### Defined in

[src/types/module-deployments/MarketModuleMetadata.ts:25](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/MarketModuleMetadata.ts#L25)

---

### name

• **name**: `string` = `""`

The name of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[name](CommonModuleMetadata#name)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L17)
