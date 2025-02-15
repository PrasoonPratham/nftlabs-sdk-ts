<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [IMarketplace](./sdk.imarketplace.md) &gt; [getTimeBufferInSeconds](./sdk.imarketplace.gettimebufferinseconds.md)

## IMarketplace.getTimeBufferInSeconds() method

Fetch the current time buffer on the marketplace contract.

This is measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer toprevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.

This value is formatter as basis points (e.g. 5% = 500).

<b>Signature:</b>

```typescript
getTimeBufferInSeconds(): Promise<BigNumber>;
```

<b>Returns:</b>

Promise&lt;BigNumber&gt;

- The time buffer in seconds.
