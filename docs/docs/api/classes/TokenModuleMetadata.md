---
id: "TokenModuleMetadata"
title: "Class: TokenModuleMetadata"
sidebar_label: "TokenModuleMetadata"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CommonModuleMetadata`](CommonModuleMetadata)

  ↳ **`TokenModuleMetadata`**

## Constructors

### constructor

• **new TokenModuleMetadata**()

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[constructor](CommonModuleMetadata#constructor)

## Properties

### description

• `Optional` **description**: `string` = `undefined`

The description of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[description](CommonModuleMetadata#description)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/types/module-deployments/CommonModuleMetadata.ts#L23)

___

### externalLink

• `Optional` **externalLink**: `string` = `undefined`

An external link for the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[externalLink](CommonModuleMetadata#externallink)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/types/module-deployments/CommonModuleMetadata.ts#L39)

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

[src/types/module-deployments/CommonModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/types/module-deployments/CommonModuleMetadata.ts#L33)

___

### name

• **name**: `string` = `""`

The name of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[name](CommonModuleMetadata#name)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/types/module-deployments/CommonModuleMetadata.ts#L17)

___

### symbol

• **symbol**: `string` = `""`

The symbol for the Currency (required)

#### Defined in

[src/types/module-deployments/TokenModuleMetadata.ts:10](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/types/module-deployments/TokenModuleMetadata.ts#L10)
