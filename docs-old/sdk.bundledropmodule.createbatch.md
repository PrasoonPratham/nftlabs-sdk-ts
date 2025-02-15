<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [BundleDropModule](./sdk.bundledropmodule.md) &gt; [createBatch](./sdk.bundledropmodule.createbatch.md)

## BundleDropModule.createBatch() method

Create Many NFTs

<b>Signature:</b>

```typescript
createBatch(metadatas: MetadataURIOrObject[]): Promise<string[]>;
```

## Parameters

| Parameter | Type                                                            | Description |
| --------- | --------------------------------------------------------------- | ----------- |
| metadatas | [MetadataURIOrObject](./sdk.metadatauriorobject.md)<!-- -->\[\] |             |

<b>Returns:</b>

Promise&lt;string\[\]&gt;

## Remarks

Create and mint NFTs.

## Example

```javascript
// Custom metadata of the NFTs to create
const metadatas = [
  {
    name: "Cool NFT",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png") // This can be an image url or file
  },
  {
    name: "Cool NFT",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png") // This can be an image url or file
  }
];

await module.createBatch(metadatas);
```
