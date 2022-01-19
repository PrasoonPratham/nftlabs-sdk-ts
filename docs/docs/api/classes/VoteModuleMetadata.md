---
id: "VoteModuleMetadata"
title: "Class: VoteModuleMetadata"
sidebar_label: "VoteModuleMetadata"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CommonModuleMetadata`](CommonModuleMetadata)

  ↳ **`VoteModuleMetadata`**

## Constructors

### constructor

• **new VoteModuleMetadata**()

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[constructor](CommonModuleMetadata#constructor)

## Properties

### description

• `Optional` **description**: `string` = `undefined`

The description of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[description](CommonModuleMetadata#description)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L23)

___

### externalLink

• `Optional` **externalLink**: `string` = `undefined`

An external link for the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[externalLink](CommonModuleMetadata#externallink)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L39)

___

### image

• `Optional` **image**: `string` \| `FileOrBuffer` = `undefined`

An image for the module.

If the image is a File or Buffer, it will be uploaded to IPFS.
If the image is a string, it will be used as-is (in case you already uploaded it to IPFS
and the property is the IPFS hash uri).

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[image](CommonModuleMetadata#image)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L33)

___

### minimumNumberOfTokensNeededToPropose

• **minimumNumberOfTokensNeededToPropose**: `string` = `"0"`

The minimum number of tokens required to propose a proposal.

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:53](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L53)

___

### name

• **name**: `string` = `""`

The name of the module.

#### Inherited from

[CommonModuleMetadata](CommonModuleMetadata).[name](CommonModuleMetadata#name)

#### Defined in

[src/types/module-deployments/CommonModuleMetadata.ts:17](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/CommonModuleMetadata.ts#L17)

___

### proposalStartWaitTimeInSeconds

• **proposalStartWaitTimeInSeconds**: `number` = `0`

The wait time before a proposal can begin being voted on (seconds).

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:10](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L10)

___

### proposalVotingTimeInSeconds

• **proposalVotingTimeInSeconds**: `number` = `0`

How long a proposal is open for voting (seconds).

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:16](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L16)

___

### votingDelay

• `Optional` **votingDelay**: `number` = `0`

**Do not set this property directly. It will be set by the SDK. Unless you know what you're doing.**

Every proposal will wait `votingDelay` number of blocks before it can be voted on.

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:24](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L24)

___

### votingPeriod

• `Optional` **votingPeriod**: `number` = `0`

**Do not set this property directly. It will be set by the SDK. Unless you know what you're doing.**

The voting period is the number of blocks that a proposal will be open for voting.
This varies by chain.

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:33](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L33)

___

### votingQuorumFraction

• **votingQuorumFraction**: `number` = `0`

Quorum required for a proposal to be successful. This value should be between 0-100 and represents a percentage.

By default it is set to 0.

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:47](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L47)

___

### votingTokenAddress

• **votingTokenAddress**: `string` = `""`

The ERC20 token address that is used in the voting process.

#### Defined in

[src/types/module-deployments/VoteModuleMetadata.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/ff1ad69/src/types/module-deployments/VoteModuleMetadata.ts#L39)
