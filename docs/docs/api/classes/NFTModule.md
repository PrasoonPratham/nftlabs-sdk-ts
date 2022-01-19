---
id: "NFTModule"
title: "Class: NFTModule"
sidebar_label: "NFTModule"
sidebar_position: 0
custom_edit_url: null
---

Create a collection of one-of-one NFTs.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getNFTModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`SignatureMint721`\>

  ↳ **`NFTModule`**

## Implements

- [`ITransferable`](../interfaces/ITransferable)
- [`ISignatureMinter`](../interfaces/ISignatureMinter)

## Constructors

### constructor

• **new NFTModule**(`providerOrSigner`, `address`, `options`, `sdk`)

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

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L509)

## Properties

### \_isV1

• `Private` **\_isV1**: `boolean` = `false`

#### Defined in

[src/modules/nft.ts:95](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L95)

---

### \_shouldCheckVersion

• `Private` **\_shouldCheckVersion**: `boolean` = `true`

#### Defined in

[src/modules/nft.ts:94](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L94)

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

• **contract**: `SignatureMint721`

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

• **readOnlyContract**: `SignatureMint721`

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

### v1Contract

• `Private` `Optional` **v1Contract**: `NFT`

#### Defined in

[src/modules/nft.ts:96](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L96)

---

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.NFT`

#### Defined in

[src/modules/nft.ts:65](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L65)

---

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[src/modules/nft.ts:67](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L67)

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

### \_v1MintBatchTo

▸ `Private` **\_v1MintBatchTo**(`to`, `metadatas`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `to`        | `string`                                                  |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Defined in

[src/modules/nft.ts:370](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L370)

---

### \_v1MintTo

▸ `Private` **\_v1MintTo**(`to`, `metadata`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `to`       | `string`                                                |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Defined in

[src/modules/nft.ts:300](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L300)

---

### balance

▸ **balance**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/nft.ts:246](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L246)

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

The balance of the NFTs in the wallet

#### Defined in

[src/modules/nft.ts:242](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L242)

---

### burn

▸ **burn**(`tokenId`): `Promise`<`TransactionReceipt`\>

Burn NFT

**`remarks`** Burn an NFT, permanently taking it out of circulation and reducing the supply.

**`example`**

```javascript
// The token ID of the NFT you want to burn
const tokenId = 0;

await module.burn(tokenId);
```

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/nft.ts:466](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L466)

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

▸ `Protected` **connectContract**(): `SignatureMint721`

**`internal`**

#### Returns

`SignatureMint721`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/nft.ts:80](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L80)

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

### generateSignature

▸ **generateSignature**(`mintRequest`): `Promise`<{ `payload`: [`SignaturePayload`](../interfaces/SignaturePayload) ; `signature`: `string` }\>

Generates a signature. This should only be called
by wallets that have the `MINTER` role on the contract. Otherwise
their signature won't be valid.

#### Parameters

| Name          | Type                                                       |
| :------------ | :--------------------------------------------------------- |
| `mintRequest` | [`NewSignaturePayload`](../interfaces/NewSignaturePayload) |

#### Returns

`Promise`<{ `payload`: [`SignaturePayload`](../interfaces/SignaturePayload) ; `signature`: `string` }\>

- The payload (with the uri pre-populated) and signature.

#### Implementation of

[ISignatureMinter](../interfaces/ISignatureMinter).[generateSignature](../interfaces/ISignatureMinter#generatesignature)

#### Defined in

[src/modules/nft.ts:643](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L643)

---

### generateSignatureBatch

▸ **generateSignatureBatch**(`payloads`): `Promise`<{ `payload`: [`SignaturePayload`](../interfaces/SignaturePayload) ; `signature`: `string` }[]\>

Batch generation of signatures.

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `payloads` | [`NewSignaturePayload`](../interfaces/NewSignaturePayload)[] |

#### Returns

`Promise`<{ `payload`: [`SignaturePayload`](../interfaces/SignaturePayload) ; `signature`: `string` }[]\>

- The batch of payloads + signatures.

#### Implementation of

[ISignatureMinter](../interfaces/ISignatureMinter).[generateSignatureBatch](../interfaces/ISignatureMinter#generatesignaturebatch)

#### Defined in

[src/modules/nft.ts:586](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L586)

---

### get

▸ **get**(`tokenId`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

Fetches an NFT from storage with the resolved metadata.

#### Parameters

| Name      | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `tokenId` | `string` | The id of the token to fetch. |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

- The NFT metadata.

#### Defined in

[src/modules/nft.ts:124](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L124)

---

### getAll

▸ **getAll**(): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

Get All NFTs

**`remarks`** Get all the data associated with every NFT in this module.

**`example`**

```javascript
const nfts = await module.getAll();
console.log(nfts);
```

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

The NFT metadata for all NFTs in the module.

#### Defined in

[src/modules/nft.ts:149](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L149)

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

### getAllWithOwner

▸ **getAllWithOwner**(): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)[]\>

#### Defined in

[src/modules/nft.ts:170](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L170)

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

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleRoles](ModuleWithRoles#getmoduleroles)

#### Defined in

[src/modules/nft.ts:73](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L73)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/nft.ts:90](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L90)

---

### getOwned

▸ **getOwned**(`_address?`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

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

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Defined in

[src/modules/nft.ts:210](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L210)

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

[src/modules/nft.ts:517](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L517)

---

### getRoyaltyRecipientAddress

▸ **getRoyaltyRecipientAddress**(): `Promise`<`string`\>

Gets the address of the royalty recipient

#### Returns

`Promise`<`string`\>

- The royalty BPS

#### Defined in

[src/modules/nft.ts:526](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L526)

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

### getWithOwner

▸ **getWithOwner**(`tokenId`): `Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tokenId` | `string` |

#### Returns

`Promise`<[`NFTMetadataOwner`](../interfaces/NFTMetadataOwner)\>

#### Defined in

[src/modules/nft.ts:161](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L161)

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

[src/modules/nft.ts:250](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L250)

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

[src/modules/nft.ts:534](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L534)

---

### isV1

▸ **isV1**(): `Promise`<`boolean`\>

Check if contract is v1 or v2. If the contract doesn't have nextTokenIdToMint = v1 contract.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/nft.ts:101](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L101)

---

### mapPayload

▸ `Private` **mapPayload**(`mintRequest`): `MintRequestStructOutput`

Maps a payload to the format expected by the contract

**`internal`**

#### Parameters

| Name          | Type                                                                                                               | Description         |
| :------------ | :----------------------------------------------------------------------------------------------------------------- | :------------------ |
| `mintRequest` | [`SignaturePayload`](../interfaces/SignaturePayload) \| [`NewSignaturePayload`](../interfaces/NewSignaturePayload) | The payload to map. |

#### Returns

`MintRequestStructOutput`

- The mapped payload.

#### Defined in

[src/modules/nft.ts:657](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L657)

---

### mint

▸ **mint**(`metadata`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Defined in

[src/modules/nft.ts:296](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L296)

---

### mintBatch

▸ **mintBatch**(`metadatas`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Defined in

[src/modules/nft.ts:364](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L364)

---

### mintBatchTo

▸ **mintBatchTo**(`to`, `metadatas`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

Mint Many NFTs

**`remarks`** Mint many NFTs at once to a specified wallet.

**`example`**

```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}";

