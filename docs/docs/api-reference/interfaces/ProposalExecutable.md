---
id: "ProposalExecutable"
title: "Interface: ProposalExecutable"
sidebar_label: "ProposalExecutable"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### nativeTokenValue

• **nativeTokenValue**: `BigNumberish`

The amount of a native token that may be sent if a proposal is executing a token transfer.

#### Defined in

[src/types/vote/ProposalExecutable.ts:14](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/vote/ProposalExecutable.ts#L14)

___

### toAddress

• **toAddress**: `string`

The address of the contract that the proposal will execute a transaction on.
If the proposal is sending a token to a wallet, this address should be the address
of the wallet that will be receiving the tokens.

#### Defined in

[src/types/vote/ProposalExecutable.ts:9](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/vote/ProposalExecutable.ts#L9)

___

### transactionData

• **transactionData**: `BytesLike`

The transaction payload that will be executed if the proposal is approved.

#### Defined in

[src/types/vote/ProposalExecutable.ts:19](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/types/vote/ProposalExecutable.ts#L19)
