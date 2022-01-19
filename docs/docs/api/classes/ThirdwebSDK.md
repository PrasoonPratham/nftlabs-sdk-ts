---
id: "ThirdwebSDK"
title: "Class: ThirdwebSDK"
sidebar_label: "ThirdwebSDK"
sidebar_position: 0
custom_edit_url: null
---

The entrypoint to the SDK.

## Implements

- [`IThirdwebSdk`](../interfaces/IThirdwebSdk)

## Constructors

### constructor

• **new ThirdwebSDK**(`providerOrNetwork`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrNetwork` | [`ValidProviderInput`](../modules#validproviderinput) |
| `opts?` | `Partial`<[`ISDKOptions`](../interfaces/ISDKOptions)\> |

#### Defined in

[src/core/index.ts:141](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L141)

## Properties

### \_jsonConvert

• `Private` **\_jsonConvert**: `JsonConvert`

#### Defined in

[src/core/index.ts:117](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L117)

___

### \_registry

• `Private` **\_registry**: ``null`` \| `RegistryModule` = `null`

#### Defined in

[src/core/index.ts:133](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L133)

___

### \_signer

• `Private` **\_signer**: ``null`` \| `Signer` = `null`

#### Defined in

[src/core/index.ts:115](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L115)

___

### defaultOptions

• `Private` **defaultOptions**: [`ISDKOptions`](../interfaces/ISDKOptions)

#### Defined in

[src/core/index.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L93)

___

### event

• **event**: `EventEmitter2`

#### Defined in

[src/core/index.ts:120](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L120)

___

### modules

• `Private` **modules**: `Map`<`string`, [`AppModule`](AppModule) \| [`BundleModule`](BundleModule) \| [`NFTModule`](NFTModule) \| [`CurrencyModule`](CurrencyModule) \| [`MarketModule`](MarketModule) \| [`PackModule`](PackModule) \| `RegistryModule` \| [`DropModule`](DropModule) \| [`DatastoreModule`](DatastoreModule) \| [`SplitsModule`](SplitsModule) \| [`BundleDropModule`](BundleDropModule) \| [`MarketplaceModule`](MarketplaceModule) \| [`VoteModule`](VoteModule)\>

#### Defined in

[src/core/index.ts:112](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L112)

___

### options

• `Private` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

#### Defined in

[src/core/index.ts:92](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L92)

___

### providerOrSigner

• `Private` **providerOrSigner**: [`ProviderOrSigner`](../modules#providerorsigner)

#### Defined in

[src/core/index.ts:113](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L113)

___

### storage

• `Private` **storage**: [`IStorage`](../interfaces/IStorage)

#### Defined in

[src/core/index.ts:118](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L118)

## Accessors

### registry

• `Private` `get` **registry**(): ``null`` \| `RegistryModule`

#### Returns

``null`` \| `RegistryModule`

#### Defined in

[src/core/index.ts:134](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L134)

• `Private` `set` **registry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `RegistryModule` |

#### Returns

`void`

#### Defined in

[src/core/index.ts:137](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L137)

___

### signer

• `get` **signer**(): ``null`` \| `Signer`

The active Signer, you should not need to access this unless you are deploying new modules.

**`internal`**

#### Returns

``null`` \| `Signer`

#### Defined in

[src/core/index.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L126)

• `set` **signer**(`value`): `void`

The active Signer, you should not need to access this unless you are deploying new modules.

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `Signer` |

#### Returns

`void`

#### Defined in

[src/core/index.ts:129](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L129)

## Methods

### biconomySendFunction

▸ `Private` **biconomySendFunction**(`_contract`, `transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_contract` | `BaseContract` |
| `transaction` | [`GaslessTransaction`](../interfaces/GaslessTransaction) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/index.ts:543](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L543)

___

### createApp

▸ **createApp**(`metadata`): `Promise`<`ContractReceipt`\>

Call this to create a new app

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | metadata URI or a JSON object |

#### Returns

`Promise`<`ContractReceipt`\>

The transaction receipt

#### Defined in

[src/core/index.ts:246](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L246)

___

### createSnapshot

▸ **createSnapshot**(`leafs`): `Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

Creates a snapshot from a list of leafs. The leafs could be addresses,
hashes, etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafs` | `string`[] |

#### Returns

`Promise`<[`SnapshotInfo`](../interfaces/SnapshotInfo)\>

#### Implementation of

[IThirdwebSdk](../interfaces/IThirdwebSdk).[createSnapshot](../interfaces/IThirdwebSdk#createsnapshot)

#### Defined in

[src/core/index.ts:758](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L758)

___

### defaultGaslessSendFunction

▸ `Private` **defaultGaslessSendFunction**(`contract`, `transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `transaction` | [`GaslessTransaction`](../interfaces/GaslessTransaction) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/index.ts:530](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L530)

___

### defaultRelayerSendFunction

