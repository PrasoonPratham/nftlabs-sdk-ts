---
id: "CommonModuleMetadata"
title: "Class: CommonModuleMetadata"
sidebar_label: "CommonModuleMetadata"
sidebar_position: 0
custom_edit_url: null
---

CommonModuleMetadata defines the common properties of a module deployment.

## Hierarchy

- **`CommonModuleMetadata`**

  ↳ [`BundleDropModuleMetadata`](BundleDropModuleMetadata)

  ↳ [`BundleModuleMetadata`](BundleModuleMetadata)

  ↳ [`CurrencyModuleMetadata`](CurrencyModuleMetadata)

  ↳ [`DatastoreModuleMetadata`](DatastoreModuleMetadata)

  ↳ [`DropModuleMetadata`](DropModuleMetadata)

  ↳ [`MarketModuleMetadata`](MarketModuleMetadata)

  ↳ [`MarketplaceModuleMetadata`](MarketplaceModuleMetadata)

  ↳ [`NftModuleMetadata`](NftModuleMetadata)

  ↳ [`PackModuleMetadata`](PackModuleMetadata)

  ↳ [`SplitsModuleMetadata`](SplitsModuleMetadata)

  ↳ [`TokenModuleMetadata`](TokenModuleMetadata)

  ↳ [`VoteModuleMetadata`](VoteModuleMetadata)

## Constructors

### constructor

• **new CommonModuleMetadata**()

## Properties

### description

• `Optional` **description**: `string` = `undefined`

The description of the module.

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L23)

___

### externalLink

• `Optional` **externalLink**: `string` = `undefined`

An external link for the module.

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L39)

___

### image

• `Optional` **image**: `string` \| `FileOrBuffer` = `undefined`

An image for the module.

If the image is a File or Buffer, it will be uploaded to IPFS.
If the image is a string, it will be used as-is (in case you already uploaded it to IPFS
and the property is the IPFS hash uri).

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L33)

___

### name

• **name**: `string` = `""`

The name of the module.

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/CommonModuleMetadata.ts#L17)
