---
id: "SplitRecipient"
title: "Interface: SplitRecipient"
sidebar_label: "SplitRecipient"
sidebar_position: 0
custom_edit_url: null
---

The SplitRecipient type represents a recipient of some royalty, indicated by their split percentage.

## Properties

### address

• **address**: `string`

The address of the recipient

#### Defined in

[src/types/SplitRecipient.ts:8](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/SplitRecipient.ts#L8)

___

### splitPercentage

• **splitPercentage**: `number`

The split of the recipient as a percentage of the total amount

I.e. If a recipient has a split of 50%, and the asset sells for 100 ETH,
the recipient will receive 50 ETH.

#### Defined in

[src/types/SplitRecipient.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/SplitRecipient.ts#L16)
