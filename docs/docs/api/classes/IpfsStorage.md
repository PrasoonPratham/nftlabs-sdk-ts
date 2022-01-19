---
id: "IpfsStorage"
title: "Class: IpfsStorage"
sidebar_label: "IpfsStorage"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`IStorage`](../interfaces/IStorage)

## Constructors

### constructor

• **new IpfsStorage**(`gatewayUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayUrl` | `string` |

#### Defined in

[src/storage/IpfsStorage.ts:34](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L34)

## Properties

### gatewayUrl

• `Private` **gatewayUrl**: `string`

#### Defined in

[src/storage/IpfsStorage.ts:32](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L32)

## Methods

### batchUploadProperties

▸ **batchUploadProperties**(`metadatas`): `Promise`<`any`\>

Pre-processes metadata and uploads all file properties
to storage in *bulk*, then performs a string replacement of
all file properties -> the resulting ipfs uri. This is
called internally by `uploadMetadataBatch`.

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<`any`\>

- The processed metadata with properties pointing at ipfs in place of `File | Buffer`

#### Defined in

[src/storage/IpfsStorage.ts:239](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L239)

___

### buildFilePropertiesMap

▸ **buildFilePropertiesMap**(`object`, `files`): (`File` \| `Buffer`)[]

This function recurisely traverses an object and hashes any
`Buffer` or `File` objects into the returned map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | The object to recurse over |
| `files` | (`File` \| `Buffer`)[] | The running array of files or buffer to upload |

#### Returns

(`File` \| `Buffer`)[]

- The final map of all hashes to files

#### Defined in

[src/storage/IpfsStorage.ts:209](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L209)

___

### get

▸ **get**(`hash`): `Promise`<`string`\>

Fetches data from storage. This method does not handle any deserialization.
Its up to the caller to determine what the type of the data is.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<`string`\>

- The data, if found.

#### Implementation of

[IStorage](../interfaces/IStorage).[get](../interfaces/IStorage#get)

#### Defined in

[src/storage/IpfsStorage.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L188)

___

### getUploadToken

▸ **getUploadToken**(`contractAddress`): `Promise`<`string`\>

Fetches a one-time-use upload token that can used to upload
a file to storage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |

#### Returns

`Promise`<`string`\>

- The one time use token that can be passed to the Pinata API.

#### Implementation of

[IStorage](../interfaces/IStorage).[getUploadToken](../interfaces/IStorage#getuploadtoken)

#### Defined in

[src/storage/IpfsStorage.ts:173](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L173)

___

### replaceFilePropertiesWithHashes

▸ `Private` **replaceFilePropertiesWithHashes**(`object`, `cids`): `Promise`<`Record`<`string`, `any`\>\>

Given a map of file hashes to ipfs uris, this function will hash
all properties recursively and replace them with the ipfs uris
from the map passed in. If a hash is missing from the map, the function
will throw an error.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | The object to recursively process |
| `cids` | `string`[] | The array of file hashes to ipfs uris in the recurse order |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

- The processed metadata with properties pointing at ipfs in place of `File | Buffer`

#### Defined in

[src/storage/IpfsStorage.ts:280](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L280)

___

### resolveFullUrl

▸ **resolveFullUrl**(`ipfsHash`): `string`

Resolves the full url for a file using the configured gateway

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ipfsHash` | `string` | the ipfs:// uri |

#### Returns

`string`

- The fully formed IPFS url with the gateway url

#### Implementation of

[IStorage](../interfaces/IStorage).[resolveFullUrl](../interfaces/IStorage#resolvefullurl)

#### Defined in

[src/storage/IpfsStorage.ts:371](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L371)

___

### upload

▸ **upload**(`data`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

Uploads a file to the storage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `FileOrBuffer` |
| `contractAddress?` | `string` |
| `signerAddress?` | `string` |

#### Returns

`Promise`<`string`\>

- The hash of the uploaded data.

#### Implementation of

[IStorage](../interfaces/IStorage).[upload](../interfaces/IStorage#upload)

#### Defined in

[src/storage/IpfsStorage.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L38)

___

### uploadBatch

▸ **uploadBatch**(`files`, `contractAddress?`, `fileStartNumber?`): `Promise`<`string`\>

Uploads a folder to storage.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `files` | `string`[] \| `Buffer`[] \| `FileOrBuffer`[] \| `File`[] \| `BufferOrStringWithName`[] | `undefined` |
| `contractAddress?` | `string` | `undefined` |
| `fileStartNumber` | `number` | `0` |

#### Returns

`Promise`<`string`\>

- The CID of the uploaded folder.

#### Implementation of

[IStorage](../interfaces/IStorage).[uploadBatch](../interfaces/IStorage#uploadbatch)

#### Defined in

[src/storage/IpfsStorage.ts:80](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L80)

___

### uploadBatchWithCid

▸ `Private` **uploadBatchWithCid**(`files`, `contractAddress?`, `fileStartNumber?`): `Promise`<`CidWithFileName`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `files` | `string`[] \| `Buffer`[] \| `FileOrBuffer`[] \| `File`[] \| `BufferOrStringWithName`[] | `undefined` |
| `contractAddress?` | `string` | `undefined` |
| `fileStartNumber` | `number` | `0` |

#### Returns

`Promise`<`CidWithFileName`\>

#### Defined in

[src/storage/IpfsStorage.ts:99](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L99)

___

### uploadMetadata

▸ **uploadMetadata**(`metadata`, `contractAddress?`, `_signerAddress?`): `Promise`<`string`\>

Uploads metadata to IPFS

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |
| `contractAddress?` | `string` |
| `_signerAddress?` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IStorage](../interfaces/IStorage).[uploadMetadata](../interfaces/IStorage#uploadmetadata)

#### Defined in

[src/storage/IpfsStorage.ts:302](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L302)

___

### uploadMetadataBatch

▸ **uploadMetadataBatch**(`metadatas`, `contractAddress?`, `startFileNumber?`): `Promise`<[`UploadMetadataBatchResult`](../interfaces/UploadMetadataBatchResult)\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |
| `contractAddress?` | `string` |
| `startFileNumber?` | `number` |

#### Returns

`Promise`<[`UploadMetadataBatchResult`](../interfaces/UploadMetadataBatchResult)\>

#### Implementation of

[IStorage](../interfaces/IStorage).[uploadMetadataBatch](../interfaces/IStorage#uploadmetadatabatch)

#### Defined in

[src/storage/IpfsStorage.ts:323](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/storage/IpfsStorage.ts#L323)
