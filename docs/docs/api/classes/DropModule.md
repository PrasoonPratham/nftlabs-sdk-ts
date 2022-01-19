---
id: "DropModule"
title: "Class: DropModule"
sidebar_label: "DropModule"
sidebar_position: 0
custom_edit_url: null
---

Setup a collection of one-of-one NFTs that are minted as users claim them.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getDropModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`DropV2`\>

  ↳ **`DropModule`**

## Implements

- [`ITransferable`](../interfaces/ITransferable)

## Constructors

### constructor

• **new DropModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address`          | `string`                                          |
| `options`          | [`ISDKOptions`](../interfaces/ISDKOptions)        |
| `sdk`              | [`ThirdwebSDK`](ThirdwebSDK)                      |

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[constructor](ModuleWithRoles#constructor)

#### Defined in

[src/modules/drop.ts:88](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L88)

## Properties

### \_isV1

• `Private` **\_isV1**: `boolean` = `false`

#### Defined in

[src/modules/drop.ts:74](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L74)

---

### \_shouldCheckVersion

• `Private` **\_shouldCheckVersion**: `boolean` = `true`

#### Defined in

[src/modules/drop.ts:73](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L73)

---

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L45)

---

### contract

• **contract**: `LazyMintERC721`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[contract](ModuleWithRoles#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L93)

---

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[ipfsGatewayUrl](ModuleWithRoles#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L50)

---

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[options](ModuleWithRoles#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L55)

---

### readOnlyContract

• **readOnlyContract**: `LazyMintERC721`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[readOnlyContract](ModuleWithRoles#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L98)

---

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sdk](ModuleWithRoles#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L57)

---

### v1Module

• `Private` **v1Module**: `DropV1Module`

#### Defined in

[src/modules/drop.ts:75](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L75)

---

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.DROP`

#### Defined in

[src/modules/drop.ts:77](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L77)

---

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[src/modules/drop.ts:79](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L79)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L66)

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

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L70)

---

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

ModuleWithRoles.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L504)

---

### signer

• `Protected` `get` **signer**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L81)

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

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L85)

## Methods

### balance

▸ **balance**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/drop.ts:424](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L424)

---

### balanceOf

▸ **balanceOf**(`address`): `Promise`<`BigNumber`\>

Get NFT Balance

**`remarks`** Get a wallets NFT balance (number of NFTs in this module owned by the wallet).

**`example`**

```javascript
// Address of the wallet to check NFT balance
const address = "{{wallet_address}}";

const balance = await module.balanceOf(address);
console.log(balance);
```

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/drop.ts:420](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L420)

---

### burn

▸ **burn**(`tokenId`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:925](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L925)

---

### canClaim

▸ **canClaim**(`quantity`, `addressToCheck?`): `Promise`<`boolean`\>

Can Claim

**`remarks`** Check if the drop can currently be claimed.

**`example`**

```javascript
// Quantity of tokens to check if they are claimable
const quantity = 1;

await module.canClaim(quantity);
```

#### Parameters

| Name              | Type           |
| :---------------- | :------------- |
| `quantity`        | `BigNumberish` |
| `addressToCheck?` | `string`       |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/drop.ts:761](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L761)

---

### canCreateBatch

▸ **canCreateBatch**(): `Promise`<`boolean`\>

**`internal`**

#### Returns

`Promise`<`boolean`\>

- True if the batch has been created, false otherwise.

#### Defined in

[src/modules/drop.ts:1031](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L1031)

---

### claim

