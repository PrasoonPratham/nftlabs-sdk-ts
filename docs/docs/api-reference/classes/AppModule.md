---
id: "AppModule"
title: "Class: AppModule"
sidebar_label: "AppModule"
sidebar_position: 0
custom_edit_url: null
---

Access this module by calling [ThirdwebSDK.getAppModule](ThirdwebSDK#getappmodule)

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`ProtocolControl`\>

  ↳ **`AppModule`**

## Implements

- `default`

## Constructors

### constructor

• **new AppModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address`          | `string`                                          |
| `options`          | [`ISDKOptions`](../interfaces/ISDKOptions)        |
| `sdk`              | [`ThirdwebSDK`](ThirdwebSDK)                      |

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[constructor](ModuleWithRoles#constructor)

#### Defined in

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L509)

## Properties

### \_isV1

• `Private` **\_isV1**: `boolean` = `false`

#### Defined in

[src/modules/app.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L81)

---

### \_shouldCheckVersion

• `Private` **\_shouldCheckVersion**: `boolean` = `true`

#### Defined in

[src/modules/app.ts:80](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L80)

---

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L45)

---

### contract

• **contract**: `ProtocolControl`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[contract](ModuleWithRoles#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L93)

---

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[ipfsGatewayUrl](ModuleWithRoles#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L50)

---

### jsonConvert

• `Private` **jsonConvert**: `JsonConvert`

#### Defined in

[src/modules/app.ts:82](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L82)

---

### moduleType

• `Private` **moduleType**: [`ModuleType`](../enums/ModuleType) = `-1`

The internal module type for the app module.
We do not treat it as a fully fledged module on the contract level, so it does not have a real type.

**`internal`**

**`readonly`**

#### Defined in

[src/modules/app.ts:100](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L100)

---

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[options](ModuleWithRoles#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L55)

---

### readOnlyContract

• **readOnlyContract**: `ProtocolControl`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[readOnlyContract](ModuleWithRoles#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L98)

---

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sdk](ModuleWithRoles#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L57)

---

### roles

▪ `Static` **roles**: readonly [``"admin"``]

#### Defined in

[src/modules/app.ts:84](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L84)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L66)

• `Protected` `set` **providerOrSigner**(`value`): `void`

**`internal`**

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `value` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L70)

---

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

ModuleWithRoles.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L504)

---

### signer

• `Protected` `get` **signer**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L81)

• `Protected` `set` **signer**(`value`): `void`

**`internal`**

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `value` | `null` \| `Signer` |

#### Returns

`void`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L85)

## Methods

### \_deployModule

▸ `Private` **\_deployModule**<`T`\>(`moduleType`, `args`, `factory`): `Promise`<`string`\>

Helper method that deploys a module and returns its address

**`internal`**

#### Type parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `T`  | extends [`ModuleType`](../enums/ModuleType) |

#### Parameters

| Name         | Type    | Description                                      |
| :----------- | :------ | :----------------------------------------------- |
| `moduleType` | `T`     | The ModuleType to deploy                         |
| `args`       | `any`[] | Constructor arguments for the module             |
| `factory`    | `any`   | The ABI factory used to call the `deploy` method |

#### Returns

`Promise`<`string`\>

The address of the deployed module

#### Defined in

[src/modules/app.ts:469](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L469)

---

### \_prepareMetadata

▸ `Private` **\_prepareMetadata**(`metadata`): `Promise`<`any`\>

Helper method that handles `image` property uploads if its a file

#### Parameters

| Name       | Type                                           | Description                               |
| :--------- | :--------------------------------------------- | :---------------------------------------- |
| `metadata` | [`CommonModuleMetadata`](CommonModuleMetadata) | The metadata of the module to be deployed |

#### Returns

`Promise`<`any`\>

- The sanitized metadata with an uploaded image ipfs hash

#### Defined in

[src/modules/app.ts:441](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L441)

---

### balance

▸ **balance**(): `Promise`<`BigNumber`\>

Check the balance of the project wallet in the native token of the chain

#### Returns

`Promise`<`BigNumber`\>

- The balance of the project in the native token of the chain

#### Defined in

[src/modules/app.ts:1124](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1124)

---

### balanceOfToken

▸ **balanceOfToken**(`tokenAddress`): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

Check the balance of the project wallet in a particular
ERC20 token contract

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `tokenAddress` | `string` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

- The balance of the project in the native token of the chain

#### Defined in

[src/modules/app.ts:1146](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1146)

---

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[clearSigner](ModuleWithRoles#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L188)

---

### connectContract

▸ `Protected` **connectContract**(): `ProtocolControl`

**`internal`**

#### Returns

`ProtocolControl`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/app.ts:105](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L105)

---

### deployBundleDropModule

▸ **deployBundleDropModule**(`metadata`): `Promise`<[`BundleDropModule`](BundleDropModule)\>

Deploys a Bundle Drop module

#### Parameters

| Name       | Type                                                   | Description         |
| :--------- | :----------------------------------------------------- | :------------------ |
| `metadata` | [`BundleDropModuleMetadata`](BundleDropModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`BundleDropModule`](BundleDropModule)\>

- The deployed Bundle Drop module

#### Implementation of

IAppModule.deployBundleDropModule

#### Defined in

[src/modules/app.ts:842](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L842)

---

### deployBundleModule

▸ **deployBundleModule**(`metadata`): `Promise`<[`BundleModule`](BundleModule)\>

Deploys a collection module.

#### Parameters

| Name       | Type                                           | Description                |
| :--------- | :--------------------------------------------- | :------------------------- |
| `metadata` | [`BundleModuleMetadata`](BundleModuleMetadata) | Metadata about the module. |

#### Returns

`Promise`<[`BundleModule`](BundleModule)\>

A promise with the newly created module.

#### Implementation of

IAppModule.deployBundleModule

#### Defined in

[src/modules/app.ts:502](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L502)

---

### deployCurrencyModule

▸ **deployCurrencyModule**(`metadata`): `Promise`<[`CurrencyModule`](CurrencyModule)\>

Deploys a currency module.

#### Parameters

| Name       | Type                                               | Description         |
| :--------- | :------------------------------------------------- | :------------------ |
| `metadata` | [`CurrencyModuleMetadata`](CurrencyModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`CurrencyModule`](CurrencyModule)\>

- The deployed currency module

#### Implementation of

IAppModule.deployCurrencyModule

#### Defined in

[src/modules/app.ts:631](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L631)

---

### deployDatastoreModule

▸ **deployDatastoreModule**(`metadata`): `Promise`<[`DatastoreModule`](DatastoreModule)\>

Deploys a Datastore module

**`alpha`**

#### Parameters

| Name       | Type                                                 | Description         |
| :--------- | :--------------------------------------------------- | :------------------ |
| `metadata` | [`DatastoreModuleMetadata`](DatastoreModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`DatastoreModule`](DatastoreModule)\>

- The deployed Datastore module

#### Implementation of

IAppModule.deployDatastoreModule

#### Defined in

[src/modules/app.ts:896](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L896)

---

### deployDropModule

▸ **deployDropModule**(`metadata`): `Promise`<[`DropModule`](DropModule)\>

Deploys a Drop module

#### Parameters

| Name       | Type                                       | Description         |
| :--------- | :----------------------------------------- | :------------------ |
| `metadata` | [`DropModuleMetadata`](DropModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`DropModule`](DropModule)\>

- The deployed Drop module

#### Implementation of

IAppModule.deployDropModule

#### Defined in

[src/modules/app.ts:787](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L787)

---

### deployMarketModule

▸ **deployMarketModule**(`metadata`): `Promise`<[`MarketModule`](MarketModule)\>

Deploys a Marketplace module

#### Parameters

| Name       | Type                                           | Description         |
| :--------- | :--------------------------------------------- | :------------------ |
| `metadata` | [`MarketModuleMetadata`](MarketModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`MarketModule`](MarketModule)\>

- The deployed Marketplace module

#### Implementation of

IAppModule.deployMarketModule

#### Defined in

[src/modules/app.ts:705](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L705)

---

### deployMarketplaceModule

▸ **deployMarketplaceModule**(`metadata`): `Promise`<[`MarketplaceModule`](MarketplaceModule)\>

#### Parameters

| Name       | Type                                                     |
| :--------- | :------------------------------------------------------- |
| `metadata` | [`MarketplaceModuleMetadata`](MarketplaceModuleMetadata) |

#### Returns

`Promise`<[`MarketplaceModule`](MarketplaceModule)\>

#### Implementation of

IAppModule.deployMarketplaceModule

#### Defined in

[src/modules/app.ts:1201](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1201)

---

### deployNftModule

▸ **deployNftModule**(`metadata`): `Promise`<[`NFTModule`](NFTModule)\>

Deploys a NFT module.

#### Parameters

| Name       | Type                                     | Description         |
| :--------- | :--------------------------------------- | :------------------ |
| `metadata` | [`NftModuleMetadata`](NftModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`NFTModule`](NFTModule)\>

- The deployed NFT module

#### Implementation of

IAppModule.deployNftModule

#### Defined in

[src/modules/app.ts:580](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L580)

---

### deployPackModule

▸ **deployPackModule**(`metadata`): `Promise`<[`PackModule`](PackModule)\>

Deploys a Pack module

#### Parameters

| Name       | Type                                       | Description         |
| :--------- | :----------------------------------------- | :------------------ |
| `metadata` | [`PackModuleMetadata`](PackModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`PackModule`](PackModule)\>

- The deployed Pack module

#### Implementation of

IAppModule.deployPackModule

#### Defined in

[src/modules/app.ts:741](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L741)

---

### deploySplitsModule

▸ **deploySplitsModule**(`metadata`): `Promise`<[`SplitsModule`](SplitsModule)\>

Deploys a Splits module

#### Parameters

| Name       | Type                                           | Description         |
| :--------- | :--------------------------------------------- | :------------------ |
| `metadata` | [`SplitsModuleMetadata`](SplitsModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`SplitsModule`](SplitsModule)\>

- The deployed splits module

#### Implementation of

IAppModule.deploySplitsModule

#### Defined in

[src/modules/app.ts:543](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L543)

---

### deployTokenModule

▸ **deployTokenModule**(`metadata`): `Promise`<[`TokenModule`](TokenModule)\>

Deploys a token module.

#### Parameters

| Name       | Type                                         | Description         |
| :--------- | :------------------------------------------- | :------------------ |
| `metadata` | [`TokenModuleMetadata`](TokenModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`TokenModule`](TokenModule)\>

- The deployed currency module

#### Implementation of

IAppModule.deployTokenModule

#### Defined in

[src/modules/app.ts:668](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L668)

---

### deployVoteModule

▸ **deployVoteModule**(`metadata`): `Promise`<[`VoteModule`](VoteModule)\>

Deploys a Vote module

#### Parameters

| Name       | Type                                       | Description         |
| :--------- | :----------------------------------------- | :------------------ |
| `metadata` | [`VoteModuleMetadata`](VoteModuleMetadata) | The module metadata |

#### Returns

`Promise`<[`VoteModule`](VoteModule)\>

- The deployed vote module

#### Implementation of

IAppModule.deployVoteModule

#### Defined in

[src/modules/app.ts:927](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L927)

---

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[exists](ModuleWithRoles#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L126)

---

### getAllContractMetadata

▸ **getAllContractMetadata**(`addresses`): `Promise`<[`ModuleMetadataNoType`](../interfaces/ModuleMetadataNoType)[]\>

**`internal`**

#### Parameters

| Name        | Type       | Description                                       |
| :---------- | :--------- | :------------------------------------------------ |
| `addresses` | `string`[] | The addresses of the modules to get metadata for. |

#### Returns

`Promise`<[`ModuleMetadataNoType`](../interfaces/ModuleMetadataNoType)[]\>

#### Defined in

[src/modules/app.ts:165](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L165)

---

### getAllModuleMetadata

▸ **getAllModuleMetadata**(`filterByModuleType?`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of all module metadata on a given app.

#### Parameters

| Name                  | Type                                  | Description                                                       |
| :-------------------- | :------------------------------------ | :---------------------------------------------------------------- |
| `filterByModuleType?` | [`ModuleType`](../enums/ModuleType)[] | Optional array of [ModuleType](../enums/ModuleType) to filter by. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Array of module metadata

#### Defined in

[src/modules/app.ts:297](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L297)

---

### getAllRoleMembers

▸ **getAllRoleMembers**(): `Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

Call this to get get a list of addresses for all supported roles on the module.

**`see`** [getRoleMembers](ModuleWithRoles#getrolemembers) to get a list of addresses that are members of a specific role.

**`throws`** If the module does not support roles this will throw an [InvariantError](InvariantError).

#### Returns

`Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

A record of [Role](../modules#role)s to lists of addresses that are members of the given role.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getAllRoleMembers](ModuleWithRoles#getallrolemembers)

#### Defined in

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L556)

---

### getBundleAddress

▸ `Private` **getBundleAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:131](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L131)

---

### getBundleModules

▸ **getBundleModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

#### Defined in

[src/modules/app.ts:225](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L225)

---

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getCallOverrides](ModuleWithRoles#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L261)

---

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getChainID](ModuleWithRoles#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L235)

---

### getCollectionModules

▸ **getCollectionModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of Bundle module metadata.

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of Bundle modules.

#### Defined in

[src/modules/app.ts:221](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L221)

---

### getCurrencyAddress

▸ `Private` **getCurrencyAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:139](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L139)

---

### getCurrencyModules

▸ **getCurrencyModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of Currency module metadata.

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of Currency modules.

#### Defined in

[src/modules/app.ts:239](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L239)

---

### getDatastoreAddress

▸ `Private` **getDatastoreAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:151](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L151)

---

### getDatastoreModules

▸ **getDatastoreModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of Datastore module metadata.

**`alpha`**

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of Datastore modules.

#### Defined in

[src/modules/app.ts:254](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L254)

---

### getDropAddress

▸ `Private` **getDropAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:147](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L147)

---

### getDropModules

▸ **getDropModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of Drop module metadata.

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of Drop modules.

#### Defined in

[src/modules/app.ts:282](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L282)

---

### getForwarder

▸ **getForwarder**(): `Promise`<`string`\>

Trusted forwarder is used to forward gasless transactions. Trusted Forwarder of each module cannot be changed once it is deployed.

#### Returns

`Promise`<`string`\>

The address of the trusted forwarder contract

#### Defined in

[src/modules/app.ts:331](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L331)

---

### getMarketAddress

▸ `Private` **getMarketAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:143](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L143)

---

### getMarketModules

▸ **getMarketModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of Market module metadata.

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of Market modules.

#### Defined in

[src/modules/app.ts:268](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L268)

---

### getMetadata

▸ **getMetadata**(`resolveUrls?`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name          | Type      | Default value | Description                                               |
| :------------ | :-------- | :------------ | :-------------------------------------------------------- |
| `resolveUrls` | `boolean` | `true`        | Whether to resolve the urls in the metadata to a gateway. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getMetadata](ModuleWithRoles#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L138)

---

### getModuleAddress

▸ `Private` **getModuleAddress**(`moduleType`): `Promise`<`string`[]\>

**`internal`**

#### Parameters

| Name         | Type                                |
| :----------- | :---------------------------------- |
| `moduleType` | [`ModuleType`](../enums/ModuleType) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:123](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L123)

---

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`override`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleRoles](ModuleWithRoles#getmoduleroles)

#### Defined in

[src/modules/app.ts:90](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L90)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/app.ts:115](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L115)

---

### getNFTAddress

▸ `Private` **getNFTAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:127](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L127)

---

### getNFTModules

▸ **getNFTModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of NFT module metadata.

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of NFT modules.

#### Defined in

[src/modules/app.ts:207](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L207)

---

### getPackAddress

▸ `Private` **getPackAddress**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/app.ts:135](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L135)

---

### getPackModules

▸ **getPackModules**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

Method to get a list of pack module metadata.

**`deprecated`** - Use [AppModule.getAllModuleMetadata](AppModule#getallmodulemetadata) instead

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

A promise of an array of Pack modules.

#### Defined in

[src/modules/app.ts:193](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L193)

---

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getProvider](ModuleWithRoles#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L228)

---

### getRoleMembers

▸ **getRoleMembers**(`role`): `Promise`<`string`[]\>

Call this to get a list of addresses that are members of a specific role.

**`throws`** If you are requestiong a role that does not exist on the module this will throw an [InvariantError](InvariantError).

**`see`** [getAllRoleMembers](ModuleWithRoles#getallrolemembers) to get get a list of addresses for all supported roles on the module.

**`example`** Say you want to get the list of addresses that are members of the [minter](../interfaces/IRoles#minter) role.

```typescript
const minterAddresses: string[] = await module.getRoleMemberList("minter");
```

#### Parameters

| Name   | Type                                   | Description                                                  |
| :----- | :------------------------------------- | :----------------------------------------------------------- |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to to get a memberlist for. |

#### Returns

`Promise`<`string`[]\>

The list of addresses that are members of the specific role.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getRoleMembers](ModuleWithRoles#getrolemembers)

#### Defined in

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L532)

---

### getRoyaltyTreasury

▸ **getRoyaltyTreasury**(`address?`): `Promise`<`string`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `address?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/app.ts:155](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L155)

---

### getSigner

▸ `Protected` **getSigner**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSigner](ModuleWithRoles#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L202)

---

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSignerAddress](ModuleWithRoles#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L219)

---

### grantRole

▸ **grantRole**(`role`, `address`): `Promise`<`TransactionReceipt`\>

Call this to grant a role to a specific address.

**`remarks`**

Make sure you are sure you want to grant the role to the address.

**`throws`** If you are trying to grant does not exist on the module this will throw an [InvariantError](InvariantError).

#### Parameters

| Name      | Type                                   | Description                                              |
| :-------- | :------------------------------------- | :------------------------------------------------------- |
| `role`    | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to grant to the address |
| `address` | `string`                               | The address to grant the role to                         |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[grantRole](ModuleWithRoles#grantrole)

#### Defined in

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L680)

---

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[hasValidSigner](ModuleWithRoles#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L212)

---

### isV1

▸ **isV1**(): `Promise`<`boolean`\>

**`internal`**
Check if contract is v1 or v2. If the contract doesn't have version = v1 contract.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/app.ts:1181](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1181)

---

### isV1UpgradedOrV2

▸ **isV1UpgradedOrV2**(): `Promise`<`boolean`\>

**`internal`**

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/app.ts:1197](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1197)

---

### onlyRoles

▸ `Protected` **onlyRoles**(`roles`, `address`): `Promise`<`void`\>

Throws an error if an address is missing the roles specified.

#### Parameters

| Name      | Type                                     | Description          |
| :-------- | :--------------------------------------- | :------------------- |
| `roles`   | keyof [`IRoles`](../interfaces/IRoles)[] | The roles to check   |
| `address` | `string`                                 | The address to check |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[onlyRoles](ModuleWithRoles#onlyroles)

#### Defined in

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L793)

---

### parseEventLogs

▸ `Protected` **parseEventLogs**(`eventName`, `logs?`): `any`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `eventName` | `string` |
| `logs?`     | `Log`[]  |

#### Returns

`any`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[parseEventLogs](ModuleWithRoles#parseeventlogs)

#### Defined in

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L452)

---

### parseLogs

▸ `Protected` **parseLogs**<`T`\>(`eventName`, `logs?`, `contract?`): `T`[]

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `eventName` | `string`       |
| `logs?`     | `Log`[]        |
| `contract`  | `BaseContract` |

#### Returns

`T`[]

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[parseLogs](ModuleWithRoles#parselogs)

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L471)

---

### prepareBatchMetadata

▸ **prepareBatchMetadata**(`metadata`): `Promise`<`string`[]\>

Prepares a list of metadata for uploading.

#### Parameters

| Name       | Type                                                      | Description                             |
| :--------- | :-------------------------------------------------------- | :-------------------------------------- |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | List of metadata to prepare for upload. |

#### Returns

`Promise`<`string`[]\>

- List of metadata prepared for upload.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[prepareBatchMetadata](ModuleWithRoles#preparebatchmetadata)

#### Defined in

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L779)

---

### prepareMetadata

▸ **prepareMetadata**(`metadata`): `Promise`<`string`\>

Prepares any set of metadata for uploading by recursively converting all Buffer|Blob|File objects
into a hash of the object after its been uploaded to distributed storage (e.g. IPFS). After uploading
any File|Buffer|Blob, the metadata is serialized to a string.

#### Parameters

| Name       | Type                                                    | Description                                 |
| :--------- | :------------------------------------------------------ | :------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The list of metadata to prepare for upload. |

#### Returns

`Promise`<`string`\>

- The serialized metadata object.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[prepareMetadata](ModuleWithRoles#preparemetadata)

#### Defined in

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L743)

---

### revokeAllRolesFromAddress

▸ **revokeAllRolesFromAddress**(`address`): `Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

Call this to revoke all roles given to a specific address.

#### Parameters

| Name      | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `address` | `string` | The address to revoke all roles for. |

#### Returns

`Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

A list of roles that were revoked.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[revokeAllRolesFromAddress](ModuleWithRoles#revokeallrolesfromaddress)

#### Defined in

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L641)

---

### revokeRole

▸ **revokeRole**(`role`, `address`): `Promise`<`TransactionReceipt`\>

Call this to revoke a role from a specific address.

**`remarks`**

-- Caution --

This will let you remove yourself from the role, too.
If you remove yourself from the [admin](../interfaces/IRoles#admin) role, you will no longer be able to administer the module.
There is no way to recover from this.

**`throws`** If you are trying to revoke does not exist on the module this will throw an [InvariantError](InvariantError).

#### Parameters

| Name      | Type                                   | Description                                |
| :-------- | :------------------------------------- | :----------------------------------------- |
| `role`    | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to revoke |
| `address` | `string`                               | The address to revoke the role from        |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[revokeRole](ModuleWithRoles#revokerole)

#### Defined in

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L712)

---

### sendContractTransaction

▸ `Protected` **sendContractTransaction**(`contract`, `fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `contract`       | `BaseContract`  |
| `fn`             | `string`        |
| `args`           | `any`[]         |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sendContractTransaction](ModuleWithRoles#sendcontracttransaction)

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L306)

---

### sendTransaction

▸ `Protected` **sendTransaction**(`fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `fn`             | `string`        |
| `args`           | `any`[]         |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sendTransaction](ModuleWithRoles#sendtransaction)

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L295)

---

### setAllRoleMembers

▸ **setAllRoleMembers**(`rolesWithAddresses`): `Promise`<`any`\>

Call this to OVERWRITE the list of addresses that are members of specific roles.

Every role in the list will be overwritten with the new list of addresses provided with them.
If you want to add or remove addresses for a single address use [grantRole](ModuleWithRoles#grantrole) and [revokeRole](ModuleWithRoles#grantrole) respectively instead.

**`throws`** If you are requestiong a role that does not exist on the module this will throw an [InvariantError](InvariantError).

**`example`** Say you want to overwrite the list of addresses that are members of the [minter](../interfaces/IRoles#minter) role.

```typescript
const minterAddresses: string[] = await module.getRoleMemberList("minter");
await module.setAllRoleMembers({
  minter: []
});
console.log(await module.getRoleMemberList("minter")); // No matter what members had the role before, the new list will be set to []
```

#### Parameters

| Name                 | Type                                    | Description                                                                                          |
| :------------------- | :-------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `rolesWithAddresses` | [`SetAllRoles`](../modules#setallroles) | A record of [Role](../modules#role)s to lists of addresses that should be members of the given role. |

#### Returns

`Promise`<`any`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setAllRoleMembers](ModuleWithRoles#setallrolemembers)

#### Defined in

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L582)

---

### setForwarder

▸ **setForwarder**(`address`): `Promise`<`void`\>

Set trusted forwarder for the modules. Every module that is deployed after this call will use the new forwarder.
Trusted forwarder is used to forward gasless transactions. Trusted Forwarder of each module cannot be changed once it is deployed.

#### Parameters

| Name      | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `address` | `string` | The address of the trusted forwarder contract |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/app.ts:342](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L342)

---

### setMetadata

▸ **setMetadata**(`metadata`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name       | Type                                                    | Description          |
| :--------- | :------------------------------------------------------ | :------------------- |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The metadata to set. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setMetadata](ModuleWithRoles#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L160)

---

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

**`deprecated`** - Use setMetadata() instead

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/app.ts:349](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L349)

---

### setModuleRoyaltyTreasury

▸ **setModuleRoyaltyTreasury**(`moduleAddress`, `treasury`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `moduleAddress` | `string` |
| `treasury`      | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/app.ts:362](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L362)

---

### setProviderOrSigner

▸ **setProviderOrSigner**(`providerOrSigner`): `void`

**`internal`**

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setProviderOrSigner](ModuleWithRoles#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L172)

---

### setRoyaltyTreasury

▸ **setRoyaltyTreasury**(`treasury`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `treasury` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/app.ts:356](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L356)

---

### shouldUpgradeModuleList

▸ **shouldUpgradeModuleList**(): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)[]\>

#### Defined in

[src/modules/app.ts:1009](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1009)

---

### shouldUpgradeToV2

▸ **shouldUpgradeToV2**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/app.ts:996](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L996)

---

### signTypedData

▸ `Protected` **signTypedData**(`signer`, `from`, `domain`, `types`, `message`): `Promise`<`BytesLike`\>

#### Parameters

| Name                       | Type     |
| :------------------------- | :------- |
| `signer`                   | `Signer` |
| `from`                     | `string` |
| `domain`                   | `Object` |
| `domain.chainId`           | `number` |
| `domain.name`              | `string` |
| `domain.verifyingContract` | `string` |
| `domain.version`           | `string` |
| `types`                    | `any`    |
| `message`                  | `any`    |

#### Returns

`Promise`<`BytesLike`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[signTypedData](ModuleWithRoles#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L415)

---

### upgradeModuleList

▸ **upgradeModuleList**(`moduleAddresses`): `Promise`<`void`\>

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `moduleAddresses` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/app.ts:1035](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1035)

---

### upgradeToV2

▸ **upgradeToV2**(`upgradeOptions?`): `Promise`<`void`\>

Upgrades the protocol control to v2. In v2, the royalty treasury needs to be set to be set to a splits contract.

#### Parameters

| Name                                  | Type                                                     |
| :------------------------------------ | :------------------------------------------------------- |
| `upgradeOptions`                      | `Object`                                                 |
| `upgradeOptions.splitsModuleAddress?` | `string`                                                 |
| `upgradeOptions.splitsRecipients?`    | [`NewSplitRecipient`](../interfaces/NewSplitRecipient)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/app.ts:1084](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L1084)

---

### withdrawFunds

▸ **withdrawFunds**(`to`, `currency`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `to`       | `string` |
| `currency` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/app.ts:372](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/app.ts#L372)
