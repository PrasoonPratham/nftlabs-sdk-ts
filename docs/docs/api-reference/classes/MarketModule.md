---
id: "MarketModule"
title: "Class: MarketModule"
sidebar_label: "MarketModule"
sidebar_position: 0
custom_edit_url: null
---

Access this module by calling [ThirdwebSDK.getMarketModule](ThirdwebSDK#getmarketmodule)

**`deprecated`**

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`Market`\>

  ↳ **`MarketModule`**

## Constructors

### constructor

• **new MarketModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address` | `string` |
| `options` | [`ISDKOptions`](../interfaces/ISDKOptions) |
| `sdk` | [`ThirdwebSDK`](ThirdwebSDK) |

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[constructor](ModuleWithRoles#constructor)

#### Defined in

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L509)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L45)

___

### contract

• **contract**: `Market`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[contract](ModuleWithRoles#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L93)

___

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[ipfsGatewayUrl](ModuleWithRoles#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L50)

___

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[options](ModuleWithRoles#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L55)

___

### readOnlyContract

• **readOnlyContract**: `Market`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[readOnlyContract](ModuleWithRoles#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L98)

___

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sdk](ModuleWithRoles#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L57)

___

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.MARKET`

#### Defined in

[src/modules/market.ts:63](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L63)

___

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"lister"``, ``"pauser"``]

#### Defined in

[src/modules/market.ts:65](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L65)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

ModuleWithRoles.providerOrSigner

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

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L70)

___

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

ModuleWithRoles.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L504)

___

### signer

• `Protected` `get` **signer**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

ModuleWithRoles.signer

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

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L85)

## Methods

### buy