▸ **claim**(`quantity`, `proofs?`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

Claim NFTs

#### Parameters

| Name       | Type           | Description                              |
| :--------- | :------------- | :--------------------------------------- |
| `quantity` | `BigNumberish` | Quantity of the tokens you want to claim |
| `proofs`   | `BytesLike`[]  | Array of proofs                          |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

- Receipt for the transaction

#### Defined in

[src/modules/drop.ts:901](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L901)

---

### claimTo

▸ **claimTo**(`quantity`, `addressToClaim`, `proofs?`): `Promise`<`TransactionReceipt`\>

Claim NFTs to Wallet

**`remarks`** Let the a specified wallet claim NFTs.

**`example`**

```javascript
// Address of the wallet you want to claim the NFTs
const address = "{{wallet_address}}";

// The number of NFTs to claim
const quantity = 1;

await module.claimTo(quantity, address);
```

#### Parameters

| Name             | Type           | Description                              |
| :--------------- | :------------- | :--------------------------------------- |
| `quantity`       | `BigNumberish` | Quantity of the tokens you want to claim |
| `addressToClaim` | `string`       | Address you want to send the token to    |
| `proofs`         | `BytesLike`[]  | Array of proofs                          |

#### Returns

`Promise`<`TransactionReceipt`\>

- Receipt for the transaction

#### Defined in

[src/modules/drop.ts:867](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L867)

---

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[clearSigner](ModuleWithRoles#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L188)

---

### connectContract

▸ `Protected` **connectContract**(): `LazyMintERC721`

**`internal`**

#### Returns

`LazyMintERC721`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/drop.ts:117](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L117)

---

### createBatch

▸ **createBatch**(`metadatas`): `Promise`<`string`[]\>

Create batch allows you to create a batch of tokens
in one transaction. This function can only be called
once per module at the moment.

**`beta`**

#### Parameters

| Name        | Type                                                      | Description                           |
| :---------- | :-------------------------------------------------------- | :------------------------------------ |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | The metadata to include in the batch. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/drop.ts:1003](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L1003)

---

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[exists](ModuleWithRoles#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L126)

---

### get

▸ **get**(`tokenId`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tokenId` | `string` |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)\>

#### Defined in

[src/modules/drop.ts:136](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L136)

---

### getActiveClaimCondition

▸ **getActiveClaimCondition**(): `Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Returns

`Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Defined in

[src/modules/drop.ts:326](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L326)

---

### getActiveMintCondition

▸ **getActiveMintCondition**(): `Promise`<[`PublicMintCondition`](../interfaces/PublicMintCondition)\>

**`deprecated`** - Use [DropModule.getActiveClaimCondition](DropModule#getactiveclaimcondition) instead

#### Returns

`Promise`<[`PublicMintCondition`](../interfaces/PublicMintCondition)\>

#### Defined in

[src/modules/drop.ts:316](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L316)

---

### getAll

▸ **getAll**(`queryParams?`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

Get All NFTs

**`remarks`** Get all the data associated with every NFT in this module.

**`example`**

```javascript
const nfts = await module.getAll();
console.log(nfts);
```

#### Parameters

| Name           | Type             |
| :------------- | :--------------- |
| `queryParams?` | `QueryAllParams` |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/drop.ts:158](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L158)

---

### getAllClaimConditions

▸ **getAllClaimConditions**(): `Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)[]\>

#### Returns

`Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)[]\>

#### Defined in

[src/modules/drop.ts:358](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L358)

---

### getAllClaimed

▸ **getAllClaimed**(`queryParams?`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

#### Parameters

| Name           | Type             |
| :------------- | :--------------- |
| `queryParams?` | `QueryAllParams` |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

#### Defined in

[src/modules/drop.ts:206](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L206)

---

### getAllMintConditions

▸ **getAllMintConditions**(): `Promise`<[`PublicMintCondition`](../interfaces/PublicMintCondition)[]\>

**`deprecated`** - Use [DropModule.getAllClaimConditions](DropModule#getallclaimconditions) instead

#### Returns

`Promise`<[`PublicMintCondition`](../interfaces/PublicMintCondition)[]\>

#### Defined in

[src/modules/drop.ts:338](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L338)

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

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L556)

---

### getAllUnclaimed

▸ **getAllUnclaimed**(`queryParams?`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

#### Parameters

| Name           | Type             |
| :------------- | :--------------- |
| `queryParams?` | `QueryAllParams` |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

#### Defined in

[src/modules/drop.ts:180](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L180)

---

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getCallOverrides](ModuleWithRoles#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L261)

---

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getChainID](ModuleWithRoles#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L235)

---

### getClaimConditionsFactory

▸ **getClaimConditionsFactory**(): [`ClaimConditionFactory`](ClaimConditionFactory)

Creates a claim condition factory

#### Returns

[`ClaimConditionFactory`](ClaimConditionFactory)

- A new claim condition factory

#### Defined in

[src/modules/drop.ts:609](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L609)

---

### getClaimIneligibilityReasons

▸ **getClaimIneligibilityReasons**(`quantity`, `addressToCheck?`): `Promise`<[`ClaimEligibility`](../enums/ClaimEligibility)[]\>

For any claim conditions that a particular wallet is violating,
this function returns human readable information about the
breaks in the condition that can be used to inform the user.

#### Parameters

| Name              | Type           | Description                                 |
| :---------------- | :------------- | :------------------------------------------ |
| `quantity`        | `BigNumberish` | The desired quantity that would be claimed. |
| `addressToCheck?` | `string`       | -                                           |

#### Returns

`Promise`<[`ClaimEligibility`](../enums/ClaimEligibility)[]\>

#### Defined in

[src/modules/drop.ts:654](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L654)

---

### getClaimerProofs

▸ `Private` **getClaimerProofs**(`merkleRoot`, `addressToClaim?`): `Promise`<`string`[]\>

Fetches the proof for the current signer for a particular wallet.

#### Parameters

| Name              | Type     | Description                                |
| :---------------- | :------- | :----------------------------------------- |
| `merkleRoot`      | `string` | The merkle root of the condition to check. |
| `addressToClaim?` | `string` | -                                          |

#### Returns

`Promise`<`string`[]\>

- The proof for the current signer for the specified condition.

#### Defined in

[src/modules/drop.ts:1060](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L1060)

---

### getDefaultSaleRecipient

▸ **getDefaultSaleRecipient**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/drop.ts:229](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L229)

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

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L138)

---

### getMintConditionsFactory

▸ **getMintConditionsFactory**(): [`ClaimConditionFactory`](ClaimConditionFactory)

**`deprecated`** - Use the [DropModule.getClaimConditionsFactory](DropModule#getclaimconditionsfactory) instead.

#### Returns

[`ClaimConditionFactory`](ClaimConditionFactory)

#### Defined in

[src/modules/drop.ts:618](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L618)

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

[src/modules/drop.ts:110](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L110)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/drop.ts:124](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L124)

---

### getOwned

▸ **getOwned**(`_address?`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

Get Owned NFTs

**`remarks`** Get all the data associated with the NFTs owned by a specific wallet.

**`example`**

```javascript
// Address of the wallet to get the NFTs of
const address = "{{wallet_address}}";
const nfts = await module.getOwned(address);
console.log(nfts);
```

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `_address?` | `string` |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/drop.ts:254](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L254)

---

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getProvider](ModuleWithRoles#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L228)

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

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L532)

---

### getRoyaltyBps

▸ **getRoyaltyBps**(): `Promise`<`BigNumberish`\>

Gets the royalty BPS (basis points) of the contract

#### Returns

`Promise`<`BigNumberish`\>

- The royalty BPS

#### Defined in

[src/modules/drop.ts:977](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L977)

---

### getRoyaltyRecipientAddress

▸ **getRoyaltyRecipientAddress**(): `Promise`<`string`\>

Gets the address of the royalty recipient

#### Returns

`Promise`<`string`\>

- The royalty BPS

#### Defined in

[src/modules/drop.ts:986](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L986)

---

### getSigner

▸ `Protected` **getSigner**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSigner](ModuleWithRoles#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L202)

---

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSignerAddress](ModuleWithRoles#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L219)

---

### getTokenMetadata

▸ `Private` **getTokenMetadata**(`tokenId`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tokenId` | `string` |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Defined in

[src/modules/drop.ts:128](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L128)

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

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L680)

