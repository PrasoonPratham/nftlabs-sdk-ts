---
id: "IDropModule"
title: "Interface: IDropModule"
sidebar_label: "IDropModule"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### mintBatch

▸ **mintBatch**(`tokenMetadata`): `Promise`<`void`\>

Allows you to mint a batch of tokens by passing in a list of metadata objects.
The metadata objects will all be uploaded to a distributed file system in a folder format
based on the storage provider set in the SDK.

Its important to note that the metadata objects are allowed to contain nested File|Blob|Buffer
objects as well as any other data types, so properties like the `image` can be unique for
each token that will be minted.

#### Parameters

| Name            | Type                                                      | Description                              |
| :-------------- | :-------------------------------------------------------- | :--------------------------------------- |
| `tokenMetadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | All token metadata objects to be minted. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/IDropModule.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/IDropModule.ts#L16)
