---
id: "modules"
title: "@3rdweb/sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

The [thirdweb](https://thirdweb.com) typescript sdk.

**`remarks`**
Please keep in mind that the thirdweb typescript sdk and [Admin Dashboard](https://thirdweb.com/dashboard) are currently in Early Access.

Should you find bugs or in the case you need help please reach out to us in [Discord](https://discord.gg/thirdweb). (We also have 🍪 )

**`example`**
To get you started here's how you would instantiate the SDK and fetch some NFTs

1. Install the sdk

```shell
npm install @3rdweb/sdk
```

2. Get your NFT contract address from the [Admin Dashboard](https://thirdweb.com/dashboard).

3. Write the tiniest amount of code!

```typescript
 1 | import { ThirdwebSDK } from "@3rdweb/sdk";
 2 | import type { NFTModule, NFTMetadataOwner } from "@3rdweb/sdk";
 3 |
 5 | const contractAddress = "0x..."; // your contract address from step 2
 6 |
 7 | const sdk = new ThirdwebSDK();
 8 |
 9 | const nftModule: NFTModule = sdk.getNFTModule(contractAddress);
10 |
11 | const nftListWithOwnerAddress: NFTMetadataOwner[] = await nftModule.getAllWithOwner();
12 |
13 | console.log(nftListWithOwnerAddress);
```

```
Output
=> [
      {
         owner: "0x...",
         metadata: {
           name: "...",
           description: "...",
           image: "..."
         },
      },
      {
         owner: "0x...",
         metadata: {
           name: "...",
           description: "...",
           image: "..."
         },
      },
      ...
   ]
```

## Enumerations

- [ClaimEligibility](enums/ClaimEligibility)
- [ListingType](enums/ListingType)
- [ModuleType](enums/ModuleType)
- [ProposalState](enums/ProposalState)
- [UnderlyingType](enums/UnderlyingType)
- [VoteType](enums/VoteType)

## Classes

- [AdminRoleMissingError](classes/AdminRoleMissingError)
- [AppModule](classes/AppModule)
- [AssetNotFoundError](classes/AssetNotFoundError)
- [AuctionAlreadyStartedError](classes/AuctionAlreadyStartedError)
- [AuctionHasNotEndedError](classes/AuctionHasNotEndedError)
- [BundleDropModule](classes/BundleDropModule)
- [BundleDropModuleMetadata](classes/BundleDropModuleMetadata)
- [BundleModule](classes/BundleModule)
- [BundleModuleMetadata](classes/BundleModuleMetadata)
- [ClaimConditionFactory](classes/ClaimConditionFactory)
- [ClaimConditionPhase](classes/ClaimConditionPhase)
- [ClaimProof](classes/ClaimProof)
- [CommonModuleMetadata](classes/CommonModuleMetadata)
- [CurrencyModule](classes/CurrencyModule)
- [CurrencyModuleMetadata](classes/CurrencyModuleMetadata)
- [DatastoreModule](classes/DatastoreModule)
- [DatastoreModuleMetadata](classes/DatastoreModuleMetadata)
- [DropModule](classes/DropModule)
- [DropModuleMetadata](classes/DropModuleMetadata)
- [DuplicateFileNameError](classes/DuplicateFileNameError)
- [DuplicateLeafsError](classes/DuplicateLeafsError)
- [FetchError](classes/FetchError)
- [FileNameMissingError](classes/FileNameMissingError)
- [FunctionDeprecatedError](classes/FunctionDeprecatedError)
- [InvalidAddressError](classes/InvalidAddressError)
- [InvariantError](classes/InvariantError)
- [IpfsStorage](classes/IpfsStorage)
- [ListingNotFoundError](classes/ListingNotFoundError)
- [MarketModule](classes/MarketModule)
- [MarketModuleMetadata](classes/MarketModuleMetadata)
- [MarketplaceModule](classes/MarketplaceModule)
- [MarketplaceModuleMetadata](classes/MarketplaceModuleMetadata)
- [MissingOwnerRoleError](classes/MissingOwnerRoleError)
- [MissingRoleError](classes/MissingRoleError)
- [Module](classes/Module)
- [ModuleWithRoles](classes/ModuleWithRoles)
- [NFTModule](classes/NFTModule)
- [NftModuleMetadata](classes/NftModuleMetadata)
- [NotEnoughTokensError](classes/NotEnoughTokensError)
- [NotFoundError](classes/NotFoundError)
- [PackModule](classes/PackModule)
- [PackModuleMetadata](classes/PackModuleMetadata)
- [QuantityAboveLimitError](classes/QuantityAboveLimitError)
- [RestrictedTransferError](classes/RestrictedTransferError)
- [Snapshot](classes/Snapshot)
- [SplitsModule](classes/SplitsModule)
- [SplitsModuleMetadata](classes/SplitsModuleMetadata)
- [ThirdwebSDK](classes/ThirdwebSDK)
- [TokenModule](classes/TokenModule)
- [TokenModuleMetadata](classes/TokenModuleMetadata)
- [UploadError](classes/UploadError)
- [VoteModule](classes/VoteModule)
- [VoteModuleMetadata](classes/VoteModuleMetadata)
- [WrongListingTypeError](classes/WrongListingTypeError)

## Interfaces

- [AuctionListing](interfaces/AuctionListing)
- [BundleDropCreateClaimCondition](interfaces/BundleDropCreateClaimCondition)
- [BundleDropMetadata](interfaces/BundleDropMetadata)
- [BundleMetadata](interfaces/BundleMetadata)
- [ClaimCondition](interfaces/ClaimCondition)
- [CollectionMetadata](interfaces/CollectionMetadata)
- [ContractMetadata](interfaces/ContractMetadata)
- [CreatePublicMintCondition](interfaces/CreatePublicMintCondition)
- [Currency](interfaces/Currency)
- [CurrencyValue](interfaces/CurrencyValue)
- [DirectListing](interfaces/DirectListing)
- [GaslessTransaction](interfaces/GaslessTransaction)
- [IAppModule](interfaces/IAppModule)
- [IDropModule](interfaces/IDropModule)
- [IMarketplace](interfaces/IMarketplace)
- [INFTBundleBatchArgs](interfaces/INFTBundleBatchArgs)
- [INFTBundleCreateArgs](interfaces/INFTBundleCreateArgs)
- [INFTCollectionBatchArgs](interfaces/INFTCollectionBatchArgs)
- [INFTCollectionCreateArgs](interfaces/INFTCollectionCreateArgs)
- [IPackBatchArgs](interfaces/IPackBatchArgs)
- [IPackCreateArgs](interfaces/IPackCreateArgs)
- [IRoles](interfaces/IRoles)
- [ISDKOptions](interfaces/ISDKOptions)
- [ISignatureMinter](interfaces/ISignatureMinter)
- [ISplitsModule](interfaces/ISplitsModule)
- [IStorage](interfaces/IStorage)
- [IThirdwebSdk](interfaces/IThirdwebSdk)
- [ITokenMintArgs](interfaces/ITokenMintArgs)
- [ITokenMintFromArgs](interfaces/ITokenMintFromArgs)
- [ITransferable](interfaces/ITransferable)
- [ListingFilter](interfaces/ListingFilter)
- [ListingMetadata](interfaces/ListingMetadata)
- [ModuleMetadata](interfaces/ModuleMetadata)
- [ModuleMetadataNoType](interfaces/ModuleMetadataNoType)
- [NFTMetadata](interfaces/NFTMetadata)
- [NFTMetadataOwner](interfaces/NFTMetadataOwner)
- [NativeToken](interfaces/NativeToken)
- [NewAuctionListing](interfaces/NewAuctionListing)
- [NewDirectListing](interfaces/NewDirectListing)
- [NewSignaturePayload](interfaces/NewSignaturePayload)
- [NewSplitRecipient](interfaces/NewSplitRecipient)
- [Offer](interfaces/Offer)
- [PackMetadata](interfaces/PackMetadata)
- [PackMetadataWithBalance](interfaces/PackMetadataWithBalance)
- [PackNFTMetadata](interfaces/PackNFTMetadata)
- [Proposal](interfaces/Proposal)
- [ProposalExecutable](interfaces/ProposalExecutable)
- [ProposalVote](interfaces/ProposalVote)
- [PublicClaimCondition](interfaces/PublicClaimCondition)
- [PublicMintCondition](interfaces/PublicMintCondition)
- [SignaturePayload](interfaces/SignaturePayload)
- [SnapshotInfo](interfaces/SnapshotInfo)
- [SplitRecipient](interfaces/SplitRecipient)
- [UploadMetadataBatchResult](interfaces/UploadMetadataBatchResult)
- [VoteSettings](interfaces/VoteSettings)

## Type aliases

### AllModuleMetadata

Ƭ **AllModuleMetadata**: [`CollectionModuleMetadata`](modules#collectionmodulemetadata) \| [`CommonModuleMetadata`](classes/CommonModuleMetadata)

#### Defined in

[src/types/module-deployments/MetadataMap.ts:5](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/MetadataMap.ts#L5)

---

### AnyContract

Ƭ **AnyContract**: typeof [`AppModule`](classes/AppModule) \| typeof [`BundleModule`](classes/BundleModule) \| typeof [`NFTModule`](classes/NFTModule) \| typeof [`CurrencyModule`](classes/CurrencyModule) \| typeof [`MarketModule`](classes/MarketModule) \| typeof [`PackModule`](classes/PackModule) \| typeof `RegistryModule` \| typeof [`DropModule`](classes/DropModule) \| typeof [`DatastoreModule`](classes/DatastoreModule) \| typeof [`SplitsModule`](classes/SplitsModule) \| typeof [`BundleDropModule`](classes/BundleDropModule) \| typeof [`MarketplaceModule`](classes/MarketplaceModule) \| typeof [`VoteModule`](classes/VoteModule)

**`internal`**

#### Defined in

[src/core/index.ts:71](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/index.ts#L71)

---

### ChainlinkInfo

Ƭ **ChainlinkInfo**: `Object`

**`internal`**

#### Type declaration

| Name               | Type        |
| :----------------- | :---------- |
| `fees`             | `BigNumber` |
| `keyHash`          | `string`    |
| `linkTokenAddress` | `string`    |
| `vrfCoordinator`   | `string`    |

#### Defined in

[src/common/chainlink.ts:8](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/chainlink.ts#L8)

---

### CollectionModule

Ƭ **CollectionModule**: [`BundleModule`](classes/BundleModule)

#### Defined in

[src/modules/collection.ts:3](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/collection.ts#L3)

---

### CollectionModuleMetadata

Ƭ **CollectionModuleMetadata**: [`BundleModuleMetadata`](classes/BundleModuleMetadata)

#### Defined in

[src/types/module-deployments/BundleModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/BundleModuleMetadata.ts#L33)

---

### ForwardRequestMessage

Ƭ **ForwardRequestMessage**: `Object`

Forward Request Message that's used for gasless transaction

#### Type declaration

| Name    | Type        |
| :------ | :---------- |
| `data`  | `BytesLike` |
| `from`  | `string`    |
| `gas`   | `string`    |
| `nonce` | `string`    |
| `to`    | `string`    |
| `value` | `string`    |

#### Defined in

[src/core/types.ts:37](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/types.ts#L37)

---

### JSONValue

Ƭ **JSONValue**: `string` \| `number` \| `null` \| `boolean` \| [`JSONValue`](modules#jsonvalue)[] \| { [key: string]: [`JSONValue`](modules#jsonvalue); }

A JSON value

#### Defined in

[src/core/types.ts:20](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/types.ts#L20)

---

### MetadataURIOrObject

Ƭ **MetadataURIOrObject**: `string` \| `Record`<`string`, `any`\>

A valid URI string or metadata object

#### Defined in

[src/core/types.ts:32](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/types.ts#L32)

---

### ModuleMetadataMap

Ƭ **ModuleMetadataMap**: `Object`

#### Type declaration

| Name | Type                                                           |
| :--- | :------------------------------------------------------------- |
| `0`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `1`  | [`CollectionModuleMetadata`](modules#collectionmodulemetadata) |
| `2`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `3`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `4`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `5`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `6`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `7`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `8`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |
| `9`  | [`CommonModuleMetadata`](classes/CommonModuleMetadata)         |

#### Defined in

[src/types/module-deployments/MetadataMap.ts:8](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/MetadataMap.ts#L8)

---

### NFTContractTypes

Ƭ **NFTContractTypes**: `NFT` \| `NFTCollection` \| `LazyNFT` \| `LazyMintERC721` \| `LazyMintERC1155`

**`internal`**

#### Defined in

[src/common/nft.ts:83](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/nft.ts#L83)

---

### PermitRequestMessage

Ƭ **PermitRequestMessage**: `Object`

EIP-2612 token permit message for gasless transaction

#### Type declaration

| Name       | Type                 |
| :--------- | :------------------- |
| `deadline` | `number` \| `string` |
| `nonce`    | `number` \| `string` |
| `owner`    | `string`             |
| `spender`  | `string`             |
| `to`       | `string`             |
| `value`    | `number` \| `string` |

#### Defined in

[src/core/types.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/types.ts#L50)

---

### ProviderOrSigner

Ƭ **ProviderOrSigner**: `Provider` \| `Signer`

A valid "ethers" Provider or Signer.

#### Defined in

[src/core/types.ts:8](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/types.ts#L8)

---

### Role

Ƭ **Role**: keyof [`IRoles`](interfaces/IRoles)

{@inheritDoc IRoles}

#### Defined in

[src/common/role.ts:46](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/role.ts#L46)

---

### SetAllRoles

Ƭ **SetAllRoles**: { [key in keyof IRoles]?: string[] }

#### Defined in

[src/common/role.ts:48](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/role.ts#L48)

---

### ValidProviderInput

Ƭ **ValidProviderInput**: [`ProviderOrSigner`](modules#providerorsigner) \| `Network` \| `string`

A valid "ethers" Provider, Signer or a Network object or url address to create a Provider with.

#### Defined in

[src/core/types.ts:14](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/types.ts#L14)

## Variables

### ChainlinkVrf

• **ChainlinkVrf**: `Record`<`number`, [`ChainlinkInfo`](modules#chainlinkinfo)\>

**`internal`**

#### Defined in

[src/common/chainlink.ts:19](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/chainlink.ts#L19)

---

### DEFAULT_BLOCK_TIMES_FALLBACK

• **DEFAULT_BLOCK_TIMES_FALLBACK**: `Record`<`SUPPORTED_CHAIN_ID` \| `ChainId.Hardhat`, { `secondsBetweenBlocks`: `number` ; `synced`: `boolean` }\>

Fallback map of default block mining times in seconds.

#### Defined in

[src/utils/blockTimeEstimator.ts:13](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/utils/blockTimeEstimator.ts#L13)

---

### InterfaceId_IERC1155

• **InterfaceId_IERC1155**: `Uint8Array`

**`internal`**

#### Defined in

[src/common/contract.ts:30](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/contract.ts#L30)

---

### InterfaceId_IERC721

• **InterfaceId_IERC721**: `Uint8Array`

**`internal`**

#### Defined in

[src/common/contract.ts:25](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/contract.ts#L25)

---

### NATIVE_TOKEN_ADDRESS

• **NATIVE_TOKEN_ADDRESS**: `"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"`

**`internal`**

#### Defined in

[src/common/currency.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/currency.ts#L39)

---

### NFTLabsSDK

• **NFTLabsSDK**: typeof [`ThirdwebSDK`](classes/ThirdwebSDK) = `ThirdwebSDK`

Deprecated, please use ThirdwebSDK instead.

**`deprecated`** use ThirdwebSDK instead

#### Defined in

[src/core/index.ts:818](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/index.ts#L818)

---

### RolesMap

• **RolesMap**: [`IRoles`](interfaces/IRoles)

**`internal`**

#### Defined in

[src/common/role.ts:56](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/role.ts#L56)

## Functions

### convertModuleTypeToName

▸ **convertModuleTypeToName**(`moduleType`): keyof typeof [`ModuleType`](enums/ModuleType) \| `undefined`

#### Parameters

| Name         | Type                             | Description                      |
| :----------- | :------------------------------- | :------------------------------- |
| `moduleType` | [`ModuleType`](enums/ModuleType) | A [ModuleType](enums/ModuleType) |

#### Returns

keyof typeof [`ModuleType`](enums/ModuleType) \| `undefined`

The name of the given [ModuleType](enums/ModuleType) or undefined

#### Defined in

[src/common/module-type.ts:46](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/module-type.ts#L46)

---

### convertNameToModuleType

▸ **convertNameToModuleType**(`moduleName?`): [`ModuleType`](enums/ModuleType) \| `undefined`

#### Parameters

| Name          | Type     | Description             |
| :------------ | :------- | :---------------------- |
| `moduleName?` | `string` | a supported module name |

#### Returns

[`ModuleType`](enums/ModuleType) \| `undefined`

The [ModuleType](enums/ModuleType) or undefined

#### Defined in

[src/common/module-type.ts:31](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/module-type.ts#L31)

---

### estimateBlockAtTime

▸ **estimateBlockAtTime**(`timeInEpochSeconds`, `provider`): `Promise`<`number`\>

Given a time in second, return the block number that the time is in.

#### Parameters

| Name                 | Type       | Description          |
| :------------------- | :--------- | :------------------- |
| `timeInEpochSeconds` | `number`   | The time in seconds. |
| `provider`           | `Provider` | -                    |

#### Returns

`Promise`<`number`\>

- The block number.

#### Defined in

[src/utils/blockTimeEstimator.ts:62](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/utils/blockTimeEstimator.ts#L62)

---

### generateRoot

▸ **generateRoot**(`items`): `string`

Convenience function to generate a merkle root from a list of strings.

#### Parameters

| Name    | Type       | Description                                                    |
| :------ | :--------- | :------------------------------------------------------------- |
| `items` | `string`[] | Any list of strings that will be hashed and added to the tree. |

#### Returns

`string`

- A merkle root (in hexadecimal).

#### Defined in

[src/utils/merkle/generateRoot.ts:10](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/utils/merkle/generateRoot.ts#L10)

---

### getContractMetadata

▸ **getContractMetadata**(`provider`, `address`, `ipfsGatewayUrl`, `resolveGateway?`): `Promise`<[`ContractMetadata`](interfaces/ContractMetadata)\>

**`internal`**

#### Parameters

| Name             | Type                                           | Default value |
| :--------------- | :--------------------------------------------- | :------------ |
| `provider`       | [`ProviderOrSigner`](modules#providerorsigner) | `undefined`   |
| `address`        | `string`                                       | `undefined`   |
| `ipfsGatewayUrl` | `string`                                       | `undefined`   |
| `resolveGateway` | `boolean`                                      | `false`       |

#### Returns

`Promise`<[`ContractMetadata`](interfaces/ContractMetadata)\>

#### Defined in

[src/common/contract.ts:51](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/contract.ts#L51)

---

### getCurrencyBalance

▸ **getCurrencyBalance**(`providerOrSigner`, `tokenAddress`, `walletAddress`): `Promise`<[`CurrencyValue`](interfaces/CurrencyValue)\>

**`internal`**

#### Parameters

| Name               | Type                                           |
| :----------------- | :--------------------------------------------- |
| `providerOrSigner` | [`ProviderOrSigner`](modules#providerorsigner) |
| `tokenAddress`     | `string`                                       |
| `walletAddress`    | `string`                                       |

#### Returns

`Promise`<[`CurrencyValue`](interfaces/CurrencyValue)\>

#### Defined in

[src/common/currency.ts:209](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/currency.ts#L209)

---

### getCurrencyMetadata

▸ **getCurrencyMetadata**(`providerOrSigner`, `asset`): `Promise`<[`Currency`](interfaces/Currency)\>

**`internal`**

#### Parameters

| Name               | Type                                           |
| :----------------- | :--------------------------------------------- |
| `providerOrSigner` | [`ProviderOrSigner`](modules#providerorsigner) |
| `asset`            | `string`                                       |

#### Returns

`Promise`<[`Currency`](interfaces/Currency)\>

#### Defined in

[src/common/currency.ts:139](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/currency.ts#L139)

---

### getCurrencyValue

▸ **getCurrencyValue**(`providerOrSigner`, `asset`, `price`): `Promise`<[`CurrencyValue`](interfaces/CurrencyValue)\>

**`internal`**

#### Parameters

| Name               | Type                                           |
| :----------------- | :--------------------------------------------- |
| `providerOrSigner` | [`ProviderOrSigner`](modules#providerorsigner) |
| `asset`            | `string`                                       |
| `price`            | `BigNumberish`                                 |

#### Returns

`Promise`<[`CurrencyValue`](interfaces/CurrencyValue)\>

#### Defined in

[src/common/currency.ts:183](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/currency.ts#L183)

---

### getGasPriceForChain

▸ **getGasPriceForChain**(`chainId`, `speed`, `maxGasPrice`): `Promise`<`number` \| `null`\>

**`internal`**

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `chainId`     | `number` |
| `speed`       | `string` |
| `maxGasPrice` | `number` |

#### Returns

`Promise`<`number` \| `null`\>

the gas price

#### Defined in

[src/common/gas-price.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/gas-price.ts#L23)

---

### getMetadataWithoutContract

▸ **getMetadataWithoutContract**(`provider`, `contractAddress`, `tokenId`, `ipfsGatewayUrl`): `Promise`<[`NFTMetadata`](interfaces/NFTMetadata)\>

#### Parameters

| Name              | Type                                           |
| :---------------- | :--------------------------------------------- |
| `provider`        | [`ProviderOrSigner`](modules#providerorsigner) |
| `contractAddress` | `string`                                       |
| `tokenId`         | `string`                                       |
| `ipfsGatewayUrl`  | `string`                                       |

#### Returns

`Promise`<[`NFTMetadata`](interfaces/NFTMetadata)\>

#### Defined in

[src/common/nft.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/nft.ts#L93)

---

### getNativeTokenByChainId

▸ **getNativeTokenByChainId**(`chainId`): [`NativeToken`](interfaces/NativeToken)

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `chainId` | `ChainId` |

#### Returns

[`NativeToken`](interfaces/NativeToken)

#### Defined in

[src/common/currency.ts:239](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/currency.ts#L239)

---

### getRoleHash

▸ **getRoleHash**(`role`): `BytesLike`

**`internal`**

#### Parameters

| Name   | Type                                |
| :----- | :---------------------------------- |
| `role` | keyof [`IRoles`](interfaces/IRoles) |

#### Returns

`BytesLike`

#### Defined in

[src/common/role.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/role.ts#L81)

---

### getTokenMetadata

▸ **getTokenMetadata**(`contract`, `tokenId`, `ipfsGatewayUrl`): `Promise`<[`NFTMetadata`](interfaces/NFTMetadata)\>

#### Parameters

| Name             | Type                                           |
| :--------------- | :--------------------------------------------- |
| `contract`       | [`NFTContractTypes`](modules#nftcontracttypes) |
| `tokenId`        | `string`                                       |
| `ipfsGatewayUrl` | `string`                                       |

#### Returns

`Promise`<[`NFTMetadata`](interfaces/NFTMetadata)\>

#### Defined in

[src/common/nft.ts:106](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/nft.ts#L106)

---

### getTokenMetadataUsingStorage

▸ **getTokenMetadataUsingStorage**(`contractAddress`, `provider`, `tokenId`, `storage`): `Promise`<[`NFTMetadata`](interfaces/NFTMetadata)\>

#### Parameters

| Name              | Type                                           |
| :---------------- | :--------------------------------------------- |
| `contractAddress` | `string`                                       |
| `provider`        | [`ProviderOrSigner`](modules#providerorsigner) |
| `tokenId`         | `string`                                       |
| `storage`         | [`IStorage`](interfaces/IStorage)              |

#### Returns

`Promise`<[`NFTMetadata`](interfaces/NFTMetadata)\>

#### Defined in

[src/common/nft.ts:135](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/nft.ts#L135)

---

### getTokenUri

▸ **getTokenUri**(`contract`, `tokenId`): `Promise`<`string`\>

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `contract` | [`NFTContractTypes`](modules#nftcontracttypes) |
| `tokenId`  | `string`                                       |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/common/nft.ts:166](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/nft.ts#L166)

---

### isContract

▸ **isContract**(`provider`, `address`): `Promise`<`boolean`\>

**`internal`**

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `provider` | `Provider` |
| `address`  | `string`   |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/common/contract.ts:87](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/contract.ts#L87)

---

### isNativeToken

▸ **isNativeToken**(`tokenAddress`): `boolean`

**`internal`**

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `tokenAddress` | `string` |

#### Returns

`boolean`

#### Defined in

[src/common/currency.ts:199](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/currency.ts#L199)

---

### recursiveResolveGatewayUrl

▸ **recursiveResolveGatewayUrl**(`json`, `ipfsGatewayUrl`): `any`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `json`           | `any`    |
| `ipfsGatewayUrl` | `string` |

#### Returns

`any`

#### Defined in

[src/common/ipfs.ts:31](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/ipfs.ts#L31)

---

### replaceIpfsWithGateway

▸ **replaceIpfsWithGateway**(`ipfsUrl`, `gatewayUrl`): `string`

**`internal`**

#### Parameters

| Name         | Type     | Description     |
| :----------- | :------- | :-------------- |
| `ipfsUrl`    | `string` | the ipfs:// uri |
| `gatewayUrl` | `string` | the gateway url |

#### Returns

`string`

the fully formed IPFS url

#### Defined in

[src/common/ipfs.ts:22](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/ipfs.ts#L22)

---

### uploadMetadata

▸ **uploadMetadata**(`metadata`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

**`internal`**

#### Parameters

| Name               | Type                                                 |
| :----------------- | :--------------------------------------------------- |
| `metadata`         | [`MetadataURIOrObject`](modules#metadatauriorobject) |
| `contractAddress?` | `string`                                             |
| `signerAddress?`   | `string`                                             |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/common/ipfs.ts:83](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/ipfs.ts#L83)

---

### uploadToIPFS

▸ **uploadToIPFS**(`data`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

A helper function to upload arbitrary data to IPFS and return the resulting IPFS uri.

#### Parameters

| Name               | Type                       | Description                                                           |
| :----------------- | :------------------------- | :-------------------------------------------------------------------- |
| `data`             | `string` \| `FileOrBuffer` | stringified JSON \|\| File                                            |
| `contractAddress?` | `string`                   | (Optional) the contract address to associate the data with            |
| `signerAddress?`   | `string`                   | (Optional) the wallet address of the actor that is uploading the file |

#### Returns

`Promise`<`string`\>

The `ipfs://<hash>` uri of the uploaded file

#### Defined in

[src/common/ipfs.ts:56](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/common/ipfs.ts#L56)
