---
id: "BundleDropModule"
title: "Class: BundleDropModule"
sidebar_label: "BundleDropModule"
sidebar_position: 0
custom_edit_url: null
---

Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getBundleDropModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`BundleDrop`\>

  ↳ **`BundleDropModule`**

## Implements

- [`ITransferable`](../interfaces/ITransferable)

## Constructors

### constructor

• **new BundleDropModule**(`providerOrSigner`, `address`, `options`, `sdk`)

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

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L509)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L45)

___

### contract

• **contract**: `LazyMintERC1155`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[contract](ModuleWithRoles#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L93)

___

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[ipfsGatewayUrl](ModuleWithRoles#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L50)

___

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[options](ModuleWithRoles#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L55)

___

### readOnlyContract

• **readOnlyContract**: `LazyMintERC1155`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[readOnlyContract](ModuleWithRoles#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L98)

___

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sdk](ModuleWithRoles#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L57)

___

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.BUNDLE_DROP`

#### Defined in

[src/modules/bundleDrop.ts:72](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L72)

___

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[src/modules/bundleDrop.ts:74](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L74)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L66)

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

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L70)

___

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

ModuleWithRoles.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L504)

___

### signer

• `Protected` `get` **signer**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L81)

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

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L85)

## Methods

### balance

▸ **balance**(`tokenId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/bundleDrop.ts:262](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L262)

___

### balanceOf

▸ **balanceOf**(`address`, `tokenId`): `Promise`<`BigNumber`\>

Get NFT Balance

**`remarks`** Get a wallets NFT balance (number of a specific NFT in this module owned by the wallet).

**`example`**
```javascript
// Address of the wallet to check NFT balance
const address = "{{wallet_address}}";
// The token ID of the NFT you want to check the wallets balance of
const tokenId = "0"

const balance = await module.balanceOf(address, tokenId);
console.log(balance);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/bundleDrop.ts:255](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L255)

___

### burn

▸ **burn**(`tokenId`, `amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:662](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L662)

___

### canClaim

▸ **canClaim**(`tokenId`, `quantity`, `addressToCheck?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `quantity` | `BigNumberish` |
| `addressToCheck?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/bundleDrop.ts:893](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L893)

___

### claim

▸ **claim**(`tokenId`, `quantity`, `proofs?`): `Promise`<`void`\>

Claim a token to yourself

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | Id of the token you want to claim |
| `quantity` | `BigNumberish` | Quantity of the tokens you want to claim |
| `proofs` | `BytesLike`[] | Array of proofs |

#### Returns

`Promise`<`void`\>

- Receipt for the transaction

#### Defined in

[src/modules/bundleDrop.ts:591](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L591)

___

### claimTo

▸ **claimTo**(`tokenId`, `quantity`, `addressToClaim`, `proofs?`): `Promise`<`TransactionReceipt`\>

Claim NFTs to Wallet

**`remarks`** Let the a specified wallet claim NFTs.

**`example`**
```javascript
// Address of the wallet you want to claim the NFTs
const address = "{{wallet_address}}";

// The number of NFTs to claim
const quantity = 1;

// The token ID of the NFT you want to claim
const tokenId = "0"

await module.claimTo(tokenId, quantity, address);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | Id of the token you want to claim |
| `quantity` | `BigNumberish` | Quantity of the tokens you want to claim |
| `addressToClaim` | `string` | Address you want to send the token to |
| `proofs` | `BytesLike`[] | Array of proofs |

#### Returns

`Promise`<`TransactionReceipt`\>

- Receipt for the transaction

#### Defined in

[src/modules/bundleDrop.ts:631](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L631)

___

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[clearSigner](ModuleWithRoles#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L188)

___

### connectContract

▸ `Protected` **connectContract**(): `LazyMintERC1155`

**`internal`**

#### Returns

`LazyMintERC1155`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/bundleDrop.ts:91](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L91)

___

### createBatch

▸ **createBatch**(`metadatas`): `Promise`<`string`[]\>

Create Many NFTs

**`remarks`** Create and mint NFTs.

**`example`**
```javascript
// Custom metadata of the NFTs to create
const metadatas = [{
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}];

await module.createBatch(metadatas);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/modules/bundleDrop.ts:303](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L303)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[exists](ModuleWithRoles#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L126)

___

### get

▸ **get**(`tokenId`): `Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |

#### Returns

`Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)\>

#### Defined in

[src/modules/bundleDrop.ts:139](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L139)

___

### getActiveClaimCondition

▸ **getActiveClaimCondition**(`tokenId`): `Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Defined in

[src/modules/bundleDrop.ts:200](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L200)

___

### getAll

▸ **getAll**(): `Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)[]\>

Get NFT Data