---

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[hasValidSigner](ModuleWithRoles#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L212)

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

[src/modules/drop.ts:428](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L428)

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

[src/modules/drop.ts:1086](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L1086)

---

### isV1

▸ **isV1**(): `Promise`<`boolean`\>

Check if contract is v1 or v2. If the contract doesn't have nextTokenIdToMint = v1 contract.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/drop.ts:1041](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L1041)

---

### lazyMint

▸ **lazyMint**(`metadata`): `Promise`<`void`\>

**`deprecated`** - The function has been deprecated. Use `createBatch` instead.

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/drop.ts:473](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L473)

---

### lazyMintBatch

▸ **lazyMintBatch**(`metadatas`): `Promise`<`void`\>

**`deprecated`** - The function has been deprecated. Use `mintBatch` instead.

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/drop.ts:484](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L484)

---

### maxTotalSupply

▸ **maxTotalSupply**(): `Promise`<`BigNumber`\>

**`internal`**

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/drop.ts:383](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L383)

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

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L793)

---

### ownerOf

▸ **ownerOf**(`tokenId`): `Promise`<`string`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tokenId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/drop.ts:225](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L225)

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

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L452)

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

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L471)

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

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L779)

---

### prepareClaim

▸ `Private` **prepareClaim**(`quantity`, `proofs?`): `Promise`<{ `overrides`: `CallOverrides` ; `proofs`: `BytesLike`[] }\>

