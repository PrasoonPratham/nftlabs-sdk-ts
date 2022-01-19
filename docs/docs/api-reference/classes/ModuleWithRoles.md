---
id: "ModuleWithRoles"
title: "Class: ModuleWithRoles<TContract>"
sidebar_label: "ModuleWithRoles"
sidebar_position: 0
custom_edit_url: null
---

Extends the [Module](Module) class to add [Role](../modules#role) functionality.

## Type parameters

| Name        | Type                                                          |
| :---------- | :------------------------------------------------------------ |
| `TContract` | extends `AccessControlEnumerable` = `AccessControlEnumerable` |

## Hierarchy

- [`Module`](Module)<`TContract`\>

  ↳ **`ModuleWithRoles`**

  ↳↳ [`AppModule`](AppModule)

  ↳↳ [`BundleModule`](BundleModule)

  ↳↳ [`BundleDropModule`](BundleDropModule)

  ↳↳ [`DatastoreModule`](DatastoreModule)

  ↳↳ [`DropModule`](DropModule)

  ↳↳ [`MarketModule`](MarketModule)

  ↳↳ [`MarketplaceModule`](MarketplaceModule)

  ↳↳ [`NFTModule`](NFTModule)

  ↳↳ [`PackModule`](PackModule)

  ↳↳ [`TokenModule`](TokenModule)

## Constructors

### constructor

• **new ModuleWithRoles**<`TContract`\>(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Type parameters

| Name        | Type                                                                        |
| :---------- | :-------------------------------------------------------------------------- |
| `TContract` | extends `AccessControlEnumerable`<`TContract`\> = `AccessControlEnumerable` |

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address`          | `string`                                          |
| `options`          | [`ISDKOptions`](../interfaces/ISDKOptions)        |
| `sdk`              | [`ThirdwebSDK`](ThirdwebSDK)                      |

#### Overrides

[Module](Module).[constructor](Module#constructor)

#### Defined in

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L509)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[Module](Module).[address](Module#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L45)

---

### contract

• **contract**: `TContract`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[Module](Module).[contract](Module#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L93)

---

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[Module](Module).[ipfsGatewayUrl](Module#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L50)

---

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[Module](Module).[options](Module#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L55)

---

### readOnlyContract

• **readOnlyContract**: `TContract`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[Module](Module).[readOnlyContract](Module#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L98)

---

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[Module](Module).[sdk](Module#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L57)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

Module.providerOrSigner

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

Module.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L70)

---

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L504)

---

### signer

• `Protected` `get` **signer**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

Module.signer

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

Module.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L85)

## Methods

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[Module](Module).[clearSigner](Module#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L188)

---

### connectContract

▸ `Protected` **connectContract**(): `TContract`

**`virtual`**

**`internal`**

#### Returns

`TContract`

#### Inherited from

[Module](Module).[connectContract](Module#connectcontract)

#### Defined in

[src/core/module.ts:246](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L246)

---

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[Module](Module).[exists](Module#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L126)

---

### getAllRoleMembers

▸ **getAllRoleMembers**(): `Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

Call this to get get a list of addresses for all supported roles on the module.

**`see`** [getRoleMembers](ModuleWithRoles#getrolemembers) to get a list of addresses that are members of a specific role.

**`throws`** If the module does not support roles this will throw an [InvariantError](InvariantError).

#### Returns

`Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

A record of [Role](../modules#role)s to lists of addresses that are members of the given role.

#### Defined in

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L556)

---

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[Module](Module).[getCallOverrides](Module#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L261)

---

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[Module](Module).[getChainID](Module#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L235)

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

[Module](Module).[getMetadata](Module#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L138)

---

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`virtual`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Defined in

[src/core/module.ts:497](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L497)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`virtual`**

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Inherited from

[Module](Module).[getModuleType](Module#getmoduletype)

#### Defined in

[src/core/module.ts:254](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L254)

---

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[Module](Module).[getProvider](Module#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L228)

---

### getRevokeRoleFunctionName

▸ `Private` **getRevokeRoleFunctionName**(`address`): `Promise`<`string`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/module.ts:727](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L727)

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

#### Defined in

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L532)

---

### getSigner

▸ `Protected` **getSigner**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

[Module](Module).[getSigner](Module#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L202)

---

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[Module](Module).[getSignerAddress](Module#getsigneraddress)

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

#### Defined in

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L680)

---

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[Module](Module).[hasValidSigner](Module#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L212)

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

[Module](Module).[parseEventLogs](Module#parseeventlogs)

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

[Module](Module).[parseLogs](Module#parselogs)

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

[Module](Module).[sendContractTransaction](Module#sendcontracttransaction)

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

[Module](Module).[sendTransaction](Module#sendtransaction)

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

#### Defined in

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L582)

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

[Module](Module).[setMetadata](Module#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L160)

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

[Module](Module).[setProviderOrSigner](Module#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L172)

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

[Module](Module).[signTypedData](Module#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L415)
