<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [DropModule](./sdk.dropmodule.md) &gt; [getOwned](./sdk.dropmodule.getowned.md)

## DropModule.getOwned() method

Get Owned NFTs

<b>Signature:</b>

```typescript
getOwned(_address?: string): Promise<NFTMetadataOwner[]>;
```

## Parameters

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| \_address | string |             |

<b>Returns:</b>

Promise&lt;[NFTMetadataOwner](./sdk.nftmetadataowner.md)<!-- -->\[\]&gt;

The NFT metadata for all NFTs in the module.

## Remarks

Get all the data associated with the NFTs owned by a specific wallet.

## Example

```javascript
// Address of the wallet to get the NFTs of
const address = "{{wallet_address}}";
const nfts = await module.getOwned(address);
console.log(nfts);
```