Returns proofs and the overrides required for the transaction.

#### Parameters

| Name       | Type           |
| :--------- | :------------- |
| `quantity` | `BigNumberish` |
| `proofs`   | `BytesLike`[]  |

#### Returns

`Promise`<{ `overrides`: `CallOverrides` ; `proofs`: `BytesLike`[] }\>

- `overrides` and `proofs` as an object.

#### Defined in

[src/modules/drop.ts:783](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L783)

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

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L743)

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

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L641)

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

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L712)

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

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L306)

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

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L295)

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

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L582)

---

### setApproval

▸ **setApproval**(`operator`, `approved?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name       | Type      | Default value |
| :--------- | :-------- | :------------ |
| `operator` | `string`  | `undefined`   |
| `approved` | `boolean` | `true`        |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:433](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L433)

---

### setClaimConditions

▸ **setClaimConditions**(`factory`): `Promise`<`TransactionReceipt`\>

Sets public mint conditions for the next minting using the
claim condition factory.

#### Parameters

| Name      | Type                                             | Description                  |
| :-------- | :----------------------------------------------- | :--------------------------- |
| `factory` | [`ClaimConditionFactory`](ClaimConditionFactory) | The claim condition factory. |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:508](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L508)

---

### setDefaultSaleRecipient

▸ **setDefaultSaleRecipient**(`recipient`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `recipient` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:233](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L233)

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

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L160)

---

### setMintConditions

▸ **setMintConditions**(`factory`): `Promise`<`TransactionReceipt`\>

**`deprecated`** - Use [DropModule.setClaimConditions](DropModule#setclaimconditions) instead

#### Parameters

| Name      | Type                                             |
| :-------- | :----------------------------------------------- |
| `factory` | [`ClaimConditionFactory`](ClaimConditionFactory) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:495](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L495)

---

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:938](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L938)

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

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[setProviderOrSigner](ModuleWithRoles#setproviderorsigner)

#### Defined in

[src/modules/drop.ts:101](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L101)

---

### setPublicMintConditions

▸ **setPublicMintConditions**(`conditions`): `Promise`<`void`\>

**`deprecated`** - Use the [DropModule.setClaimConditions](DropModule#setclaimconditions) instead.

#### Parameters

| Name         | Type                                                                     |
| :----------- | :----------------------------------------------------------------------- |
| `conditions` | [`CreatePublicMintCondition`](../interfaces/CreatePublicMintCondition)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/drop.ts:625](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L625)

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

[src/modules/drop.ts:1090](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L1090)

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

[src/modules/drop.ts:945](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L945)

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

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L415)

---

### totalClaimedSupply

▸ **totalClaimedSupply**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/drop.ts:399](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L399)

---

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/drop.ts:373](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L373)

---

### totalUnclaimedSupply

▸ **totalUnclaimedSupply**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/drop.ts:390](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L390)

---

### transfer

▸ **transfer**(`to`, `tokenId`): `Promise`<`TransactionReceipt`\>

Transfer NFT

**`remarks`** Transfer an NFT from the connected wallet to another wallet.

**`example`**

```javascript
// Address of the wallet you want to send the NFT to
const toAddress = "{{wallet_address}}";

// The token ID of the NFT you want to send
const tokenId = "0";

await module.transfer(toAddress, tokenId);
```

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `to`      | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:459](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L459)

---

### transferFrom

▸ **transferFrom**(`from`, `to`, `tokenId`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `from`    | `string`       |
| `to`      | `string`       |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:929](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L929)

---

### transformResultToClaimCondition

▸ `Private` **transformResultToClaimCondition**(`pm`): `Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `pm` | `ClaimConditionStructOutput` |

#### Returns

`Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Defined in

[src/modules/drop.ts:284](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L284)

---

### transformResultToMintCondition

▸ `Private` **transformResultToMintCondition**(`pm`): [`PublicMintCondition`](../interfaces/PublicMintCondition)

**`deprecated`** - For backward compatibility reason

#### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `pm` | `ClaimConditionStructOutput` |

#### Returns

[`PublicMintCondition`](../interfaces/PublicMintCondition)

#### Defined in

[src/modules/drop.ts:269](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L269)

---

### updateClaimConditions

▸ **updateClaimConditions**(`factory`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name      | Type                                             |
| :-------- | :----------------------------------------------- |
| `factory` | [`ClaimConditionFactory`](ClaimConditionFactory) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/drop.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/drop.ts#L556)
