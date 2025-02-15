<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [PackModule](./sdk.packmodule.md) &gt; [open](./sdk.packmodule.open.md)

## PackModule.open() method

Open Pack

<b>Signature:</b>

```typescript
open(packId: string): Promise<NFTMetadata[]>;
```

## Parameters

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| packId    | string |             |

<b>Returns:</b>

Promise&lt;[NFTMetadata](./sdk.nftmetadata.md)<!-- -->\[\]&gt;

## Remarks

Open a pack to burn it and obtain the reward asset inside.

## Example

```javascript
// The pack ID of the asset you want to buy
const packId = "0";
const rewards = await module.open(packId);
console.log(rewards);
```
