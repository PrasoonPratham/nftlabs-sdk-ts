---
id: "IMarketplace"
title: "Interface: IMarketplace"
sidebar_label: "IMarketplace"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`MarketplaceModule`](../classes/MarketplaceModule)

## Methods

### acceptDirectListingOffer

▸ **acceptDirectListingOffer**(`listingId`, `addressOfOfferor`): `Promise`<`void`\>

Accepts the offer of the specified wallet in `addressofOfferor`.

#### Parameters

| Name               | Type           | Description                             |
| :----------------- | :------------- | :-------------------------------------- |
| `listingId`        | `BigNumberish` | The listing Id to accept the offer for. |
| `addressOfOfferor` | `string`       | The address of the offeror.             |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:203](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L203)

---

### buyoutAuctionListing

▸ **buyoutAuctionListing**(`listingId`): `Promise`<`void`\>

Buyout the listing based on the buyout price.

The offer must be higher as high as the buyout price in order
for this buyout to succeed. If the buyout is too low, the
method will throw an error.

Buying out an auction listing will purchase all tokens
regardless of the quantity. There is no way to buy
a partial amount of the tokens.

Assuming this transaction is successful, the buyer will
instantly have access to the tokens and does not need
to call `closeAuctionListing`.

#### Parameters

| Name        | Type           | Description                  |
| :---------- | :------------- | :--------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to buyout. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:129](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L129)

---

### buyoutDirectListing

▸ **buyoutDirectListing**(`buyout`): `Promise`<`void`\>

Buyout the listing based on the buyout price.

The offer must be higher as high as the buyout price in order
for this buyout to succeed. If the buyout is too low, the
method will throw an error.

#### Parameters

| Name                     | Type           |
| :----------------------- | :------------- |
| `buyout`                 | `Object`       |
| `buyout.listingId`       | `BigNumberish` |
| `buyout.quantityDesired` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:140](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L140)

---

### buyoutListing

▸ **buyoutListing**(`listingId`, `quantityDesired?`): `Promise`<`void`\>

Generic buyout method that will dynamically determine
the listing type.

Only direct listings support buying out a specific quantity,
therefore the `quantityDesired` parameter is ignored
if the listing ID passed in is an auction listing.

#### Parameters

| Name               | Type           | Description                                                                |
| :----------------- | :------------- | :------------------------------------------------------------------------- |
| `listingId`        | `BigNumberish` | Id of the listing to buyout.                                               |
| `quantityDesired?` | `BigNumberish` | The quantity of tokens to buyout. Required if listing is a direct listing. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:156](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L156)

---

### cancelAuctionListing

▸ **cancelAuctionListing**(`listingId`): `Promise`<`void`\>

Cancels an auction listing. You can only cancel the listing
if it has not started yet.

#### Parameters

| Name        | Type           | Description                  |
| :---------- | :------------- | :--------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to remove. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:87](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L87)

---

### cancelDirectListing

▸ **cancelDirectListing**(`listingId`): `Promise`<`void`\>

Cancels a direct listing by updating the quantity to be sold to 0.

#### Parameters

| Name        | Type           | Description                  |
| :---------- | :------------- | :--------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to remove. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:79](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L79)

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

| Name        | Type           | Description                                                        |
| :---------- | :------------- | :----------------------------------------------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to remove.                                       |
| `closeFor?` | `string`       | The address of the wallet to close the sale for (buyer or seller). |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:107](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L107)

---

### createAuctionListing

▸ **createAuctionListing**(`listing`): `Promise`<`BigNumber`\>

Creates a new auction listing on a marketplace.

#### Parameters

| Name      | Type                                     | Description                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `listing` | [`NewAuctionListing`](NewAuctionListing) | The new auction listing to create. |

#### Returns

`Promise`<`BigNumber`\>

- The ID of the newly created listing.

#### Defined in

[src/interfaces/modules/IMarketplace.ts:25](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L25)

---

### createDirectListing

▸ **createDirectListing**(`listing`): `Promise`<`BigNumber`\>

Creates a new direct listing on a marketplace.

#### Parameters

| Name      | Type                                   | Description                       |
| :-------- | :------------------------------------- | :-------------------------------- |
| `listing` | [`NewDirectListing`](NewDirectListing) | The new direct listing to create. |

#### Returns

`Promise`<`BigNumber`\>

- The ID of the newly created listing.

#### Defined in

[src/interfaces/modules/IMarketplace.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L17)

---

### getActiveOffer

▸ **getActiveOffer**(`listingId`, `address`): `Promise`<`undefined` \| [`Offer`](Offer)\>

If the `address` has made an offer to the specified listing,
this method will fetch the offer and return it. If no
offer has been made, this method will return `undefined`.

#### Parameters

| Name        | Type           | Description                          |
| :---------- | :------------- | :----------------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to get offers for. |
| `address`   | `string`       | Address of the buyer.                |

