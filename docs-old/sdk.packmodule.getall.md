<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [PackModule](./sdk.packmodule.md) &gt; [getAll](./sdk.packmodule.getall.md)

## PackModule.getAll() method

Get Pack Data

<b>Signature:</b>

```typescript
getAll(): Promise<PackMetadata[]>;
```

<b>Returns:</b>

Promise&lt;[PackMetadata](./sdk.packmetadata.md)<!-- -->\[\]&gt;

The NFT metadata for all NFTs in the module.

## Remarks

Get data associated with every pack in this module.

## Example

```javascript
const packs = await module.getAll();
console.log(packs);
```
