<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [DropModule](./sdk.dropmodule.md) &gt; [getAll](./sdk.dropmodule.getall.md)

## DropModule.getAll() method

Get All NFTs

<b>Signature:</b>

```typescript
getAll(queryParams?: QueryAllParams): Promise<NFTMetadataOwner[]>;
```

## Parameters

| Parameter   | Type           | Description |
| ----------- | -------------- | ----------- |
| queryParams | QueryAllParams |             |

<b>Returns:</b>

Promise&lt;[NFTMetadataOwner](./sdk.nftmetadataowner.md)<!-- -->\[\]&gt;

The NFT metadata for all NFTs in the module.

## Remarks

Get all the data associated with every NFT in this module.

## Example

```javascript
const nfts = await module.getAll();
console.log(nfts);
```
