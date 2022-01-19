---
id: "NewSplitRecipient"
title: "Interface: NewSplitRecipient"
sidebar_label: "NewSplitRecipient"
sidebar_position: 0
custom_edit_url: null
---

The NewSplitRecipient interface describes the structure of a new split recipient.
The `shares` property is important for the calculation of the the total split.

If there are two recipients each with 10 shares, they each will receive 50%
of the total royalties.

If there are two recipients each with 1 share, they each will receive 50%
of the total royalties.

I.e. the total number of shares is used to calculate the percentage of the
total royalties that is allocated to each recipient.

## Properties

### address

• **address**: `string`

The address of the recipient

#### Defined in

[src/types/module-deployments/NewSplitRecipient.ts:20](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/NewSplitRecipient.ts#L20)

___

### shares

• **shares**: `BigNumberish`

The number of shares for the recipient

#### Defined in

[src/types/module-deployments/NewSplitRecipient.ts:25](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/module-deployments/NewSplitRecipient.ts#L25)
