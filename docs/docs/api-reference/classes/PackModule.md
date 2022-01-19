---
id: "PackModule"
title: "Class: PackModule"
sidebar_label: "PackModule"
sidebar_position: 0
custom_edit_url: null
---

Create lootboxes of NFTs with rarity based open mechanics.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getPackModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`PackContract`\>

  ↳ **`PackModule`**

## Implements

- [`ITransferable`](../interfaces/ITransferable)

## Constructors

### constructor

• **new PackModule**(`providerOrSigner`, `address`, `options`, `sdk`)

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

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L45)

---

### contract

• **contract**: `Pack`

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

• **readOnlyContract**: `Pack`

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

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.PACK`

#### Defined in

[src/modules/pack.ts:101](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L101)

---

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"pauser"``, ``"transfer"``]

#### Defined in

[src/modules/pack.ts:103](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L103)

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

### balance

▸ **balance**(`tokenId`): `Promise`<`BigNumber`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tokenId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/pack.ts:290](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L290)

---

### balanceOf

▸ **balanceOf**(`address`, `tokenId`): `Promise`<`BigNumber`\>

Get Pack Balance

**`remarks`** Get a wallets pack balance (number of a specific packs in this module owned by the wallet).

**`example`**

```javascript
// Address of the wallet to check pack balance
const address = "{{wallet_address}}"";
// The token ID of the pack you want to check the wallets balance of
const tokenId = "0"

const balance = await module.balanceOf(address, tokenId);
console.log(balance);
```

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/pack.ts:286](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L286)

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

▸ `Protected` **connectContract**(): `Pack`

**`internal`**

#### Returns

`Pack`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/pack.ts:121](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L121)

---

### create

▸ **create**(`args`): `Promise`<[`PackMetadata`](../interfaces/PackMetadata)\>

Create Pack

**`remarks`** Create a new pack with its own rewards.

**`example`**

```javascript
// Data to create the pack
const pack = {
  // The address of the contract that holds the rewards you want to include
  assetContract: "0x...",
  // The metadata of the pack
  metadata: {
    name: "Cool Pack",
    description: "This is a cool pack",
    // This can be an image url or image file
    image: readFileSync("path/to/image.png")
  },
  // The NFTs you want to include in the pack
  assets: [
    {
      tokenId: 0, // The token ID of the asset you want to add
      amount: 1 // The amount of the asset you want to add
    },
    {
      tokenId: 1,
      amount: 1
    }
  ]
};

await module.create(pack);
```

#### Parameters

| Name   | Type                                               | Description                |
| :----- | :------------------------------------------------- | :------------------------- |
| `args` | [`IPackCreateArgs`](../interfaces/IPackCreateArgs) | Args for the pack creation |

#### Returns

`Promise`<[`PackMetadata`](../interfaces/PackMetadata)\>

- The newly created pack metadata

#### Defined in

[src/modules/pack.ts:368](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L368)

---

### depositLink

▸ **depositLink**(`amount`): `Promise`<`void`\>

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:449](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L449)

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

### get

▸ **get**(`packId`): `Promise`<[`PackMetadata`](../interfaces/PackMetadata)\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `packId` | `string` |

#### Returns

`Promise`<[`PackMetadata`](../interfaces/PackMetadata)\>

#### Defined in

[src/modules/pack.ts:190](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L190)

---

### getAll

▸ **getAll**(): `Promise`<[`PackMetadata`](../interfaces/PackMetadata)[]\>

Get Pack Data

**`remarks`** Get data associated with every pack in this module.

**`example`**

```javascript
const packs = await module.getAll();
console.log(packs);
```

#### Returns

`Promise`<[`PackMetadata`](../interfaces/PackMetadata)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/pack.ts:226](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L226)

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

### getLinkBalance

▸ **getLinkBalance**(): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Defined in

[src/modules/pack.ts:435](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L435)

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

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`override`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleRoles](ModuleWithRoles#getmoduleroles)

#### Defined in

[src/modules/pack.ts:114](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L114)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/pack.ts:128](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L128)

---

### getNFTs

▸ **getNFTs**(`packId`): `Promise`<[`PackNFTMetadata`](../interfaces/PackNFTMetadata)[]\>

Get Pack Reward Data

**`remarks`** Get data associated with the rewards inside a specified pack

**`example`**

```javascript
// The pack ID of the pack whos rewards you want to get
const packId = 0;

