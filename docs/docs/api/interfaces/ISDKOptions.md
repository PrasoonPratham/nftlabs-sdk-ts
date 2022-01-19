---
id: "ISDKOptions"
title: "Interface: ISDKOptions"
sidebar_label: "ISDKOptions"
sidebar_position: 0
custom_edit_url: null
---

The optional options that can be passed to the SDK.

## Properties

### gasSpeed

• **gasSpeed**: `string`

Optional default speed setting for transactions

#### Defined in

[src/interfaces/ISdkOptions.ts:31](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L31)

___

### gasless

• **gasless**: `Object`

Optional gasless transaction configuration
deadlineSeconds is the number of seconds before the transaction is considered expired.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `biconomy` | `Object` |
| `biconomy.apiId` | `string` |
| `biconomy.apiKey` | `string` |
| `biconomy.deadlineSeconds?` | `number` |

#### Defined in

[src/interfaces/ISdkOptions.ts:67](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L67)

___

### ipfsGatewayUrl

• **ipfsGatewayUrl**: `string`

An optional IPFS Gateway. (Default: `https://cloudflare-ipfs.com/ipfs/`).

#### Defined in

[src/interfaces/ISdkOptions.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L16)

___

### maxGasPriceInGwei

• **maxGasPriceInGwei**: `number`

maxGasPrice for transactions

#### Defined in

[src/interfaces/ISdkOptions.ts:26](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L26)

___

### readOnlyRpcUrl

• **readOnlyRpcUrl**: `string`

Optional read only RPC url

#### Defined in

[src/interfaces/ISdkOptions.ts:78](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L78)

___

### registryContractAddress

• **registryContractAddress**: `string`

Optional Registry Contract Address

#### Defined in

[src/interfaces/ISdkOptions.ts:21](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L21)

___

### transactionRelayerForwarderAddress

• **transactionRelayerForwarderAddress**: `string`

Optional trusted forwarder address overwrite

#### Defined in

[src/interfaces/ISdkOptions.ts:52](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L52)

___

### transactionRelayerUrl

• **transactionRelayerUrl**: `string`

Optional relayer url to be used for gasless transaction

#### Defined in

[src/interfaces/ISdkOptions.ts:36](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L36)

## Methods

### gaslessSendFunction

▸ **gaslessSendFunction**(`contract`, `transaction`): `Promise`<`string`\>

Optional function for sending transaction to a relayer

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `transaction` | [`GaslessTransaction`](GaslessTransaction) |

#### Returns

`Promise`<`string`\>

transaction hash of relayed transaction.

#### Defined in

[src/interfaces/ISdkOptions.ts:58](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L58)

___

### transactionRelayerSendFunction

▸ **transactionRelayerSendFunction**(`message`, `signature`): `Promise`<`string`\>

**`deprecated`** [ISDKOptions.gaslessSendFunction](ISDKOptions#gaslesssendfunction)

Optional function for sending transaction to relayer

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`ForwardRequestMessage`](../modules#forwardrequestmessage) \| [`PermitRequestMessage`](../modules#permitrequestmessage) |
| `signature` | `BytesLike` |

#### Returns

`Promise`<`string`\>

transaction hash of relayed transaction.

#### Defined in

[src/interfaces/ISdkOptions.ts:44](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/interfaces/ISdkOptions.ts#L44)
