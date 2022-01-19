---
id: "MarketplaceModule"
title: "Class: MarketplaceModule"
sidebar_label: "MarketplaceModule"
sidebar_position: 0
custom_edit_url: null
---

Create your own whitelabel marketplace that enables users to buy and sell any digital assets.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getMarketplaceModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`Marketplace`\>

  ↳ **`MarketplaceModule`**

## Implements

- [`IMarketplace`](../interfaces/IMarketplace)

## Constructors

### constructor

• **new MarketplaceModule**(`providerOrSigner`, `address`, `options`, `sdk`)

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

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L45)

---

### contract

• **contract**: `Marketplace`

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

• **readOnlyContract**: `Marketplace`

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

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType) = `ModuleType.MARKETPLACE`

#### Defined in

[src/modules/marketplace.ts:65](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L65)

---

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"lister"``]

#### Defined in

[src/modules/marketplace.ts:67](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L67)

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

### acceptDirectListingOffer

▸ **acceptDirectListingOffer**(`listingId`, `addressOfOfferor`): `Promise`<`void`\>

Accepts the offer of the specified wallet in `addressofOfferor`.

#### Parameters

| Name               | Type           |
| :----------------- | :------------- |
| `listingId`        | `BigNumberish` |
| `addressOfOfferor` | `string`       |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[acceptDirectListingOffer](../interfaces/IMarketplace#acceptdirectlistingoffer)

#### Defined in

[src/modules/marketplace.ts:824](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L824)

---

### buyoutAuctionListing

▸ **buyoutAuctionListing**(`listingId`): `Promise`<`void`\>

Buyout Auction

**`remarks`** Buy a specific direct listing from the marketplace.

**`example`**

```javascript
// The listing ID of the asset you want to buy
const listingId = 0;

const balance = await module.balanceOf(listingId, quantity);
console.log(balance);
```

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[buyoutAuctionListing](../interfaces/IMarketplace#buyoutauctionlisting)

#### Defined in

[src/modules/marketplace.ts:851](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L851)

---

### buyoutDirectListing

▸ **buyoutDirectListing**(`_buyout`): `Promise`<`void`\>

Buy Listing

**`remarks`** Buy a specific direct listing from the marketplace.

**`example`**

```javascript
// The listing ID of the asset you want to buy
const listingId = 0;
// Quantity of the asset you want to buy
const quantityDesired = 1;

await module.buyoutDirectListing({ listingId, quantityDesired });
```

#### Parameters

| Name                      | Type           |
| :------------------------ | :------------- |
| `_buyout`                 | `Object`       |
| `_buyout.listingId`       | `BigNumberish` |
| `_buyout.quantityDesired` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[buyoutDirectListing](../interfaces/IMarketplace#buyoutdirectlisting)

#### Defined in

[src/modules/marketplace.ts:877](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L877)

---

### buyoutListing

▸ **buyoutListing**(`listingId`, `quantityDesired?`): `Promise`<`void`\>

Generic buyout method that will dynamically determine
the listing type.

Only direct listings support buying out a specific quantity,
therefore the `quantityDesired` parameter is ignored
if the listing ID passed in is an auction listing.

#### Parameters

| Name               | Type           |
| :----------------- | :------------- |
| `listingId`        | `BigNumberish` |
| `quantityDesired?` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[buyoutListing](../interfaces/IMarketplace#buyoutlisting)

#### Defined in

[src/modules/marketplace.ts:1038](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1038)

---

### cancelAuctionListing

▸ **cancelAuctionListing**(`listingId`): `Promise`<`void`\>

Cancel Auction Listing

**`remarks`** Cancel an auction listing on the marketplace

**`example`**

```javascript
// The listing ID of the auction listing you want to cancel
const listingId = "0";

await module.cancelAuctionListing(listingId);
```

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[cancelAuctionListing](../interfaces/IMarketplace#cancelauctionlisting)

#### Defined in

[src/modules/marketplace.ts:970](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L970)

---

### cancelDirectListing

▸ **cancelDirectListing**(`listingId`): `Promise`<`void`\>

Cancel Direct Listing

**`remarks`** Cancel a direct listing on the marketplace

**`example`**

```javascript
// The listing ID of the direct listing you want to cancel
const listingId = "0";

await module.cancelDirectListing(listingId);
```

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[cancelDirectListing](../interfaces/IMarketplace#canceldirectlisting)

#### Defined in

[src/modules/marketplace.ts:951](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L951)

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

### closeAuctionListing

▸ **closeAuctionListing**(`listingId`, `closeFor?`): `Promise`<`void`\>

Closes an auction listing and distributes the payment/assets.
You can only close the listing after it has already ended.

This method must be called by both the buyer and the seller.

When the buyer calls this method, the tokens they purchased will
be distributed to the buyers wallet.

When the seller calls this method, the winning bid will be
distributed to the sellers wallet.

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |
| `closeFor?` | `string`       |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[closeAuctionListing](../interfaces/IMarketplace#closeauctionlisting)

#### Defined in

[src/modules/marketplace.ts:989](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L989)

---

### connectContract

▸ `Protected` **connectContract**(): `Marketplace`

**`internal`**

#### Returns

`Marketplace`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/marketplace.ts:80](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L80)

---

### createAuctionListing

▸ **createAuctionListing**(`listing`): `Promise`<`BigNumber`\>

Create Auction

**`remarks`** Create a new auction where people can bid on an asset.

**`example`**

```javascript
// Data of the auction you want to create
const auction = {
  // address of the contract the asset you want to list is on
  assetContractAddress: "0x...",
  // token ID of the asset you want to list
  tokenId: "0",
  // in how many seconds with the listing open up
  startTimeInSeconds: 0,
  // how long the listing will be open for
  listingDurationInSeconds: 86400,
  // how many of the asset you want to list
  quantity: 1,
  // address of the currency contract that will be used to pay for the listing
  currencyContractAddress: "0x0000000000000000000000000000000000000000",
  // how much people would have to bid to instantly buy the asset
  buyoutPricePerToken: "10",
  // the minimum bid that will be accepted for the token
  reservePricePerToken: "1"
};

await module.createAuctionListing(auction);
```

#### Parameters

| Name      | Type                                                   |
| :-------- | :----------------------------------------------------- |
| `listing` | [`NewAuctionListing`](../interfaces/NewAuctionListing) |

#### Returns

`Promise`<`BigNumber`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[createAuctionListing](../interfaces/IMarketplace#createauctionlisting)

#### Defined in

[src/modules/marketplace.ts:178](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L178)

---

### createDirectListing

▸ **createDirectListing**(`listing`): `Promise`<`BigNumber`\>

Create Direct Listing

**`remarks`** Create a new listing on the marketplace where people can buy an asset directly.

**`example`**

```javascript
// Data of the listing you want to create
const listing = {
  // address of the contract the asset you want to list is on
  assetContractAddress: "0x...",
  // token ID of the asset you want to list
  tokenId: "0",
  // in how many seconds with the listing open up
  startTimeInSeconds: 0,
  // how long the listing will be open for
  listingDurationInSeconds: 86400,
  // how many of the asset you want to list
  quantity: 1,
  // address of the currency contract that will be used to pay for the listing
  currencyContractAddress: "0x0000000000000000000000000000000000000000",
  // how much the asset will be sold for
  buyoutPricePerToken: "1"
};

await module.createDirectListing(listing);
```

#### Parameters

| Name      | Type                                                 |
| :-------- | :--------------------------------------------------- |
| `listing` | [`NewDirectListing`](../interfaces/NewDirectListing) |

#### Returns

`Promise`<`BigNumber`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[createDirectListing](../interfaces/IMarketplace#createdirectlisting)

#### Defined in

[src/modules/marketplace.ts:119](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L119)

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

### getActiveOffer

▸ **getActiveOffer**(`listingId`, `address`): `Promise`<`undefined` \| [`Offer`](../interfaces/Offer)\>

If the `address` has made an offer to the specified listing,
this method will fetch the offer and return it. If no
offer has been made, this method will return `undefined`.

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |
| `address`   | `string`       |

#### Returns

`Promise`<`undefined` \| [`Offer`](../interfaces/Offer)\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getActiveOffer](../interfaces/IMarketplace#getactiveoffer)

#### Defined in

[src/modules/marketplace.ts:776](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L776)

---

### getAllListings

▸ **getAllListings**(): `Promise`<([`DirectListing`](../interfaces/DirectListing) \| [`AuctionListing`](../interfaces/AuctionListing))[]\>

Get Listings

**`remarks`** Get all listings in the marketplace.

**`example`**

```javascript
// Get all listings
const listings = await module.getAllListings();
console.log(listings);

// Get only the active listings
const activeListings = listings.filter(listing => listing.quantity > 0);
```

#### Returns

`Promise`<([`DirectListing`](../interfaces/DirectListing) \| [`AuctionListing`](../interfaces/AuctionListing))[]\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getAllListings](../interfaces/IMarketplace#getalllistings)

#### Defined in

[src/modules/marketplace.ts:1097](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1097)

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

### getAuctionListing

▸ **getAuctionListing**(`listingId`): `Promise`<[`AuctionListing`](../interfaces/AuctionListing)\>

Fetch an auction listing by Id.

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<[`AuctionListing`](../interfaces/AuctionListing)\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getAuctionListing](../interfaces/IMarketplace#getauctionlisting)

#### Defined in

[src/modules/marketplace.ts:399](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L399)

---

### getAuctionWinner

▸ **getAuctionWinner**(`listingId`): `Promise`<`string`\>

Get Auction Winner

**`remarks`** Get the winner of the auction after an auction ends.

**`example`**

```javascript
// The listing ID of the auction that closed
const listingId = 0;

module
  .getAuctionWinner(listingId)
  .then(auctionWinner => console.log(auctionWinner))
  .catch(err => console.error(err));
```

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/marketplace.ts:360](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L360)

---

### getBidBufferBps

▸ **getBidBufferBps**(): `Promise`<`BigNumber`\>

Fetch the current bid buffer on the marketplace contract.
The bid buffer is represented in basis points.

This is a percentage (e.g. 5%). A new bid is considered to be a winning
bid only if its bid amount is at least the bid buffer (e.g. 5%) greater
than the previous winning bid. This prevents buyers from making very
slightly higher bids to win the auctioned items.

#### Returns

`Promise`<`BigNumber`\>

- The bid buffer in basis points.

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getBidBufferBps](../interfaces/IMarketplace#getbidbufferbps)

#### Defined in

[src/modules/marketplace.ts:816](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L816)

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

### getDirectListing

▸ **getDirectListing**(`listingId`): `Promise`<[`DirectListing`](../interfaces/DirectListing)\>

Fetch a direct listing by Id.

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<[`DirectListing`](../interfaces/DirectListing)\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getDirectListing](../interfaces/IMarketplace#getdirectlisting)

#### Defined in

[src/modules/marketplace.ts:378](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L378)

---

### getListing

▸ **getListing**(`listingId`): `Promise`<[`DirectListing`](../interfaces/DirectListing) \| [`AuctionListing`](../interfaces/AuctionListing)\>

Helper method to fetch a listing without knowing the type.

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<[`DirectListing`](../interfaces/DirectListing) \| [`AuctionListing`](../interfaces/AuctionListing)\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getListing](../interfaces/IMarketplace#getlisting)

#### Defined in

[src/modules/marketplace.ts:1061](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1061)

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

**`override`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleRoles](ModuleWithRoles#getmoduleroles)

#### Defined in

[src/modules/marketplace.ts:73](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L73)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/marketplace.ts:87](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L87)

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

### getTimeBufferInSeconds

▸ **getTimeBufferInSeconds**(): `Promise`<`BigNumber`\>

Fetch the current time buffer on the marketplace contract.

This is measured in seconds (e.g. 15 minutes or 900 seconds).
If a winning bid is made within the buffer of the auction closing
(e.g. 15 minutes within the auction closing), the auction's closing
time is increased by the buffer toprevent buyers from making last
minute winning bids, and to give time to other buyers to make a
higher bid if they wish to.

This value is formatter as basis points (e.g. 5% = 500).

#### Returns

`Promise`<`BigNumber`\>

- The time buffer in seconds.

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getTimeBufferInSeconds](../interfaces/IMarketplace#gettimebufferinseconds)

#### Defined in

[src/modules/marketplace.ts:820](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L820)

---

### getWinningBid

▸ **getWinningBid**(`listingId`): `Promise`<`undefined` \| [`Offer`](../interfaces/Offer)\>

Get Highest Bid

**`remarks`** Get the current highest bid of an active auction.

**`example`**

```javascript
// The listing ID of the auction that closed
const listingId = 0;

module
  .getWinningBid(listingId)
  .then(offer => console.log(offer))
  .catch(err => console.error(err));
```

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`undefined` \| [`Offer`](../interfaces/Offer)\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[getWinningBid](../interfaces/IMarketplace#getwinningbid)

#### Defined in

[src/modules/marketplace.ts:805](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L805)

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

### handleTokenApproval

▸ `Private` **handleTokenApproval**(`assetContract`, `tokenId`, `from`): `Promise`<`void`\>

#### Parameters

| Name            | Type           |
| :-------------- | :------------- |
| `assetContract` | `string`       |
| `tokenId`       | `BigNumberish` |
| `from`          | `string`       |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/marketplace.ts:496](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L496)

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

### isRestrictedListerRoleOnly

▸ **isRestrictedListerRoleOnly**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/marketplace.ts:1128](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1128)

---

### isStillValidDirectListing

▸ `Private` **isStillValidDirectListing**(`listing`, `quantity?`): `Promise`<`boolean`\>

Use this method to check if a direct listing is still valid.

Ways a direct listing can become invalid:

1. The asset holder transferred the asset to another wallet
2. The asset holder burned the asset
3. The asset holder removed the approval on the marketplace

**`internal`**

#### Parameters

| Name        | Type                                           | Description           |
| :---------- | :--------------------------------------------- | :-------------------- |
| `listing`   | [`DirectListing`](../interfaces/DirectListing) | The listing to check. |
| `quantity?` | `BigNumberish`                                 | -                     |

#### Returns

`Promise`<`boolean`\>

- True if the listing is valid, false otherwise.

#### Defined in

[src/modules/marketplace.ts:612](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L612)

---

### isTokenApprovedForMarketplace

▸ `Private` **isTokenApprovedForMarketplace**(`assetContract`, `tokenId`, `from`): `Promise`<`boolean`\>

This method checks if the given token is approved for the marketplace module.
This is particularly useful for direct listings where the token
being listed may be moved before the listing is actually closed.

TODO: Ask Jake/Krishang: do we need to also check the owners balance of the token,
based on the listing quantity? I.e. query the balance of the tokenId, and check if
the seller holds enough of the token

**`internal`**

#### Parameters

| Name            | Type           | Description                                     |
| :-------------- | :------------- | :---------------------------------------------- |
| `assetContract` | `string`       | The address of the asset contract.              |
| `tokenId`       | `BigNumberish` | The token id of the token.                      |
| `from`          | `string`       | The address of the account that owns the token. |

#### Returns

`Promise`<`boolean`\>

- True if the marketplace is approved on the token, false otherwise.

#### Defined in

[src/modules/marketplace.ts:558](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L558)

---

### isWinningBid

▸ **isWinningBid**(`winningPrice`, `newBidPrice`, `bidBuffer`): `Promise`<`boolean`\>

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `winningPrice` | `BigNumberish` |
| `newBidPrice`  | `BigNumberish` |
| `bidBuffer`    | `BigNumberish` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/modules/marketplace.ts:332](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L332)

---

### makeAuctionListingBid

▸ **makeAuctionListingBid**(`bid`): `Promise`<`void`\>

Bid On Auction

**`remarks`** Make a bid on an auction listings

**`example`**

```javascript
// The listing ID of the asset you want to bid on
const listingId = 0;
// The price you are willing to bid for a single token of the listing
const bidPricePerToken = 1;

await module.buyoutDirectListing(listingId, bidPricePerToken);
```

#### Parameters

| Name                | Type           |
| :------------------ | :------------- |
| `bid`               | `Object`       |
| `bid.listingId`     | `BigNumberish` |
| `bid.pricePerToken` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[makeAuctionListingBid](../interfaces/IMarketplace#makeauctionlistingbid)

#### Defined in

[src/modules/marketplace.ts:284](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L284)

---

### makeDirectListingOffer

▸ **makeDirectListingOffer**(`offer`): `Promise`<`void`\>

Make an offer on a direct listing.

#### Parameters

| Name                            | Type           |
| :------------------------------ | :------------- |
| `offer`                         | `Object`       |
| `offer.currencyContractAddress` | `string`       |
| `offer.listingId`               | `BigNumberish` |
| `offer.pricePerToken`           | `BigNumberish` |
| `offer.quantityDesired`         | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[makeDirectListingOffer](../interfaces/IMarketplace#makedirectlistingoffer)

#### Defined in

[src/modules/marketplace.ts:207](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L207)

---

### mapAuctionListing

▸ `Private` **mapAuctionListing**(`listing`): `Promise`<[`AuctionListing`](../interfaces/AuctionListing)\>

Helper method maps the auction listing to the auction listing interface.

**`internal`**

#### Parameters

| Name      | Type            | Description                                        |
| :-------- | :-------------- | :------------------------------------------------- |
| `listing` | `ListingStruct` | The listing to map, as returned from the contract. |

#### Returns

`Promise`<[`AuctionListing`](../interfaces/AuctionListing)\>

- The mapped interface.

#### Defined in

[src/modules/marketplace.ts:462](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L462)

---

### mapDirectListing

▸ `Private` **mapDirectListing**(`listing`): `Promise`<[`DirectListing`](../interfaces/DirectListing)\>

Helper method maps the auction listing to the direct listing interface.

**`internal`**

#### Parameters

| Name      | Type            | Description                                        |
| :-------- | :-------------- | :------------------------------------------------- |
| `listing` | `ListingStruct` | The listing to map, as returned from the contract. |

#### Returns

`Promise`<[`DirectListing`](../interfaces/DirectListing)\>

- The mapped interface.

#### Defined in

[src/modules/marketplace.ts:426](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L426)

---

### mapOffer

▸ `Private` **mapOffer**(`listingId`, `offer`): `Promise`<[`Offer`](../interfaces/Offer)\>

Maps a contract offer to the strict interface

**`internal`**

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `listingId` | `BigNumber` |
| `offer`     | `any`       |

#### Returns

`Promise`<[`Offer`](../interfaces/Offer)\>

- An `Offer` object

#### Defined in

[src/modules/marketplace.ts:758](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L758)

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

[src/modules/marketplace.ts:243](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L243)

---

### setBidBufferBps

▸ **setBidBufferBps**(`buffer`): `Promise`<`void`\>

Sets the bid buffer on the marketplace contract.
The bid buffer is represented in basis points.

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `buffer` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[setBidBufferBps](../interfaces/IMarketplace#setbidbufferbps)

#### Defined in

[src/modules/marketplace.ts:1018](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1018)

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

### setRestrictedListerRoleOnly

▸ **setRestrictedListerRoleOnly**(`isRestricted`): `Promise`<`void`\>

#### Parameters

| Name           | Type      |
| :------------- | :-------- |
| `isRestricted` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/marketplace.ts:1132](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1132)

---

### setTimeBufferInSeconds

▸ **setTimeBufferInSeconds**(`buffer`): `Promise`<`void`\>

Sets the current time buffer on the marketplace contract.

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `buffer` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[setTimeBufferInSeconds](../interfaces/IMarketplace#settimebufferinseconds)

#### Defined in

[src/modules/marketplace.ts:1028](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L1028)

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

### updateAuctionListing

▸ **updateAuctionListing**(`listing`): `Promise`<`void`\>

Updates an auction listing.

#### Parameters

| Name      | Type                                             |
| :-------- | :----------------------------------------------- |
| `listing` | [`AuctionListing`](../interfaces/AuctionListing) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[updateAuctionListing](../interfaces/IMarketplace#updateauctionlisting)

#### Defined in

[src/modules/marketplace.ts:926](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L926)

---

### updateDirectListing

▸ **updateDirectListing**(`listing`): `Promise`<`void`\>

Updates a direct listing.

#### Parameters

| Name      | Type                                           |
| :-------- | :--------------------------------------------- |
| `listing` | [`DirectListing`](../interfaces/DirectListing) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IMarketplace](../interfaces/IMarketplace).[updateDirectListing](../interfaces/IMarketplace#updatedirectlisting)

#### Defined in

[src/modules/marketplace.ts:913](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L913)

---

### validateAuctionListing

▸ `Private` **validateAuctionListing**(`listingId`): `Promise`<[`AuctionListing`](../interfaces/AuctionListing)\>

Throws error if listing could not be found

#### Parameters

| Name        | Type        | Description          |
| :---------- | :---------- | :------------------- |
| `listingId` | `BigNumber` | Listing to check for |

#### Returns

`Promise`<[`AuctionListing`](../interfaces/AuctionListing)\>

#### Defined in

[src/modules/marketplace.ts:740](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L740)

---

### validateDirectListing

▸ `Private` **validateDirectListing**(`listingId`): `Promise`<[`DirectListing`](../interfaces/DirectListing)\>

Throws error if listing could not be found

#### Parameters

| Name        | Type        | Description          |
| :---------- | :---------- | :------------------- |
| `listingId` | `BigNumber` | Listing to check for |

#### Returns

`Promise`<[`DirectListing`](../interfaces/DirectListing)\>

#### Defined in

[src/modules/marketplace.ts:724](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L724)

---

### validateNewListingParam

▸ `Private` **validateNewListingParam**(`param`): `void`

Used to verify fields in new listing.

**`internal`**

#### Parameters

| Name    | Type                                                                                                           |
| :------ | :------------------------------------------------------------------------------------------------------------- |
| `param` | [`NewDirectListing`](../interfaces/NewDirectListing) \| [`NewAuctionListing`](../interfaces/NewAuctionListing) |

#### Returns

`void`

#### Defined in

[src/modules/marketplace.ts:678](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/marketplace.ts#L678)
