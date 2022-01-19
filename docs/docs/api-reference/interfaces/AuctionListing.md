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

[src/types/marketplace/AuctionListing.ts:28](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L28)

___

### assetContractAddress

• **assetContractAddress**: `string`

The address of the asset being listed.

#### Defined in

[src/types/marketplace/AuctionListing.ts:18](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L18)

___

### buyoutCurrencyValuePerToken

• **buyoutCurrencyValuePerToken**: [`CurrencyValue`](CurrencyValue)

The `CurrencyValue` of the buyout price listing.
Useful for displaying the price information.

#### Defined in

[src/types/marketplace/AuctionListing.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L66)

___

### buyoutPrice

• **buyoutPrice**: `BigNumberish`

The buyout price of the listing.

#### Defined in

[src/types/marketplace/AuctionListing.ts:60](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L60)

___

### currencyContractAddress

• **currencyContractAddress**: `string`

The address of the currency to accept for the listing.

#### Defined in

[src/types/marketplace/AuctionListing.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L50)

___

### endTimeInEpochSeconds

• **endTimeInEpochSeconds**: `BigNumberish`

Number of seconds until the auction expires.

#### Defined in

[src/types/marketplace/AuctionListing.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L38)

___

### id

• **id**: `string`

The id of the listing

#### Defined in

[src/types/marketplace/AuctionListing.ts:13](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L13)

___

### quantity

• **quantity**: `BigNumberish`

The quantity of tokens to include in the listing.

For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).

#### Defined in

[src/types/marketplace/AuctionListing.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L45)

___

### reservePrice

• **reservePrice**: `BigNumberish`

The reserve price is the minimum price that a bid must be in order to be accepted.

#### Defined in

[src/types/marketplace/AuctionListing.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L55)

___

### reservePriceCurrencyValuePerToken

• **reservePriceCurrencyValuePerToken**: [`CurrencyValue`](CurrencyValue)

The `CurrencyValue` of the reserve price.
Useful for displaying the price information.

#### Defined in

[src/types/marketplace/AuctionListing.ts:72](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L72)

___

### sellerAddress

• **sellerAddress**: `string`

The address of the seller.

#### Defined in

[src/types/marketplace/AuctionListing.ts:77](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L77)

___

### startTimeInEpochSeconds

• **startTimeInEpochSeconds**: `BigNumberish`

The start time of the listing.

#### Defined in

[src/types/marketplace/AuctionListing.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L33)

___

### tokenId

• **tokenId**: `BigNumberish`

The ID of the token to list.

#### Defined in

[src/types/marketplace/AuctionListing.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L23)

___

### type

• **type**: [`Auction`](../enums/ListingType#auction)

#### Defined in

[src/types/marketplace/AuctionListing.ts:79](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/AuctionListing.ts#L79)
