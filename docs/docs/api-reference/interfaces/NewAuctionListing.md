---
id: "NewAuctionListing"
title: "Interface: NewAuctionListing"
sidebar_label: "NewAuctionListing"
sidebar_position: 0
custom_edit_url: null
---

Represents a new marketplace auction listing.

## Properties

### assetContractAddress

• **assetContractAddress**: `string`

The address of the asset being listed.

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:12](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L12)

___

### buyoutPricePerToken

• **buyoutPricePerToken**: `BigNumberish`

The buyout price of the listing.

So if the `quantity = 10` and the `reserve price = 1`, then the buyout price
is 10 coins (of the configured currency).

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:56](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L56)

___

### currencyContractAddress

• **currencyContractAddress**: `string`

The address of the currency to accept for the listing.

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L39)

___

### listingDurationInSeconds

• **listingDurationInSeconds**: `BigNumberish`

The duration of the listing in seconds.

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:27](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L27)

___

### quantity

• **quantity**: `BigNumberish`

The quantity of tokens to include in the listing.

For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:34](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L34)

___

### reservePricePerToken

• **reservePricePerToken**: `BigNumberish`

The reserve price is the minimum price that a bid must be in order to be accepted,
per token.

So if the `quantity = 10` and the `reserve price = 1`, then the minimum bid
is 10 coins (of the configured currency).

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:48](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L48)

___

### startTimeInSeconds

• **startTimeInSeconds**: `BigNumberish`

The start time of the listing.

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:22](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L22)

___

### tokenId

• **tokenId**: `BigNumberish`

The ID of the token to list.

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L17)

___

### type

• `Optional` **type**: ``"NewAuctionListing"``

#### Defined in

[src/types/marketplace/NewAuctionListing.ts:7](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/marketplace/NewAuctionListing.ts#L7)
