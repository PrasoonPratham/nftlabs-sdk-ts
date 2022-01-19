---
id: "BundleModule"
title: "Class: BundleModule"
sidebar_label: "BundleModule"
sidebar_position: 0
custom_edit_url: null
---

Create a collection of NFTs that lets you optionally mint multiple copies of each NFT.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getBundleModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`NFTBundleContract`\>

  ↳ **`BundleModule`**

## Implements

- [`ITransferable`](../interfaces/ITransferable)

## Constructors

### constructor

• **new BundleModule**(`providerOrSigner`, `address`, `options`, `sdk`)

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

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L509)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L45)

___

### contract

• **contract**: `NFTCollection`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[contract](ModuleWithRoles#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L93)

___

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[ipfsGatewayUrl](ModuleWithRoles#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L50)

___

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[options](ModuleWithRoles#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L55)

___

### readOnlyContract

• **readOnlyContract**: `NFTCollection`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[readOnlyContract](ModuleWithRoles#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L98)

___

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sdk](ModuleWithRoles#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L57)

___

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.BUNDLE`

#### Defined in

[src/modules/bundle.ts:83](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L83)

___

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"pauser"``, ``"transfer"``]

#### Defined in

[src/modules/bundle.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L85)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L66)

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

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L70)

___

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

ModuleWithRoles.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L504)

___

### signer

• `Protected` `get` **signer**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L81)

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

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L85)

## Methods

### balance

▸ **balance**(`tokenId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/bundle.ts:184](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L184)

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
| `tokenId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/bundle.ts:180](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L180)

___

### burn

▸ **burn**(`args`): `Promise`<`TransactionReceipt`\>

Burn NFT

**`remarks`** Burn an NFT, permanently taking it out of circulation and reducing the supply.

**`example`**
```javascript
// The token ID of the NFT you want to burn
const tokenId = 0;
// The number of specified NFTs you want to burn
const amount = 1

await module.burn({ tokenId, amount });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:465](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L465)

___

### burnBatch

▸ **burnBatch**(`args`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs)[] |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:469](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L469)

___

### burnBatchFrom

▸ **burnBatchFrom**(`account`, `args`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs)[] |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:486](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L486)

___

### burnFrom

▸ **burnFrom**(`account`, `args`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:475](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L475)

___

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[clearSigner](ModuleWithRoles#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L188)

___

### connectContract

▸ `Protected` **connectContract**(): `NFTCollection`

**`internal`**

#### Returns

`NFTCollection`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/bundle.ts:103](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L103)

___

### create

▸ **create**(`metadata`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)\>

#### Defined in

[src/modules/bundle.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L261)

___

### createAndMint

▸ **createAndMint**(`metadataWithSupply`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)\>

Mint NFT

**`remarks`** Mint an NFT with a specified supply.

**`example`**
```javascript
// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}

const metadataWithSupply = {
  metadata,
  supply: 1, // The number of this NFT you want to mint
}

await module.createAndMint(metadataWithSupply);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadataWithSupply` | [`INFTBundleCreateArgs`](../interfaces/INFTBundleCreateArgs) |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)\>

#### Defined in

[src/modules/bundle.ts:297](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L297)

___

### createAndMintBatch

