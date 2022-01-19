---
id: "NewDirectListing"
title: "Interface: NewDirectListing"
sidebar_label: "NewDirectListing"
sidebar_position: 0
custom_edit_url: null
---

Represents a new marketplace direct listing.

## Properties

### assetContractAddress

• **assetContractAddress**: `string`

The address of the asset being listed.

#### Defined in

[src/types/marketplace/NewDirectListing.ts:12](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L12)

---

### buyoutPricePerToken

• **buyoutPricePerToken**: `BigNumberish`

The buyout price of the listing.

So if the `quantity = 10` and the `reserve price = 1`, then the buyout price
is 10 coins (of the configured currency).

#### Defined in

[src/types/marketplace/NewDirectListing.ts:47](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L47)

---

### currencyContractAddress

• **currencyContractAddress**: `string`

The address of the currency to accept for the listing.

#### Defined in

[src/types/marketplace/NewDirectListing.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L39)

---

### listingDurationInSeconds

• **listingDurationInSeconds**: `BigNumberish`

The duration of the listing in seconds.

#### Defined in

[src/types/marketplace/NewDirectListing.ts:27](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L27)

---

### quantity

• **quantity**: `BigNumberish`

The quantity of tokens to include in the listing.

For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).

#### Defined in

[src/types/marketplace/NewDirectListing.ts:34](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L34)

---

### startTimeInSeconds

• **startTimeInSeconds**: `BigNumberish`

The start time of the listing.

#### Defined in

[src/types/marketplace/NewDirectListing.ts:22](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L22)

---

### tokenId

• **tokenId**: `BigNumberish`

The ID of the token to list.

#### Defined in

[src/types/marketplace/NewDirectListing.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L17)

---

### type

• `Optional` **type**: `"NewDirectListing"`

#### Defined in

[src/types/marketplace/NewDirectListing.ts:7](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/marketplace/NewDirectListing.ts#L7)
