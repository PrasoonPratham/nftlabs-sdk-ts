<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [NFTModule](./sdk.nftmodule.md) &gt; [ownerOf](./sdk.nftmodule.ownerof.md)

## NFTModule.ownerOf() method

Checks the owner of a particular NFT

<b>Signature:</b>

```typescript
ownerOf(tokenId: string): Promise<string>;
```

## Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| tokenId   | string | ID of the NFT to get the owner of |

<b>Returns:</b>

Promise&lt;string&gt;

the owner of the token, or a zero address if the token has been burned
