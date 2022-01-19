---
id: "VoteModule"
title: "Class: VoteModule"
sidebar_label: "VoteModule"
sidebar_position: 0
custom_edit_url: null
---

Create a decentralized organization for token holders to vote on proposals.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getVoteModule("{{module_address}}");
```

## Hierarchy

- [`Module`](Module)<`VotingGovernor`\>

  ↳ **`VoteModule`**

## Constructors

### constructor

• **new VoteModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address` | `string` |
| `options` | [`ISDKOptions`](../interfaces/ISDKOptions) |
| `sdk` | [`ThirdwebSDK`](ThirdwebSDK) |

#### Inherited from

[Module](Module).[constructor](Module#constructor)

#### Defined in

[src/core/module.ts:103](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L103)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[Module](Module).[address](Module#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L45)

___

### contract

• **contract**: `VotingGovernor`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[Module](Module).[contract](Module#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L93)

___

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[Module](Module).[ipfsGatewayUrl](Module#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L50)

___

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[Module](Module).[options](Module#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L55)

___

### readOnlyContract

• **readOnlyContract**: `VotingGovernor`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[Module](Module).[readOnlyContract](Module#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L98)

___

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[Module](Module).[sdk](Module#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L57)

___

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType)

#### Defined in

[src/modules/vote.ts:46](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L46)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

Module.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L66)

• `Protected` `set` **providerOrSigner**(`value`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

Module.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L70)

___

### signer

• `Protected` `get` **signer**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

Module.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L81)

• `Protected` `set` **signer**(`value`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `Signer` |

#### Returns

`void`

#### Inherited from

Module.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L85)

## Methods

### balance

▸ **balance**(): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

Check the balance of the project wallet in the native token of the chain

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

- The balance of the project in the native token of the chain

#### Defined in

[src/modules/vote.ts:370](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L370)

___

### balanceOfToken

▸ **balanceOfToken**(`tokenAddress`): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

Check the balance of the project wallet in a particular
ERC20 token contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

- The balance of the project in the native token of the chain

#### Defined in

[src/modules/vote.ts:389](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L389)

___

### canExecute

▸ **canExecute**(`proposalId`): `Promise`<`boolean`\>

Can Execute

**`remarks`** Check if a proposal can be executed (if the proposal has succeeded).

**`example`**
```javascript
// The proposal ID of the proposal you want to check
const proposalId = "0";
const canExecute = await module.canExecute(proposalId);
console.log(canExecute);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The proposal ID to check. |

#### Returns

`Promise`<`boolean`\>

- True if the proposal can be executed, false otherwise.

#### Defined in

[src/modules/vote.ts:344](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L344)

___

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[Module](Module).[clearSigner](Module#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L188)

___

### connectContract

▸ `Protected` **connectContract**(): `VotingGovernor`

**`internal`**

#### Returns

`VotingGovernor`

#### Overrides

[Module](Module).[connectContract](Module#connectcontract)

#### Defined in

[src/modules/vote.ts:51](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L51)

___

### ensureExists

▸ `Private` **ensureExists**(`proposalId`): `Promise`<`void`\>

Find a proposal by its id.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | Proposal to check for |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/vote.ts:414](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L414)

___

### execute

▸ **execute**(`proposalId`): `Promise`<`void`\>

Execute Proposal

**`remarks`** Execute the related transactions for a proposal if the proposal succeeded.

**`example`**
```javascript
// The proposal ID ofthe proposal you want to execute
const proposalId = "0"
await module.execute(proposalId);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The proposal id to execute. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/vote.ts:312](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L312)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[Module](Module).[exists](Module#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L126)

___

### get

▸ **get**(`proposalId`): `Promise`<[`Proposal`](../interfaces/Proposal)\>

Get a proposal by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The proposal id to get. |

#### Returns

`Promise`<[`Proposal`](../interfaces/Proposal)\>

- The proposal.

#### Defined in

[src/modules/vote.ts:96](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L96)

___

### getAll

▸ **getAll**(): `Promise`<[`Proposal`](../interfaces/Proposal)[]\>

Get All Proposals

**`remarks`** Get all the proposals in this module.

**`example`**
```javascript
const proposals = await module.getAll();
console.log(proposals);
```

#### Returns

`Promise`<[`Proposal`](../interfaces/Proposal)[]\>

- All the proposals in the contract.

#### Defined in

[src/modules/vote.ts:122](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L122)

___

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[Module](Module).[getCallOverrides](Module#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L261)

___

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[Module](Module).[getChainID](Module#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L235)

___

### getMetadata

▸ **getMetadata**(`resolveUrls?`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `resolveUrls` | `boolean` | `true` | Whether to resolve the urls in the metadata to a gateway. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[Module](Module).[getMetadata](Module#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L138)

___

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[Module](Module).[getModuleType](Module#getmoduletype)

#### Defined in

[src/modules/vote.ts:58](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L58)

___

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[Module](Module).[getProvider](Module#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L228)

___

### getSigner

▸ `Protected` **getSigner**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

[Module](Module).[getSigner](Module#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L202)

___

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[Module](Module).[getSignerAddress](Module#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L219)

___

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[Module](Module).[hasValidSigner](Module#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L212)

___

### hasVoted

▸ **hasVoted**(`proposalId`, `account?`): `Promise`<`boolean`\>

Check If Wallet Voted

**`remarks`** Check if a specified wallet has voted a specific proposal

**`example`**
```javascript
// The proposal ID of the proposal you want to check
const proposalId = "0";
// The address of the wallet you want to check to see if they voted
const address = "{{wallet_address}}";

await module.hasVoted(proposalId, address);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The unique identifier of a proposal . |
| `account?` | `string` | (optional) wallet account address. Defaults to connected signer. |

#### Returns

`Promise`<`boolean`\>

- True if the account has already voted on the proposal.

#### Defined in

[src/modules/vote.ts:288](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L288)

___

### parseEventLogs

▸ `Protected` **parseEventLogs**(`eventName`, `logs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `logs?` | `Log`[] |

#### Returns

`any`

#### Inherited from

[Module](Module).[parseEventLogs](Module#parseeventlogs)

#### Defined in

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L452)

___

### parseLogs

▸ `Protected` **parseLogs**<`T`\>(`eventName`, `logs?`, `contract?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `logs?` | `Log`[] |
| `contract` | `BaseContract` |

#### Returns

`T`[]

#### Inherited from

[Module](Module).[parseLogs](Module#parselogs)

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L471)

___

### propose

▸ **propose**(`description`, `executions?`): `Promise`<`BigNumber`\>

Create Proposal

**`remarks`** Create a new proposal for token holders to vote on.

**`example`**
```javascript
// The description of the proposal you want to pass
const description = "This is a great proposal - vote for it!"
// You can (optionally) pass in contract calls that will executed when the proposal is executed.
const executions = [
  {
    // The contract you want to make a call to
    toAddress: "0x...",
    // The amount of the native currency to send in this transaction
    nativeTokenValue: 0,
    // Transaction data that will be executed when the proposal is executed
    // This is an example transfer transaction with a token module (which you would need to setup in code)
    transactionData: tokenModule.contract.interface.encodeFunctionData(
      "transfer", [
        fromAddress,
        amount,
      ]
    ),
  }
]

const proposal = await module.propose(description, executions);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description of the proposal. |
| `executions?` | [`ProposalExecutable`](../interfaces/ProposalExecutable)[] | A set of executable transactions that will be run if the proposal is passed and executed. |

#### Returns

`Promise`<`BigNumber`\>

- The id of the created proposal.

#### Defined in

[src/modules/vote.ts:216](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L216)

___

### sendContractTransaction

▸ `Protected` **sendContractTransaction**(`contract`, `fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `fn` | `string` |
| `args` | `any`[] |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[Module](Module).[sendContractTransaction](Module#sendcontracttransaction)

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L306)

___

### sendTransaction

▸ `Protected` **sendTransaction**(`fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `string` |
| `args` | `any`[] |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[Module](Module).[sendTransaction](Module#sendtransaction)

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L295)

___

### setMetadata

▸ **setMetadata**(`metadata`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The metadata to set. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[Module](Module).[setMetadata](Module#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L160)

___

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/vote.ts:401](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L401)

___

### setProviderOrSigner

▸ **setProviderOrSigner**(`providerOrSigner`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

[Module](Module).[setProviderOrSigner](Module#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L172)

___

### settings

▸ **settings**(): `Promise`<[`VoteSettings`](../interfaces/VoteSettings)\>

#### Returns

`Promise`<[`VoteSettings`](../interfaces/VoteSettings)\>

#### Defined in

[src/modules/vote.ts:62](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L62)

___

### signTypedData

▸ `Protected` **signTypedData**(`signer`, `from`, `domain`, `types`, `message`): `Promise`<`BytesLike`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `from` | `string` |
| `domain` | `Object` |
| `domain.chainId` | `number` |
| `domain.name` | `string` |
| `domain.verifyingContract` | `string` |
| `domain.version` | `string` |
| `types` | `any` |
| `message` | `any` |

#### Returns

`Promise`<`BytesLike`\>

#### Inherited from

[Module](Module).[signTypedData](Module#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/core/module.ts#L415)

___

### vote

▸ **vote**(`proposalId`, `voteType`, `reason?`): `Promise`<`void`\>

Vote

**`remarks`** Vote on an active proposal

**`example`**
```javascript
// The proposal ID of the proposal you want to vote on
const proposalId = "0";
// The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
const voteType = VoteType.For;
// The (optional) reason for the vote
const reason = "I like this proposal!";

await module.vote(proposalId, voteType, reason);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `proposalId` | `string` | `undefined` | The proposal to cast a vote on. |
| `voteType` | [`VoteType`](../enums/VoteType) | `undefined` | The position the voter is taking on their vote. |
| `reason` | `string` | `""` | (optional) The reason for the vote. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/vote.ts:259](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/modules/vote.ts#L259)