#### Returns

`Promise`<`undefined` \| [`Offer`](Offer)\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:184](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L184)

---

### getAllListings

▸ **getAllListings**(): `Promise`<([`DirectListing`](DirectListing) \| [`AuctionListing`](AuctionListing))[]\>

Fetch all the listings in the marketplace.

#### Returns

`Promise`<([`DirectListing`](DirectListing) \| [`AuctionListing`](AuctionListing))[]\>

- An array of listings.

#### Defined in

[src/interfaces/modules/IMarketplace.ts:234](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L234)

---

### getAuctionListing

▸ **getAuctionListing**(`listingId`): `Promise`<[`AuctionListing`](AuctionListing)\>

Fetch an auction listing by Id.

#### Parameters

| Name        | Type           | Description                 |
| :---------- | :------------- | :-------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to fetch. |

#### Returns

`Promise`<[`AuctionListing`](AuctionListing)\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:220](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L220)

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

#### Defined in

[src/interfaces/modules/IMarketplace.ts:247](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L247)

---

### getDirectListing

▸ **getDirectListing**(`listingId`): `Promise`<[`DirectListing`](DirectListing)\>

Fetch a direct listing by Id.

#### Parameters

| Name        | Type           | Description                 |
| :---------- | :------------- | :-------------------------- |
| `listingId` | `BigNumberish` | Id of the listing to fetch. |

#### Returns

`Promise`<[`DirectListing`](DirectListing)\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:213](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L213)

---

### getListing

▸ **getListing**(`listingId`): `Promise`<[`DirectListing`](DirectListing) \| [`AuctionListing`](AuctionListing)\>

Helper method to fetch a listing without knowing the type.

#### Parameters

| Name        | Type           | Description                     |
| :---------- | :------------- | :------------------------------ |
| `listingId` | `BigNumberish` | The ID of the listing to fetch. |

#### Returns

`Promise`<[`DirectListing`](DirectListing) \| [`AuctionListing`](AuctionListing)\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:227](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L227)

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

#### Defined in

[src/interfaces/modules/IMarketplace.ts:263](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L263)

---

### getWinningBid

▸ **getWinningBid**(`listingId`): `Promise`<`undefined` \| [`Offer`](Offer)\>

If there's a winning big on the listing,
this method will return it.

#### Parameters

| Name        | Type           | Description                           |
| :---------- | :------------- | :------------------------------------ |
| `listingId` | `BigNumberish` | Id of the listing to get the bid for. |

#### Returns

`Promise`<`undefined` \| [`Offer`](Offer)\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:195](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L195)

---

### makeAuctionListingBid

▸ **makeAuctionListingBid**(`bid`): `Promise`<`void`\>

Make an offer on an auction. The offer must be at least `current bid * bid buffer %)` in order to be accepted.

Bid buffer is configured on the Marketplace contract.

Note: If you make a bid above the buyout price, you will automatically be awarded the
the listing and the sale will be executed.

// TODO: come back to `currencyContractAddress`

#### Parameters

| Name                | Type           |
| :------------------ | :------------- |
| `bid`               | `Object`       |
| `bid.listingId`     | `BigNumberish` |
| `bid.pricePerToken` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:69](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L69)

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

#### Defined in

[src/interfaces/modules/IMarketplace.ts:49](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L49)

---

### setBidBufferBps

▸ **setBidBufferBps**(`buffer`): `Promise`<`void`\>

Sets the bid buffer on the marketplace contract.
The bid buffer is represented in basis points.

#### Parameters

| Name     | Type           | Description                     |
| :------- | :------------- | :------------------------------ |
| `buffer` | `BigNumberish` | The bid buffer in basis points. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:271](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L271)

---

### setTimeBufferInSeconds

▸ **setTimeBufferInSeconds**(`buffer`): `Promise`<`void`\>

Sets the current time buffer on the marketplace contract.

#### Parameters

| Name     | Type           | Description                 |
| :------- | :------------- | :-------------------------- |
| `buffer` | `BigNumberish` | The time buffer in seconds. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:278](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L278)

---

### updateAuctionListing

▸ **updateAuctionListing**(`listing`): `Promise`<`void`\>

Updates an auction listing.

#### Parameters

| Name      | Type                               | Description            |
| :-------- | :--------------------------------- | :--------------------- |
| `listing` | [`AuctionListing`](AuctionListing) | The listing to update. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L39)

---

### updateDirectListing

▸ **updateDirectListing**(`listing`): `Promise`<`void`\>

Updates a direct listing.

#### Parameters

| Name      | Type                             | Description            |
| :-------- | :------------------------------- | :--------------------- |
| `listing` | [`DirectListing`](DirectListing) | The listing to update. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/interfaces/modules/IMarketplace.ts:32](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/interfaces/modules/IMarketplace.ts#L32)
