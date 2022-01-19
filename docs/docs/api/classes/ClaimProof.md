---
id: "ClaimProof"
title: "Class: ClaimProof"
sidebar_label: "ClaimProof"
sidebar_position: 0
custom_edit_url: null
---

The model for a claim proof. Currently we support only an address
in the leaf of the merkle tree.

## Constructors

### constructor

• **new ClaimProof**()

## Properties

### address

• **address**: `string` = `""`

The address of the account that owns the claim.

#### Defined in

[src/types/snapshots/ClaimProof.ts:13](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/snapshots/ClaimProof.ts#L13)

___

### proof

• **proof**: `string`[] = `[]`

The proof of the claim (an array of hashes, depending on tree depth)

#### Defined in

[src/types/snapshots/ClaimProof.ts:19](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/types/snapshots/ClaimProof.ts#L19)
