<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [PermitRequestMessage](./sdk.permitrequestmessage.md)

## PermitRequestMessage type

EIP-2612 token permit message for gasless transaction

<b>Signature:</b>

```typescript
export declare type PermitRequestMessage = {
  to: string;
  owner: string;
  spender: string;
  value: number | string;
  nonce: number | string;
  deadline: number | string;
};
```