**`remarks`** Get data associated with NFTs in this module.

**`example`**
```javascript
// Get data associated with every NFT in the module
const nfts = await module.getAll();
console.log(nfts);
```

#### Returns

`Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/bundleDrop.ts:165](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L165)

___

### getAllClaimConditions

▸ **getAllClaimConditions**(`tokenId`): `Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)[]\>

#### Defined in

[src/modules/bundleDrop.ts:211](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L211)

___

### getAllClaimerAddresses

▸ **getAllClaimerAddresses**(`tokenId`): `Promise`<`string`[]\>

Pulls the list of all addresses that have claimed a particular token

**`beta`** - This can be very slow for large numbers of token holders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | The token id to get the claimers of |

#### Returns

`Promise`<`string`[]\>

- A unique list of addresses that claimed the token

#### Defined in

[src/modules/bundleDrop.ts:767](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L767)

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

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L556)

___

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getCallOverrides](ModuleWithRoles#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L261)

___

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getChainID](ModuleWithRoles#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L235)

___

### getClaimConditionFactory

▸ **getClaimConditionFactory**(): [`ClaimConditionFactory`](ClaimConditionFactory)

Creates a claim condition factory

#### Returns

[`ClaimConditionFactory`](ClaimConditionFactory)

- A new claim condition factory

#### Defined in

[src/modules/bundleDrop.ts:490](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L490)

___

### getClaimConditionsFactory

▸ **getClaimConditionsFactory**(): [`ClaimConditionFactory`](ClaimConditionFactory)

#### Returns

[`ClaimConditionFactory`](ClaimConditionFactory)

#### Defined in

[src/modules/bundleDrop.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L743)

___

### getClaimIneligibilityReasons

▸ **getClaimIneligibilityReasons**(`tokenId`, `quantity`, `addressToCheck?`): `Promise`<[`ClaimEligibility`](../enums/ClaimEligibility)[]\>

For any claim conditions that a particular wallet is violating,
this function returns human readable information about the
breaks in the condition that can be used to inform the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | The token id that would be claimed. |
| `quantity` | `BigNumberish` | The desired quantity that would be claimed. |
| `addressToCheck?` | `string` | The address that would be claiming the token. |

#### Returns

`Promise`<[`ClaimEligibility`](../enums/ClaimEligibility)[]\>

#### Defined in

[src/modules/bundleDrop.ts:785](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L785)

___

### getClaimerProofs

▸ `Private` **getClaimerProofs**(`merkleRoot`, `addressToClaim?`): `Promise`<`string`[]\>

Fetches the proof for the current signer for a particular wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `merkleRoot` | `string` | The merkle root of the condition to check. |
| `addressToClaim?` | `string` | - |

#### Returns

`Promise`<`string`[]\>

- The proof for the current signer for the specified condition.

#### Defined in

[src/modules/bundleDrop.ts:918](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L918)

___

### getDefaultSaleRecipient

▸ **getDefaultSaleRecipient**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/bundleDrop.ts:227](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L227)

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

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L138)

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

[src/modules/bundleDrop.ts:84](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L84)

___

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/bundleDrop.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L98)

___

### getOwned

▸ **getOwned**(`_address?`): `Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)[]\>

`getOwned` is a convenience method for getting all owned tokens
for a particular wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_address?` | `string` | The address to check for token ownership |

#### Returns

`Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)[]\>

An array of BundleMetadata objects that are owned by the address

#### Defined in

[src/modules/bundleDrop.ts:179](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L179)

___

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getProvider](ModuleWithRoles#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L228)

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

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L532)

___

### getRoyaltyBps

▸ **getRoyaltyBps**(): `Promise`<`BigNumberish`\>

Gets the royalty BPS (basis points) of the contract

#### Returns

`Promise`<`BigNumberish`\>

- The royalty BPS

#### Defined in

[src/modules/bundleDrop.ts:726](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L726)

___

### getRoyaltyRecipientAddress

▸ **getRoyaltyRecipientAddress**(): `Promise`<`string`\>

Gets the address of the royalty recipient

#### Returns

`Promise`<`string`\>

- The royalty BPS

#### Defined in

[src/modules/bundleDrop.ts:735](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L735)

___

### getSaleRecipient

▸ **getSaleRecipient**(`tokenId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/bundleDrop.ts:231](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L231)

___

### getSigner