▸ `Private` **defaultRelayerSendFunction**(`message`, `signature`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`ForwardRequestMessage`](../modules#forwardrequestmessage) \| [`PermitRequestMessage`](../modules#permitrequestmessage) |
| `signature` | `BytesLike` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/index.ts:728](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L728)

___

### defenderSendFunction

▸ `Private` **defenderSendFunction**(`contract`, `transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `transaction` | [`GaslessTransaction`](../interfaces/GaslessTransaction) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/index.ts:636](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L636)

___

### getAppModule

▸ **getAppModule**(`address`): [`AppModule`](AppModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given App module. |

#### Returns

[`AppModule`](AppModule)

The App Module.

#### Defined in

[src/core/index.ts:343](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L343)

___

### getApps

▸ **getApps**(`address?`): `Promise`<[`IAppModule`](../interfaces/IAppModule)[]\>

Call this to get the current apps.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`IAppModule`](../interfaces/IAppModule)[]\>

All currently registered apps for the connected wallet

#### Defined in

[src/core/index.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L235)

___

### getBundleDropModule

▸ **getBundleDropModule**(`address`): [`BundleDropModule`](BundleDropModule)

**`beta`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given BundleDrop module. |

#### Returns

[`BundleDropModule`](BundleDropModule)

The Drop Module.

#### Defined in

[src/core/index.ts:438](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L438)

___

### getBundleModule

▸ **getBundleModule**(`address`): [`BundleModule`](BundleModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Bundle module. |

#### Returns

[`BundleModule`](BundleModule)

The Bundle Module.

#### Defined in

[src/core/index.ts:371](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L371)

___

### getChainID

▸ `Private` **getChainID**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/core/index.ts:176](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L176)

___

### getCollectionModule

▸ **getCollectionModule**(`address`): [`BundleModule`](BundleModule)

**`deprecated`** Use the new [ThirdwebSDK.getBundleModule](ThirdwebSDK#getbundlemodule) function instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Collection module. |

#### Returns

[`BundleModule`](BundleModule)

The Bundle Module.

#### Defined in

[src/core/index.ts:362](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L362)

___

### getContractMetadata

▸ **getContractMetadata**(`address`): `Promise`<[`ModuleMetadataNoType`](../interfaces/ModuleMetadataNoType)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`ModuleMetadataNoType`](../interfaces/ModuleMetadataNoType)\>

The contract metadata for the given contract address.

#### Defined in

[src/core/index.ts:324](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L324)

___

### getCurrencyModule

▸ **getCurrencyModule**(`address`): [`CurrencyModule`](CurrencyModule)

**`deprecated`** - see [TokenModule](TokenModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Currency module. |

#### Returns

[`CurrencyModule`](CurrencyModule)

The Currency Module.

#### Defined in

[src/core/index.ts:391](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L391)

___

### getDatastoreModule

▸ **getDatastoreModule**(`address`): [`DatastoreModule`](DatastoreModule)

**`alpha`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Datastore module. |

#### Returns

[`DatastoreModule`](DatastoreModule)

The Datastore Module.

#### Defined in

[src/core/index.ts:410](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L410)

___

### getDropModule

▸ **getDropModule**(`address`): [`DropModule`](DropModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Drop module. |

#### Returns

[`DropModule`](DropModule)

The Drop Module.

#### Defined in

[src/core/index.ts:428](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L428)

___

### getForwarderAddress

▸ **getForwarderAddress**(): `Promise`<`string`\>

you should not need this unless you are creating new modules

**`internal`**

#### Returns

`Promise`<`string`\>

the active registry module forwarder address

#### Defined in

[src/core/index.ts:225](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L225)

___

### getGasPrice

▸ **getGasPrice**(`speed?`, `maxGasGwei?`): `Promise`<``null`` \| `number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed?` | `string` | what speed to prefer, default: "fastest" |
| `maxGasGwei?` | `number` | - |

#### Returns

`Promise`<``null`` \| `number`\>

the optiomal gas price

#### Defined in

[src/core/index.ts:274](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L274)

___

### getMarketModule

▸ **getMarketModule**(`address`): [`MarketModule`](MarketModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Market module. |

#### Returns

[`MarketModule`](MarketModule)

The Market Module.

#### Defined in

[src/core/index.ts:419](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L419)

___

### getMarketplaceModule

▸ **getMarketplaceModule**(`address`): [`MarketplaceModule`](MarketplaceModule)

**`beta`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Marketplace module. |

#### Returns

[`MarketplaceModule`](MarketplaceModule)

The Marketplace Module.

#### Defined in

[src/core/index.ts:448](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L448)

___

### getModuleByName

▸ `Private` **getModuleByName**(`name`, `address`): [`AppModule`](AppModule) \| [`BundleModule`](BundleModule) \| [`NFTModule`](NFTModule) \| [`CurrencyModule`](CurrencyModule) \| [`MarketModule`](MarketModule) \| [`PackModule`](PackModule) \| [`DropModule`](DropModule) \| [`DatastoreModule`](DatastoreModule) \| [`SplitsModule`](SplitsModule)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |

#### Returns

[`AppModule`](AppModule) \| [`BundleModule`](BundleModule) \| [`NFTModule`](NFTModule) \| [`CurrencyModule`](CurrencyModule) \| [`MarketModule`](MarketModule) \| [`PackModule`](PackModule) \| [`DropModule`](DropModule) \| [`DatastoreModule`](DatastoreModule) \| [`SplitsModule`](SplitsModule)

#### Defined in

[src/core/index.ts:507](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L507)

___

### getNFTModule

▸ **getNFTModule**(`address`): [`NFTModule`](NFTModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given NFT module. |

#### Returns

[`NFTModule`](NFTModule)

The NFT Module.

#### Defined in

[src/core/index.ts:352](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L352)

___

### getOrCreateModule

▸ `Private` **getOrCreateModule**<`T`\>(`address`, `_Module`): `Instance`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyContract`](../modules#anycontract) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `_Module` | `T` |

#### Returns

`Instance`<`T`\>

#### Defined in

[src/core/index.ts:203](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L203)

___

### getPackModule

▸ **getPackModule**(`address`): [`PackModule`](PackModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Pack module. |

#### Returns

[`PackModule`](PackModule)

The Pack Module.

#### Defined in

[src/core/index.ts:380](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L380)

___

### getProvider

▸ `Private` **getProvider**(): `undefined` \| `Provider`

#### Returns

`undefined` \| `Provider`

#### Defined in

[src/core/index.ts:162](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L162)

___

### getRegistryAddress

▸ `Private` **getRegistryAddress**(): `Promise`<`undefined` \| `string`\>

#### Returns

`Promise`<`undefined` \| `string`\>

#### Defined in

[src/core/index.ts:183](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L183)

___

### getRegistryModule

▸ `Private` **getRegistryModule**(): `Promise`<`RegistryModule`\>

**`internal`**

#### Returns

`Promise`<`RegistryModule`\>

The Registry Module.

#### Defined in

[src/core/index.ts:197](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L197)

___

### getSigner

▸ `Private` **getSigner**(): `undefined` \| `Signer`

#### Returns

`undefined` \| `Signer`

#### Defined in

[src/core/index.ts:169](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L169)

___

### getSplitsModule

▸ **getSplitsModule**(`address`): [`SplitsModule`](SplitsModule)

**`alpha`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Royalty module. |

#### Returns

[`SplitsModule`](SplitsModule)

The Splits Module.

#### Defined in

[src/core/index.ts:458](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L458)

___

### getStorage

▸ **getStorage**(): [`IStorage`](../interfaces/IStorage)

Accessor for the storage instance used by the SDK

#### Returns

[`IStorage`](../interfaces/IStorage)

- The Storage instance.

#### Defined in

[src/core/index.ts:799](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L799)

___

### getTokenModule

▸ **getTokenModule**(`address`): [`TokenModule`](TokenModule)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Token module. |

#### Returns

[`TokenModule`](TokenModule)

The Token Module.

#### Defined in

[src/core/index.ts:400](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L400)

___

### getVoteModule

▸ **getVoteModule**(`address`): [`VoteModule`](VoteModule)

**`alpha`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address of the given Vote module. |

#### Returns

[`VoteModule`](VoteModule)

The Vote Module.

#### Defined in

[src/core/index.ts:468](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L468)

___

### invokeRoute

▸ **invokeRoute**(`route`, `payload`): `any`

Used for SDK that requires js bridging like Unity SDK.
Convenient function to let the caller calls into the SDK using routing scheme rather than function call.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | sdk execution route |
| `payload` | `Record`<`string`, `any`\> | request arguments for the function |

#### Returns

`any`

#### Defined in

[src/core/index.ts:481](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L481)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

Whether the SDK is in read-only mode. (Meaning it has not been passed a valid "Signer.")

#### Defined in

[src/core/index.ts:316](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L316)

___

### overrideStorage

▸ **overrideStorage**(`storage`): `void`

Allows you to override the storage used across the SDK.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storage` | [`IStorage`](../interfaces/IStorage) | The Storage instance to use. |

#### Returns

`void`

#### Defined in

[src/core/index.ts:808](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L808)

___

### setProviderOrSigner

▸ **setProviderOrSigner**(`providerOrSignerOrNetwork`): [`ProviderOrSigner`](../modules#providerorsigner)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerOrSignerOrNetwork` | [`ValidProviderInput`](../modules#validproviderinput) | A valid "ethers" Provider, Signer or a Network address to create a Provider with. |

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

The Provider / Signer that was passed in, or a default ethers provider constructed with the passed Network.

#### Defined in

[src/core/index.ts:288](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L288)

___

### updateModuleSigners

▸ `Private` **updateModuleSigners**(): `void`

#### Returns

`void`

#### Defined in

[src/core/index.ts:153](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/index.ts#L153)