// Custom metadata of the NFTs you want to mint.
const metadatas = [
  {
    name: "Cool NFT #1",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png") // This can be an image url or file
  },
  {
    name: "Cool NFT #2",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/other/image.png")
  }
];

await module.mintBatchTo(toAddress, metadatas);
```

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `to`        | `string`                                                  |
| `metadatas` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)[]\>

#### Defined in

[src/modules/nft.ts:423](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L423)

---

### mintTo

▸ **mintTo**(`to`, `metadata`): `Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

Mint NFT

**`remarks`** Mint an NFT to a specified wallet.

**`example`**

```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}";

// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png") // This can be an image url or file
};

await module.mintTo(toAddress, metadata);
```

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `to`       | `string`                                                |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<[`NFTMetadata`](../interfaces/NFTMetadata)\>

#### Defined in

[src/modules/nft.ts:342](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L342)

---

### mintWithSignature

▸ **mintWithSignature**(`req`, `signature`): `Promise`<`BigNumber`\>

Mints an NFT given a payload and signature.

#### Parameters

| Name        | Type                                                 |
| :---------- | :--------------------------------------------------- |
| `req`       | [`SignaturePayload`](../interfaces/SignaturePayload) |
| `signature` | `string`                                             |

#### Returns

`Promise`<`BigNumber`\>

- The ID of the minted token.

#### Implementation of

[ISignatureMinter](../interfaces/ISignatureMinter).[mintWithSignature](../interfaces/ISignatureMinter#mintwithsignature)

#### Defined in

[src/modules/nft.ts:545](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L545)

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

Checks the owner of a particular NFT

#### Parameters

| Name      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tokenId` | `string` | ID of the NFT to get the owner of |

#### Returns

`Promise`<`string`\>

the owner of the token, or a zero address if the
token has been burned

#### Defined in

[src/modules/nft.ts:189](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L189)

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

### setAllowance

▸ `Private` **setAllowance**(`value`, `currencyAddress`, `overrides`): `Promise`<`any`\>

#### Parameters

| Name              | Type        |
| :---------------- | :---------- |
| `value`           | `BigNumber` |
| `currencyAddress` | `string`    |
| `overrides`       | `any`       |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/modules/nft.ts:671](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L671)

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

[src/modules/nft.ts:254](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L254)

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

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/nft.ts:505](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L505)

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

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L172)

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

[src/modules/nft.ts:538](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L538)

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

[src/modules/nft.ts:478](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L478)

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

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/nft.ts:222](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L222)

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

[src/modules/nft.ts:280](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L280)

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

[src/modules/nft.ts:470](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L470)

---

### verify

▸ **verify**(`mintRequest`, `signature`): `Promise`<`boolean`\>

Verifies the signature.

#### Parameters

| Name          | Type                                                 |
| :------------ | :--------------------------------------------------- |
| `mintRequest` | [`SignaturePayload`](../interfaces/SignaturePayload) |
| `signature`   | `string`                                             |

#### Returns

`Promise`<`boolean`\>

- True if the signature is valid, false otherwise.

#### Implementation of

[ISignatureMinter](../interfaces/ISignatureMinter).[verify](../interfaces/ISignatureMinter#verify)

#### Defined in

[src/modules/nft.ts:574](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/nft.ts#L574)