▸ `Protected` **getSigner**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSigner](ModuleWithRoles#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L202)

___

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSignerAddress](ModuleWithRoles#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L219)

___

### getTokenMetadata

▸ `Private` **getTokenMetadata**(`tokenId`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Defined in

[src/modules/bundleDrop.ts:131](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L131)

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

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L680)

___

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[hasValidSigner](ModuleWithRoles#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L212)

___

### isApproved

▸ **isApproved**(`address`, `operator`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `operator` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/bundleDrop.ts:265](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L265)

___

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Returns true if transfers are restricted. Otherwise returns false.

#### Returns

`Promise`<`boolean`\>

- True if transfers are restricted.

#### Implementation of

[ITransferable](../interfaces/ITransferable).[isTransferRestricted](../interfaces/ITransferable#istransferrestricted)

#### Defined in

[src/modules/bundleDrop.ts:943](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L943)

___

### lazyMintBatch

▸ **lazyMintBatch**(`metadatas`): `Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<[`BundleDropMetadata`](../interfaces/BundleDropMetadata)[]\>

#### Defined in

[src/modules/bundleDrop.ts:275](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L275)

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

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L793)

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

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L452)

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

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L471)

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

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L779)

___

### prepareClaim

▸ `Private` **prepareClaim**(`tokenId`, `quantity`, `proofs?`): `Promise`<{ `overrides`: `CallOverrides` ; `proofs`: `BytesLike`[]  }\>

Returns proofs and the overrides required for the transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `quantity` | `BigNumberish` |
| `proofs` | `BytesLike`[] |

#### Returns

`Promise`<{ `overrides`: `CallOverrides` ; `proofs`: `BytesLike`[]  }\>

- `overrides` and `proofs` as an object.

#### Defined in

[src/modules/bundleDrop.ts:523](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L523)

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

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L743)

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

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L641)

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

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L712)

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

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L306)

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

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L295)

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

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L582)

___

### setApproval

▸ **setApproval**(`operator`, `approved?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `operator` | `string` | `undefined` |
| `approved` | `boolean` | `true` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:336](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L336)

___

### setClaimCondition

▸ **setClaimCondition**(`tokenId`, `factory`): `Promise`<`TransactionReceipt`\>

Sets public claim conditions for the next minting using the
claim condition factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | - |
| `factory` | [`ClaimConditionFactory`](ClaimConditionFactory) | The claim condition factory. |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:387](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L387)

___

### setDefaultSaleRecipient

▸ **setDefaultSaleRecipient**(`recipient`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:330](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L330)

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

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L160)

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

[src/modules/bundleDrop.ts:687](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L687)

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

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L172)

___

### setPublicClaimConditions

▸ **setPublicClaimConditions**(`tokenId`, `conditions`): `Promise`<`void`\>

**`deprecated`** - Use the ClaimConditionFactory instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `conditions` | [`BundleDropCreateClaimCondition`](../interfaces/BundleDropCreateClaimCondition)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundleDrop.ts:499](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L499)

___

### setRestrictedTransfer

▸ **setRestrictedTransfer**(`restricted?`): `Promise`<`TransactionReceipt`\>

Setter for transfer restriction.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `restricted` | `boolean` | `false` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Implementation of

[ITransferable](../interfaces/ITransferable).[setRestrictedTransfer](../interfaces/ITransferable#setrestrictedtransfer)

#### Defined in

[src/modules/bundleDrop.ts:947](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L947)

___

### setRoyaltyBps

▸ **setRoyaltyBps**(`amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:694](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L694)

___

### setSaleRecipient

▸ **setSaleRecipient**(`tokenId`, `recipient`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `recipient` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:323](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L323)

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

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L415)

___

### totalSupply

▸ **totalSupply**(`tokenId`): `Promise`<`BigNumber`\>

Returns the total supply of a specific token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | The token ID to get the total supply of |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/bundleDrop.ts:755](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L755)

___

### transfer

▸ **transfer**(`to`, `tokenId`, `amount`, `data?`): `Promise`<`TransactionReceipt`\>

Transfer NFT

**`remarks`** Transfer an NFT from the connected wallet to another wallet.

**`example`**
```javascript
// Address of the wallet you want to send the NFT to
const toAddress = "0x...";

// The token ID of the NFT you want to send
const tokenId = "0";

// The number of NFTs you want to send
const amount = 1;

await module.transfer(toAddress, tokenId, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:365](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L365)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `tokenId`, `amount`, `data?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:670](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L670)

___

### transformResultToClaimCondition

▸ `Private` **transformResultToClaimCondition**(`pm`): `Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pm` | `ClaimConditionStruct` |

#### Returns

`Promise`<[`ClaimCondition`](../interfaces/ClaimCondition)\>

#### Defined in

[src/modules/bundleDrop.ts:102](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L102)

___

### updateClaimConditions

▸ **updateClaimConditions**(`tokenId`, `factory`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `factory` | [`ClaimConditionFactory`](ClaimConditionFactory) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundleDrop.ts:437](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/bundleDrop.ts#L437)
