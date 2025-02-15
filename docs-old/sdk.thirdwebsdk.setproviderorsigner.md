<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [ThirdwebSDK](./sdk.thirdwebsdk.md) &gt; [setProviderOrSigner](./sdk.thirdwebsdk.setproviderorsigner.md)

## ThirdwebSDK.setProviderOrSigner() method

<b>Signature:</b>

```typescript
setProviderOrSigner(providerOrSignerOrNetwork: ValidProviderInput): ProviderOrSigner;
```

## Parameters

| Parameter                 | Type                                              | Description                                                                       |
| ------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| providerOrSignerOrNetwork | [ValidProviderInput](./sdk.validproviderinput.md) | A valid "ethers" Provider, Signer or a Network address to create a Provider with. |

<b>Returns:</b>

[ProviderOrSigner](./sdk.providerorsigner.md)

The Provider / Signer that was passed in, or a default ethers provider constructed with the passed Network.
