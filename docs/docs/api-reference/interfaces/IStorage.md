---
id: "IStorage"
title: "Interface: IStorage"
sidebar_label: "IStorage"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`IpfsStorage`](../classes/IpfsStorage)

## Methods

### get

▸ **get**(`hash`): `Promise`<`string`\>

Fetches data from storage. This method does not handle any deserialization.
Its up to the caller to determine what the type of the data is.

#### Parameters

| Name   | Type     | Description                   |
| :----- | :------- | :---------------------------- |
| `hash` | `string` | The Hash of the file to fetch |

#### Returns

`Promise`<`string`\>

- The data, if found.

#### Defined in

[src/interfaces/IStorage.ts:69](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L69)

---

### getUploadToken

▸ **getUploadToken**(`contractAddress`): `Promise`<`string`\>

Fetches a one-time-use upload token that can used to upload
a file to storage.

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `contractAddress` | `string` |

#### Returns

`Promise`<`string`\>

- The one time use token that can be passed to the Pinata API.

#### Defined in

[src/interfaces/IStorage.ts:60](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L60)

---

### resolveFullUrl

▸ **resolveFullUrl**(`hash`): `string`

Resolves the full URL of a file for a given gateway.

For example, if the hash of a file is `ipfs://bafkreib3u2u6ir2fsl5nkuwixfsb3l4xehri3psjv5yga4inuzsjunk2sy`, then the URL will be:
"https://cloudflare-ipfs.com/ipfs/bafkreibnwjhx5s3r2rggdoy3hw7lr7wmgy4bas35oky3ed6eijklk2oyvq"
if the gateway is `cloudflare-ipfs.com`.

#### Parameters

| Name   | Type     | Description         |
| :----- | :------- | :------------------ |
| `hash` | `string` | The hash of a file. |

#### Returns

`string`

#### Defined in

[src/interfaces/IStorage.ts:80](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L80)

---

### upload

▸ **upload**(`data`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

Uploads a file to the storage.

#### Parameters

| Name               | Type                       | Description                                                                        |
| :----------------- | :------------------------- | :--------------------------------------------------------------------------------- |
| `data`             | `string` \| `FileOrBuffer` | The data to be uploaded. Can be a file/buffer (which will be loaded), or a string. |
| `contractAddress?` | `string`                   | Optional. The contract address the data belongs to.                                |
| `signerAddress?`   | `string`                   | Optional. The address of the signer.                                               |

#### Returns

`Promise`<`string`\>

- The hash of the uploaded data.

#### Defined in

[src/interfaces/IStorage.ts:27](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L27)

---

### uploadBatch

▸ **uploadBatch**(`files`, `contractAddress?`, `uploadFileStartNumber?`): `Promise`<`string`\>

Uploads a folder to storage.

#### Parameters

| Name                     | Type                                                                                   | Description                                         |
| :----------------------- | :------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| `files`                  | `string`[] \| `Buffer`[] \| `FileOrBuffer`[] \| `File`[] \| `BufferOrStringWithName`[] | -                                                   |
| `contractAddress?`       | `string`                                                                               | Optional. The contract address the data belongs to. |
| `uploadFileStartNumber?` | `number`                                                                               | Optional. The first file file name begins with.     |

#### Returns

`Promise`<`string`\>

- The CID of the uploaded folder.

#### Defined in

[src/interfaces/IStorage.ts:43](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L43)

---

### uploadMetadata

▸ **uploadMetadata**(`metadata`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

Uploads metadata to IPFS

#### Parameters

| Name               | Type                                                    | Description                                         |
| :----------------- | :------------------------------------------------------ | :-------------------------------------------------- |
| `metadata`         | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The metadata to be uploaded.                        |
| `contractAddress?` | `string`                                                | Optional. The contract address the data belongs to. |
| `signerAddress?`   | `string`                                                | Optional. The address of the signer.                |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/interfaces/IStorage.ts:91](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L91)

---

### uploadMetadataBatch

▸ **uploadMetadataBatch**(`metadatas`, `contractAddress?`, `fileStartNumber?`): `Promise`<[`UploadMetadataBatchResult`](UploadMetadataBatchResult)\>

Uploads metadata to IPFS

#### Parameters

| Name               | Type                                                      | Description                                         |
| :----------------- | :-------------------------------------------------------- | :-------------------------------------------------- |
| `metadatas`        | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | -                                                   |
| `contractAddress?` | `string`                                                  | Optional. The contract address the data belongs to. |
| `fileStartNumber?` | `number`                                                  | -                                                   |

#### Returns

`Promise`<[`UploadMetadataBatchResult`](UploadMetadataBatchResult)\>

#### Defined in

[src/interfaces/IStorage.ts:105](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/interfaces/IStorage.ts#L105)
