<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [IThirdwebSdk](./sdk.ithirdwebsdk.md) &gt; [createSnapshot](./sdk.ithirdwebsdk.createsnapshot.md)

## IThirdwebSdk.createSnapshot() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Creates a snapshot from a list of leafs. The leafs could be addresses, hashes, etc.

- This method is still in beta and the API is subject to change.

<b>Signature:</b>

```typescript
createSnapshot(leafs: string[]): Promise<{
        merkleRoot: string;
        snapshotUri: string;
        snapshot: Snapshot;
    }>;
```

## Parameters

| Parameter | Type       | Description                                                  |
| --------- | ---------- | ------------------------------------------------------------ |
| leafs     | string\[\] | The list of leafs to create a snapshot from (e.g. addresses) |

<b>Returns:</b>

Promise&lt;{ merkleRoot: string; snapshotUri: string; snapshot: [Snapshot](./sdk.snapshot.md)<!-- -->; }&gt;

- An object containing the snapshot URI (which is uploaded to storage) and the merkle root (which can be used in a Claim Condition)
