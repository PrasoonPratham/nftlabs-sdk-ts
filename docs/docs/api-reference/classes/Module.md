---
id: "Module"
title: "Class: Module<TContract>"
sidebar_label: "Module"
sidebar_position: 0
custom_edit_url: null
---

The root Module class. All other Modules extend this.

**`remarks`** This should never be instantiated directly.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `BaseContract` = `BaseContract` |

## Hierarchy

- **`Module`**

  ↳ [`ModuleWithRoles`](ModuleWithRoles)

  ↳ [`SplitsModule`](SplitsModule)

  ↳ [`VoteModule`](VoteModule)

## Constructors

### constructor

• **new Module**<`TContract`\>(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `BaseContract`<`TContract`\> = `BaseContract` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address` | `string` |
| `options` | [`ISDKOptions`](../interfaces/ISDKOptions) |
| `sdk` | [`ThirdwebSDK`](ThirdwebSDK) |

#### Defined in

[src/core/module.ts:103](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L103)

## Properties

### \_providerOrSigner

• `Private` **\_providerOrSigner**: ``null`` \| [`ProviderOrSigner`](../modules#providerorsigner) = `null`

**`internal`**

#### Defined in

[src/core/module.ts:62](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L62)

___

### \_signer

• `Private` **\_signer**: ``null`` \| `Signer` = `null`

**`internal`**

#### Defined in

[src/core/module.ts:77](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L77)

___

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L45)

___

### contract

• **contract**: `TContract`

Contract connects to the SDK signer or provider

**`internal`**

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L93)

___

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L50)

___

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L55)

___

### readOnlyContract

• **readOnlyContract**: `TContract`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L98)

___

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L57)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L66)

• `Protected` `set` **providerOrSigner**(`value`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L70)

___

### signer

• `Protected` `get` **signer**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L81)

• `Protected` `set` **signer**(`value`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `Signer` |

#### Returns

`void`

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L85)

## Methods

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L188)

___

### connectContract

▸ `Protected` **connectContract**(): `TContract`

**`virtual`**

**`internal`**

#### Returns

`TContract`

#### Defined in

[src/core/module.ts:246](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L246)

___

### emitTransactionEvent

▸ `Private` **emitTransactionEvent**(`status`, `transactionHash`): `Promise`<`void`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | ``"submitted"`` \| ``"completed"`` |
| `transactionHash` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/module.ts:282](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L282)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L126)

___

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L261)

___

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L235)

___

### getMetadata

▸ **getMetadata**(`resolveUrls?`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `resolveUrls` | `boolean` | `true` | Whether to resolve the urls in the metadata to a gateway. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L138)

___

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`virtual`**

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Defined in

[src/core/module.ts:254](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L254)

___

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L228)

___

### getProviderOrSigner

▸ `Private` **getProviderOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Defined in

[src/core/module.ts:195](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L195)

___

### getSigner

▸ `Protected` **getSigner**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L202)

___

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L219)

___

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L212)

___

### parseEventLogs

▸ `Protected` **parseEventLogs**(`eventName`, `logs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `logs?` | `Log`[] |

#### Returns

`any`

#### Defined in

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L452)

___

### parseLogs

▸ `Protected` **parseLogs**<`T`\>(`eventName`, `logs?`, `contract?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `logs?` | `Log`[] |
| `contract` | `BaseContract` |

#### Returns

`T`[]

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L471)

___

### sendContractTransaction

▸ `Protected` **sendContractTransaction**(`contract`, `fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `fn` | `string` |
| `args` | `any`[] |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L306)

___

### sendGaslessTransaction

▸ `Private` **sendGaslessTransaction**(`contract`, `fn`, `args`, `callOverrides`): `Promise`<`string`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `fn` | `string` |
| `args` | `any`[] |
| `callOverrides` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/module.ts:364](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L364)

___

### sendTransaction

▸ `Protected` **sendTransaction**(`fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `string` |
| `args` | `any`[] |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L295)

___

### sendTransactionByFunction

▸ `Private` **sendTransactionByFunction**(`contract`, `fn`, `args`, `callOverrides`): `Promise`<`ContractTransaction`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `fn` | `string` |
| `args` | `any`[] |
| `callOverrides` | `CallOverrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/core/module.ts:348](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L348)

___

### setMetadata

▸ **setMetadata**(`metadata`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The metadata to set. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L160)

___

### setProviderOrSigner

▸ **setProviderOrSigner**(`providerOrSigner`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L172)

___

### signTypedData

▸ `Protected` **signTypedData**(`signer`, `from`, `domain`, `types`, `message`): `Promise`<`BytesLike`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `from` | `string` |
| `domain` | `Object` |
| `domain.chainId` | `number` |
| `domain.name` | `string` |
| `domain.verifyingContract` | `string` |
| `domain.version` | `string` |
| `types` | `any` |
| `message` | `any` |

#### Returns

`Promise`<`BytesLike`\>

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L415)
