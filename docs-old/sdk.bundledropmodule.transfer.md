<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [BundleDropModule](./sdk.bundledropmodule.md) &gt; [transfer](./sdk.bundledropmodule.transfer.md)

## BundleDropModule.transfer() method

Transfer NFT

<b>Signature:</b>

```typescript
transfer(to: string, tokenId: BigNumberish, amount: BigNumberish, data?: BytesLike): Promise<TransactionReceipt>;
```

## Parameters

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| to        | string       |             |
| tokenId   | BigNumberish |             |
| amount    | BigNumberish |             |
| data      | BytesLike    |             |

<b>Returns:</b>

Promise&lt;TransactionReceipt&gt;

## Remarks

Transfer an NFT from the connected wallet to another wallet.

## Example

```javascript
// Address of the wallet you want to send the NFT to
const toAddress = "0x...";

// The token ID of the NFT you want to send
const tokenId = "0";

// The number of NFTs you want to send
const amount = 1;

await module.transfer(toAddress, tokenId, amount);
```
