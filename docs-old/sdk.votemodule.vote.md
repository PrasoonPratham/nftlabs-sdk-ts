<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [VoteModule](./sdk.votemodule.md) &gt; [vote](./sdk.votemodule.vote.md)

## VoteModule.vote() method

Vote

<b>Signature:</b>

```typescript
vote(proposalId: string, voteType: VoteType, reason?: string): Promise<void>;
```

## Parameters

| Parameter  | Type                          | Description                                     |
| ---------- | ----------------------------- | ----------------------------------------------- |
| proposalId | string                        | The proposal to cast a vote on.                 |
| voteType   | [VoteType](./sdk.votetype.md) | The position the voter is taking on their vote. |
| reason     | string                        | (optional) The reason for the vote.             |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

Vote on an active proposal

## Example

```javascript
// The proposal ID of the proposal you want to vote on
const proposalId = "0";
// The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
const voteType = VoteType.For;
// The (optional) reason for the vote
const reason = "I like this proposal!";

await module.vote(proposalId, voteType, reason);
```
