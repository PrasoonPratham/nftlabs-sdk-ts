<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [PackModule](./sdk.packmodule.md) &gt; [getOwned](./sdk.packmodule.getowned.md)

## PackModule.getOwned() method

`getOwned` is a convenience method for getting all owned tokens for a particular wallet.

<b>Signature:</b>

```typescript
getOwned(_address?: string): Promise<PackMetadataWithBalance[]>;
```

## Parameters

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| \_address | string | The address to check for token ownership |

<b>Returns:</b>

Promise&lt;[PackMetadataWithBalance](./sdk.packmetadatawithbalance.md)<!-- -->\[\]&gt;

An array of PackMetadataWithBalance objects that are owned by the address