const nfts = await module.getNFTs(packId);
console.log(nfts);
```

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `packId` | `string` |

#### Returns

`Promise`<[`PackNFTMetadata`](../interfaces/PackNFTMetadata)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/pack.ts:249](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L249)

---

### getOwned

▸ **getOwned**(`_address?`): `Promise`<[`PackMetadataWithBalance`](../interfaces/PackMetadataWithBalance)[]\>

`getOwned` is a convenience method for getting all owned tokens
for a particular wallet.

#### Parameters

| Name        | Type     | Description                              |
| :---------- | :------- | :--------------------------------------- |
| `_address?` | `string` | The address to check for token ownership |

#### Returns

`Promise`<[`PackMetadataWithBalance`](../interfaces/PackMetadataWithBalance)[]\>

An array of PackMetadataWithBalance objects that are owned by the address

#### Defined in

[src/modules/pack.ts:580](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L580)

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

### getRoyaltyBps

▸ **getRoyaltyBps**(): `Promise`<`BigNumberish`\>

Gets the royalty BPS (basis points) of the contract

#### Returns

`Promise`<`BigNumberish`\>

- The royalty BPS

#### Defined in

[src/modules/pack.ts:545](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L545)

---

### getRoyaltyRecipientAddress

▸ **getRoyaltyRecipientAddress**(): `Promise`<`string`\>

Gets the address of the royalty recipient

#### Returns

`Promise`<`string`\>

- The royalty BPS

#### Defined in

[src/modules/pack.ts:554](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L554)

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

### isApproved

▸ **isApproved**(`address`, `operator`): `Promise`<`boolean`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `address`  | `string` |
| `operator` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/pack.ts:294](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L294)

---

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Returns true if transfers are restricted. Otherwise returns false.

#### Returns

`Promise`<`boolean`\>

- True if transfers are restricted.

#### Implementation of

[ITransferable](../interfaces/ITransferable).[isTransferRestricted](../interfaces/ITransferable#istransferrestricted)

#### Defined in

[src/modules/pack.ts:562](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L562)

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

### open

▸ **open**(`packId`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

Open Pack

**`remarks`** Open a pack to burn it and obtain the reward asset inside.

**`example`**

```javascript
// The pack ID of the asset you want to buy
const packId = "0";
const rewards = await module.open(packId);
console.log(rewards);
```

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `packId` | `string` |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Defined in

[src/modules/pack.ts:145](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L145)

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

### setApproval

▸ **setApproval**(`operator`, `approved?`): `Promise`<`void`\>

#### Parameters

| Name       | Type      | Default value |
| :--------- | :-------- | :------------ |
| `operator` | `string`  | `undefined`   |
| `approved` | `boolean` | `true`        |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:298](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L298)

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

▸ **setModuleMetadata**(`metadata`): `Promise`<`void`\>

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:535](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L535)

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

### setRestrictedTransfer

▸ **setRestrictedTransfer**(`restricted?`): `Promise`<`TransactionReceipt`\>

Setter for transfer restriction.

#### Parameters

| Name         | Type      | Default value |
| :----------- | :-------- | :------------ |
| `restricted` | `boolean` | `false`       |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Implementation of

[ITransferable](../interfaces/ITransferable).[setRestrictedTransfer](../interfaces/ITransferable#setrestrictedtransfer)

#### Defined in

[src/modules/pack.ts:566](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L566)

---

### setRoyaltyBps

▸ **setRoyaltyBps**(`amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `amount` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/pack.ts:508](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L508)

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

### transfer

▸ **transfer**(`to`, `tokenId`, `amount`): `Promise`<`void`\>

Transfer Pack

**`remarks`** Transfer a pack from the connected wallet to another wallet.

**`example`**

```javascript
// Address of the wallet you want to send the pack to
const toAddress = "0x...";

// The token ID of the pack you want to send
const tokenId = "0";

// The number of packs you want to send
const amount = 1;

await module.transfer(toAddress, tokenId, amount);
```

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `to`      | `string`    |
| `tokenId` | `string`    |
| `amount`  | `BigNumber` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:321](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L321)

---

### transferBatchFrom

▸ **transferBatchFrom**(`from`, `to`, `args`, `data?`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                               |
| :----- | :------------------------------------------------- |
| `from` | `string`                                           |
| `to`   | `string`                                           |
| `args` | [`IPackBatchArgs`](../interfaces/IPackBatchArgs)[] |
| `data` | `BytesLike`                                        |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:418](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L418)

---

### transferFrom

▸ **transferFrom**(`from`, `to`, `args`, `data?`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                             |
| :----- | :----------------------------------------------- |
| `from` | `string`                                         |
| `to`   | `string`                                         |
| `args` | [`IPackBatchArgs`](../interfaces/IPackBatchArgs) |
| `data` | `BytesLike`                                      |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:403](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L403)

---

### withdrawLink

▸ **withdrawLink**(`to`, `amount`): `Promise`<`void`\>

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `to`     | `string`       |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/pack.ts:465](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/pack.ts#L465)
