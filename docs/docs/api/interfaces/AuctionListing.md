---
id: "AuctionListing"
title: "Interface: AuctionListing"
sidebar_label: "AuctionListing"
sidebar_position: 0
custom_edit_url: null
---

Represents a new marketplace auction listing.

## Properties

### asset

• **asset**: [`NFTMetadata`](NFTMetadata)

The asset being listed.

#### Defined in

[src/types/marketplace/AuctionListing.ts:28](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L28)

---

### assetContractAddress

• **assetContractAddress**: `string`

The address of the asset being listed.

#### Defined in

[src/types/marketplace/AuctionListing.ts:18](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L18)

---

### buyoutCurrencyValuePerToken

• **buyoutCurrencyValuePerToken**: [`CurrencyValue`](CurrencyValue)

The `CurrencyValue` of the buyout price listing.
Useful for displaying the price information.

#### Defined in

[src/types/marketplace/AuctionListing.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L66)

---

### buyoutPrice

• **buyoutPrice**: `BigNumberish`

The buyout price of the listing.

#### Defined in

[src/types/marketplace/AuctionListing.ts:60](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L60)

---

### currencyContractAddress

• **currencyContractAddress**: `string`

The address of the currency to accept for the listing.

#### Defined in

[src/types/marketplace/AuctionListing.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L50)

---

### endTimeInEpochSeconds

• **endTimeInEpochSeconds**: `BigNumberish`

Number of seconds until the auction expires.

#### Defined in

[src/types/marketplace/AuctionListing.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L38)

---

### id

• **id**: `string`

The id of the listing

#### Defined in

[src/types/marketplace/AuctionListing.ts:13](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L13)

---

### quantity

• **quantity**: `BigNumberish`

The quantity of tokens to include in the listing.

For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).

#### Defined in

[src/types/marketplace/AuctionListing.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L45)

---

### reservePrice

• **reservePrice**: `BigNumberish`

The reserve price is the minimum price that a bid must be in order to be accepted.

#### Defined in

[src/types/marketplace/AuctionListing.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L55)

---

### reservePriceCurrencyValuePerToken

• **reservePriceCurrencyValuePerToken**: [`CurrencyValue`](CurrencyValue)

The `CurrencyValue` of the reserve price.
Useful for displaying the price information.

#### Defined in

[src/types/marketplace/AuctionListing.ts:72](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L72)

---

### sellerAddress

• **sellerAddress**: `string`

The address of the seller.

#### Defined in

[src/types/marketplace/AuctionListing.ts:77](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L77)

---

### startTimeInEpochSeconds

• **startTimeInEpochSeconds**: `BigNumberish`

The start time of the listing.

#### Defined in

[src/types/marketplace/AuctionListing.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L33)

---

### tokenId

• **tokenId**: `BigNumberish`

The ID of the token to list.

#### Defined in

[src/types/marketplace/AuctionListing.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L23)

---

### type

• **type**: [`Auction`](../enums/ListingType#auction)

#### Defined in

[src/types/marketplace/AuctionListing.ts:79](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/AuctionListing.ts#L79)
