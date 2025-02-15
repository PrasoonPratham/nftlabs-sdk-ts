---
id: "Proposal"
title: "Interface: Proposal"
sidebar_label: "Proposal"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### description

• **description**: `string`

The description of the proposal.

#### Defined in

[src/types/vote/Proposal.ts:20](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L20)

---

### endBlock

• **endBlock**: `BigNumber`

#### Defined in

[src/types/vote/Proposal.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L23)

---

### executions

• **executions**: [`ProposalExecutable`](ProposalExecutable)[]

All executions that have been proposed for the proposal.

#### Defined in

[src/types/vote/Proposal.ts:38](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L38)

---

### proposalId

• **proposalId**: `string`

The unique identifier of the proposal.

#### Defined in

[src/types/vote/Proposal.ts:10](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L10)

---

### proposer

• **proposer**: `string`

The address of the wallet that created the proposal.

#### Defined in

[src/types/vote/Proposal.ts:15](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L15)

---

### startBlock

• **startBlock**: `BigNumber`

#### Defined in

[src/types/vote/Proposal.ts:22](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L22)

---

### state

• **state**: [`ProposalState`](../enums/ProposalState)

The current state of the proposal.

#### Defined in

[src/types/vote/Proposal.ts:28](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L28)

---

### votes

• **votes**: [`ProposalVote`](ProposalVote)[]

All votes that have been casted on the proposal.

#### Defined in

[src/types/vote/Proposal.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/types/vote/Proposal.ts#L33)
