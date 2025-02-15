<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [TokenModule](./sdk.tokenmodule.md) &gt; [burn](./sdk.tokenmodule.burn.md)

## TokenModule.burn() method

Burn Tokens

<b>Signature:</b>

```typescript
burn(amount: BigNumberish): Promise<TransactionReceipt>;
```

## Parameters

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| amount    | BigNumberish |             |

<b>Returns:</b>

Promise&lt;TransactionReceipt&gt;

## Remarks

Burn tokens held by the connected wallet

## Example

```javascript
// The amount of this token you want to burn
const amount = 100;

await module.burn(amount);
```
