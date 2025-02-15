<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [SplitsModule](./sdk.splitsmodule.md)

## SplitsModule class

Create custom royalty splits to distribute funds.

<b>Signature:</b>

```typescript
export declare class SplitsModule extends Module<Royalty> implements ISplitsModule
```

<b>Extends:</b> [Module](./sdk.module.md)<!-- -->&lt;Royalty&gt;

<b>Implements:</b> [ISplitsModule](./sdk.isplitsmodule.md)

## Example

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getSplitsModule("{{module_address}}");
```

## Properties

| Property                                       | Modifiers           | Type                              | Description |
| ---------------------------------------------- | ------------------- | --------------------------------- | ----------- |
| [moduleType](./sdk.splitsmodule.moduletype.md) | <code>static</code> | [ModuleType](./sdk.moduletype.md) |             |

## Methods

| Method                                                                                         | Modifiers | Description                                                             |
| ---------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------- |
| [balanceOf(address)](./sdk.splitsmodule.balanceof.md)                                          |           | Get Funds                                                               |
| [balanceOfAllRecipients()](./sdk.splitsmodule.balanceofallrecipients.md)                       |           | Returns all the recipients and their balances in the native currency.   |
| [balanceOfToken(walletAddress, tokenAddress)](./sdk.splitsmodule.balanceoftoken.md)            |           | Get Token Funds                                                         |
| [balanceOfTokenAllRecipients(tokenAddress)](./sdk.splitsmodule.balanceoftokenallrecipients.md) |           | Returns all the recipients and their balances in a non-native currency. |
| [distribute()](./sdk.splitsmodule.distribute.md)                                               |           | Distribute Funds                                                        |
| [distributeToken(tokenAddress)](./sdk.splitsmodule.distributetoken.md)                         |           | Distribute Funds                                                        |
| [get()](./sdk.splitsmodule.get.md)                                                             |           |                                                                         |
| [getAllRecipients()](./sdk.splitsmodule.getallrecipients.md)                                   |           | Get Recipients                                                          |
| [getRecipientSplitPercentage(address)](./sdk.splitsmodule.getrecipientsplitpercentage.md)      |           |                                                                         |
| [withdraw(address)](./sdk.splitsmodule.withdraw.md)                                            |           |                                                                         |
| [withdrawToken(walletAddress, tokenAddress)](./sdk.splitsmodule.withdrawtoken.md)              |           |                                                                         |