▸ **buy**(`listingId`, `quantity`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `string` |
| `quantity` | `BigNumberish` |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Defined in

[src/modules/market.ts:327](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L327)

___

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[clearSigner](ModuleWithRoles#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L188)

___

### connectContract

▸ `Protected` **connectContract**(): `Market`

**`internal`**

#### Returns

`Market`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/market.ts:82](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L82)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[exists](ModuleWithRoles#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L126)

___

### get

▸ **get**(`listingId`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `string` |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Defined in

[src/modules/market.ts:156](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L156)

___

### getAll

▸ **getAll**(`filter?`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ListingFilter`](../interfaces/ListingFilter) |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)[]\>

#### Defined in

[src/modules/market.ts:161](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L161)

___

### getAllListings

▸ **getAllListings**(`filter?`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)[]\>

**`deprecated`** Use [MarketModule.getAll](MarketModule#getall) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ListingFilter`](../interfaces/ListingFilter) |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)[]\>

#### Defined in

[src/modules/market.ts:150](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L150)

___

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

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L556)

___

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getCallOverrides](ModuleWithRoles#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L261)

___

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getChainID](ModuleWithRoles#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L235)

___

### getListing

▸ **getListing**(`listingId`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

**`deprecated`** Use [MarketModule.get](MarketModule#get) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `string` |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Defined in

[src/modules/market.ts:143](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L143)

___

### getMarketFeeBps

▸ **getMarketFeeBps**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/market.ts:226](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L226)

___

### getMetadata

▸ **getMetadata**(`resolveUrls?`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `resolveUrls` | `boolean` | `true` | Whether to resolve the urls in the metadata to a gateway. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getMetadata](ModuleWithRoles#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L138)

___

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`override`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleRoles](ModuleWithRoles#getmoduleroles)

#### Defined in

[src/modules/market.ts:75](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L75)

___

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/market.ts:89](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L89)

___

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getProvider](ModuleWithRoles#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L228)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to to get a memberlist for. |

#### Returns

`Promise`<`string`[]\>

The list of addresses that are members of the specific role.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getRoleMembers](ModuleWithRoles#getrolemembers)

#### Defined in

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L532)

___

### getSigner

▸ `Protected` **getSigner**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSigner](ModuleWithRoles#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L202)

___

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSignerAddress](ModuleWithRoles#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L219)

___

### grantRole

▸ **grantRole**(`role`, `address`): `Promise`<`TransactionReceipt`\>

Call this to grant a role to a specific address.

**`remarks`**

Make sure you are sure you want to grant the role to the address.

**`throws`** If you are trying to grant does not exist on the module this will throw an [InvariantError](InvariantError).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to grant to the address |
| `address` | `string` | The address to grant the role to |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[grantRole](ModuleWithRoles#grantrole)

#### Defined in

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L680)

___

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[hasValidSigner](ModuleWithRoles#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L212)

___

### list

▸ **list**(`assetContract`, `tokenId`, `currencyContract`, `price`, `quantity`, `tokensPerBuyer?`, `secondsUntilStart?`, `secondsUntilEnd?`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `assetContract` | `string` | `undefined` |
| `tokenId` | `string` | `undefined` |
| `currencyContract` | `string` | `undefined` |
| `price` | `BigNumberish` | `undefined` |
| `quantity` | `BigNumberish` | `undefined` |
| `tokensPerBuyer` | `BigNumberish` | `0` |
| `secondsUntilStart` | `BigNumberish` | `0` |
| `secondsUntilEnd` | `BigNumberish` | `0` |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Defined in

[src/modules/market.ts:231](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L231)

___

### onlyRoles

▸ `Protected` **onlyRoles**(`roles`, `address`): `Promise`<`void`\>

Throws an error if an address is missing the roles specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roles` | keyof [`IRoles`](../interfaces/IRoles)[] | The roles to check |
| `address` | `string` | The address to check |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[onlyRoles](ModuleWithRoles#onlyroles)

#### Defined in

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L793)

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

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[parseEventLogs](ModuleWithRoles#parseeventlogs)

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

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[parseLogs](ModuleWithRoles#parselogs)

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L471)

___

### prepareBatchMetadata

▸ **prepareBatchMetadata**(`metadata`): `Promise`<`string`[]\>

Prepares a list of metadata for uploading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | List of metadata to prepare for upload. |

#### Returns

`Promise`<`string`[]\>

- List of metadata prepared for upload.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[prepareBatchMetadata](ModuleWithRoles#preparebatchmetadata)

#### Defined in

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L779)

___

### prepareMetadata

▸ **prepareMetadata**(`metadata`): `Promise`<`string`\>

Prepares any set of metadata for uploading by recursively converting all Buffer|Blob|File objects
into a hash of the object after its been uploaded to distributed storage (e.g. IPFS). After uploading
any File|Buffer|Blob, the metadata is serialized to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The list of metadata to prepare for upload. |

#### Returns

`Promise`<`string`\>

- The serialized metadata object.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[prepareMetadata](ModuleWithRoles#preparemetadata)

#### Defined in

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L743)

___

### revokeAllRolesFromAddress

▸ **revokeAllRolesFromAddress**(`address`): `Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

Call this to revoke all roles given to a specific address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address to revoke all roles for. |

#### Returns

`Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

A list of roles that were revoked.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[revokeAllRolesFromAddress](ModuleWithRoles#revokeallrolesfromaddress)

#### Defined in

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L641)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to revoke |
| `address` | `string` | The address to revoke the role from |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[revokeRole](ModuleWithRoles#revokerole)

#### Defined in

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L712)

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

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sendContractTransaction](ModuleWithRoles#sendcontracttransaction)

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L306)

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

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sendTransaction](ModuleWithRoles#sendtransaction)

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L295)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `rolesWithAddresses` | [`SetAllRoles`](../modules#setallroles) | A record of [Role](../modules#role)s to lists of addresses that should be members of the given role. |

#### Returns

`Promise`<`any`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setAllRoleMembers](ModuleWithRoles#setallrolemembers)

#### Defined in

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L582)

___

### setMarketFeeBps

▸ **setMarketFeeBps**(`fee`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fee` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/market.ts:375](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L375)

___

### setMetadata

▸ **setMetadata**(`metadata`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The metadata to set. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setMetadata](ModuleWithRoles#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L160)

___

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/market.ts:368](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L368)

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

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setProviderOrSigner](ModuleWithRoles#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L172)

___

### setRestrictedListerRoleOnly

▸ **setRestrictedListerRoleOnly**(`restricted`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `restricted` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/market.ts:323](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L323)

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

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[signTypedData](ModuleWithRoles#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L415)

___

### transformResultToListing

▸ `Private` **transformResultToListing**(`listing`): `Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listing` | `any` |

#### Returns

`Promise`<[`ListingMetadata`](../interfaces/ListingMetadata)\>

#### Defined in

[src/modules/market.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L93)

___

### unlist

▸ **unlist**(`listingId`, `quantity`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `string` |
| `quantity` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/market.ts:319](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L319)

___

### unlistAll

▸ **unlistAll**(`listingId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/market.ts:314](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/market.ts#L314)