▸ **createAndMintBatch**(`metadataWithSupply`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

Mint Many NFTs

**`remarks`** Mint many different NFTs with specified supplies.

**`example`**
```javascript
// Custom metadata and supplies of your NFTs
const metadataWithSupply = [{
  supply: 1, // The number of this NFT you want to mint
  metadata: {
    name: "Cool NFT #1",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
}, {
  supply: 1,
  metadata: {
    name: "Cool NFT #2",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
}];

await module.createAndMintBatch(metadataWithSupply);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadataWithSupply` | [`INFTBundleCreateArgs`](../interfaces/INFTBundleCreateArgs)[] |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

#### Defined in

[src/modules/bundle.ts:330](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L330)

___

### createBatch

▸ **createBatch**(`metadatas`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

#### Defined in

[src/modules/bundle.ts:265](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L265)

___

### createWithERC721

▸ **createWithERC721**(`tokenContract`, `tokenId`, `metadata`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenContract` | `string` |
| `tokenId` | `BigNumberish` |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:416](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L416)

___

### createWithErc20

▸ **createWithErc20**(`tokenContract`, `tokenAmount`, `args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenContract` | `string` |
| `tokenAmount` | `BigNumberish` |
| `args` | [`INFTBundleCreateArgs`](../interfaces/INFTBundleCreateArgs) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:373](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L373)

___

### createWithNFT

▸ **createWithNFT**(`tokenContract`, `tokenId`, `metadata`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenContract` | `string` |
| `tokenId` | `BigNumberish` |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:381](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L381)

___

### createWithToken

▸ **createWithToken**(`tokenContract`, `tokenAmount`, `args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenContract` | `string` |
| `tokenAmount` | `BigNumberish` |
| `args` | [`INFTBundleCreateArgs`](../interfaces/INFTBundleCreateArgs) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:352](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L352)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[exists](ModuleWithRoles#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L126)

___

### get

▸ **get**(`tokenId`, `address?`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)\>

Get a single bundle item by tokenId.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | the unique token id of the nft |
| `address?` | `string` | - |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)\>

A promise that resolves to a `BundleMetadata`.

#### Defined in

[src/modules/bundle.ts:120](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L120)

___

### getAll

▸ **getAll**(`address?`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

Get NFT Data

**`remarks`** Get data associated with NFTs in this module.

**`example`**
```javascript
// You can get every NFT in the module
const nfts = await module.getAll();
console.log(nfts);

// Or you can get optionally get the NFTs owned by a specific wallet
const address = "{{wallet_address}}"; // The address you want to get the NFTs for;
const ownedNfts = await module.getAll(address);
console.log(ownedNfts);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/bundle.ts:157](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L157)

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

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L556)

___

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getCallOverrides](ModuleWithRoles#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L261)

___

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getChainID](ModuleWithRoles#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L235)

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

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L138)

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

[src/modules/bundle.ts:96](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L96)

___

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/bundle.ts:110](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L110)

___

### getOwned

▸ **getOwned**(`_address?`): `Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

`getOwned` is a convenience method for getting all owned tokens
for a particular wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_address?` | `string` | The address to check for token ownership |

#### Returns

`Promise`<[`BundleMetadata`](../interfaces/BundleMetadata)[]\>

An array of BundleMetadata objects that are owned by the address

#### Defined in

[src/modules/bundle.ts:594](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L594)

___

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getProvider](ModuleWithRoles#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L228)

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

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L532)

___

### getRoyaltyBps

▸ **getRoyaltyBps**(): `Promise`<`BigNumberish`\>

Gets the royalty BPS (basis points) of the contract

#### Returns

`Promise`<`BigNumberish`\>

- The royalty BPS

#### Defined in

[src/modules/bundle.ts:623](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L623)

___

### getRoyaltyRecipientAddress

▸ **getRoyaltyRecipientAddress**(): `Promise`<`string`\>

Gets the address of the royalty recipient

#### Returns

`Promise`<`string`\>

- The royalty BPS

#### Defined in

[src/modules/bundle.ts:632](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L632)

___

### getSigner

▸ `Protected` **getSigner**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSigner](ModuleWithRoles#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L202)

___

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSignerAddress](ModuleWithRoles#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L219)

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

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L680)

___

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[hasValidSigner](ModuleWithRoles#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L212)

___

### isApproved

▸ **isApproved**(`address`, `operator`, `assetContract?`, `assetId?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `operator` | `string` |
| `assetContract?` | `string` |
| `assetId?` | `BigNumberish` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/bundle.ts:191](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L191)

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

[src/modules/bundle.ts:640](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L640)

___

### mint

▸ **mint**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:424](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L424)

___

### mintBatch

▸ **mintBatch**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:436](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L436)

___

### mintBatchTo

▸ **mintBatchTo**(`to`, `args`, `data?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs)[] |
| `data` | `BytesLike` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:440](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L440)

___

### mintTo

▸ **mintTo**(`to`, `args`, `data?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs) |
| `data` | `BytesLike` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/bundle.ts:428](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L428)

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

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L793)

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

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L452)

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

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L471)

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

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L779)

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

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L743)

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

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L641)

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

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L712)

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

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L306)

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

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L295)

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

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L582)

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

[src/modules/bundle.ts:218](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L218)

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

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L160)

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

[src/modules/bundle.ts:580](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L580)

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

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L172)

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

[src/modules/bundle.ts:644](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L644)

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

[src/modules/bundle.ts:553](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L553)

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

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/core/module.ts#L415)

___

### transfer

▸ **transfer**(`to`, `tokenId`, `amount`): `Promise`<`TransactionReceipt`\>

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
| `tokenId` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:247](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L247)

___

### transferBatchFrom

▸ **transferBatchFrom**(`from`, `to`, `args`, `data?`): `Promise`<`TransactionReceipt`\>

Transfer Many NFTs

**`remarks`** Transfer NFTs from the one wallet to another.

**`example`**
```javascript
// Address of the wallet to send the NFT from
const fromAddress = "{{wallet_address}}";
// Address of the wallet you want to send the NFT to
const toAddress = "0x...";

// The data of the NFTs you want to send
const data = [{
  tokenId: 1, // The token ID of the NFT you want to send
  amount: 1, // The number of this NFT you want to send
}, {
  tokenId: 2,
  amount: 1,
}]

// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await module.transferBatchFrom(fromAddress, toAddress, data);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs)[] |
| `data` | `BytesLike` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:536](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L536)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `args`, `data?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `args` | [`INFTBundleBatchArgs`](../interfaces/INFTBundleBatchArgs) |
| `data` | `BytesLike` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:495](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L495)

___

### unwrapNFT

▸ **unwrapNFT**(`tokenId`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:406](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L406)

___

### unwrapToken

▸ **unwrapToken**(`tokenId`, `amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/bundle.ts:409](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/modules/bundle.ts#L409)
