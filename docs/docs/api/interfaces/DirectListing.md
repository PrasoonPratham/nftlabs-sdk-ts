---
id: "DirectListing"
title: "Interface: DirectListing"
sidebar_label: "DirectListing"
sidebar_position: 0
custom_edit_url: null
---

Represents a marketplace direct listing.

## Properties

### asset

• **asset**: [`NFTMetadata`](NFTMetadata)

The asset being listed.

#### Defined in

[src/types/marketplace/DirectListing.ts:28](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L28)

___

### assetContractAddress

• **assetContractAddress**: `string`

The address of the asset being listed.

#### Defined in

[src/types/marketplace/DirectListing.ts:18](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L18)

___

### buyoutCurrencyValuePerToken

• **buyoutCurrencyValuePerToken**: [`CurrencyValue`](CurrencyValue)

The `CurrencyValue` of the listing. Useful for displaying the price information.

#### Defined in

[src/types/marketplace/DirectListing.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L55)

___

### buyoutPrice

• **buyoutPrice**: `BigNumberish`

The buyout price of the listing.

#### Defined in

[src/types/marketplace/DirectListing.ts:60](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L60)

___

### currencyContractAddress

• **currencyContractAddress**: `string`

The address of the currency to accept for the listing.

#### Defined in

[src/types/marketplace/DirectListing.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L50)

___

### id

• **id**: `string`

The id of the listing.

#### Defined in

[src/types/marketplace/DirectListing.ts:13](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L13)

___

### quantity

• **quantity**: `BigNumberish`

The quantity of tokens to include in the listing.

For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).

#### Defined in

[src/types/marketplace/DirectListing.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L45)

___

### secondsUntilEnd

• **secondsUntilEnd**: `BigNumberish`

Number of seconds until the listing expires.

#### Defined in

[src/types/marketplace/DirectListing.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L38)

___

### sellerAddress

• **sellerAddress**: `string`

The address of the seller.

#### Defined in

[src/types/marketplace/DirectListing.ts:65](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L65)

___

### startTimeInSeconds

• **startTimeInSeconds**: `BigNumberish`

The start time of the listing.

#### Defined in

[src/types/marketplace/DirectListing.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L33)

___

### tokenId

• **tokenId**: `BigNumberish`

The ID of the token to list.

#### Defined in

[src/types/marketplace/DirectListing.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L23)

___

### type

• **type**: [`Direct`](../enums/ListingType#direct)

#### Defined in

[src/types/marketplace/DirectListing.ts:67](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/marketplace/DirectListing.ts#L67)
