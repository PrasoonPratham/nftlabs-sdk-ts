---
id: "SplitsModule"
title: "Class: SplitsModule"
sidebar_label: "SplitsModule"
sidebar_position: 0
custom_edit_url: null
---

Create custom royalty splits to distribute funds.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getSplitsModule("{{module_address}}");
```

## Hierarchy

- [`Module`](Module)<`Royalty`\>

  ↳ **`SplitsModule`**

## Implements

- [`ISplitsModule`](../interfaces/ISplitsModule)

## Constructors

### constructor

• **new SplitsModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address`          | `string`                                          |
| `options`          | [`ISDKOptions`](../interfaces/ISDKOptions)        |
| `sdk`              | [`ThirdwebSDK`](ThirdwebSDK)                      |

#### Inherited from

[Module](Module).[constructor](Module#constructor)

#### Defined in

[src/core/module.ts:103](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L103)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[Module](Module).[address](Module#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L45)

---

### contract

• **contract**: `Royalty`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[Module](Module).[contract](Module#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L93)

---

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[Module](Module).[ipfsGatewayUrl](Module#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L50)

---

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[Module](Module).[options](Module#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L55)

---

### readOnlyContract

• **readOnlyContract**: `Royalty`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[Module](Module).[readOnlyContract](Module#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L98)

---

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[Module](Module).[sdk](Module#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L57)

---

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType)

#### Defined in

[src/modules/royalty.ts:99](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L99)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

Module.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L66)

• `Protected` `set` **providerOrSigner**(`value`): `void`

**`internal`**

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `value` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

Module.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L70)

---

### signer

• `Protected` `get` **signer**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

Module.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L81)

• `Protected` `set` **signer**(`value`): `void`

**`internal`**

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `value` | `null` \| `Signer` |

#### Returns

`void`

#### Inherited from

Module.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L85)

## Methods

### \_pendingPayment

▸ `Private` **\_pendingPayment**(`address`, `totalReceived`, `alreadyReleased`): `Promise`<`BigNumber`\>

#### Parameters

| Name              | Type        |
| :---------------- | :---------- |
| `address`         | `string`    |
| `totalReceived`   | `BigNumber` |
| `alreadyReleased` | `BigNumber` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/royalty.ts:274](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L274)

---

### balanceOf

▸ **balanceOf**(`address`): `Promise`<`BigNumber`\>

Get Funds

**`remarks`** Get the amount of funds in the native currency held by the module thats owed to a specific recipient.

**`example`**

```javascript
// The address to check the funds of
const address = "{{wallet_address}}";
const funds = await module.balanceOf(address);
console.log(funds);
```

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[balanceOf](../interfaces/ISplitsModule#balanceof)

#### Defined in

[src/modules/royalty.ts:220](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L220)

---

### balanceOfAllRecipients

▸ **balanceOfAllRecipients**(): `Promise`<{ [key: string]: `BigNumber`; }\>

Returns all the recipients and their balances in the native currency.

#### Returns

`Promise`<{ [key: string]: `BigNumber`; }\>

A map of recipient addresses to their balances in the native currency.

#### Defined in

[src/modules/royalty.ts:165](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L165)

---

### balanceOfToken

▸ **balanceOfToken**(`walletAddress`, `tokenAddress`): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

Get Token Funds

**`remarks`** Get the amount of funds in the non-native tokens held by the module thats owed to a specific recipient.

**`example`**

```javascript
// The address to check the funds of
const address = "{{wallet_address}}";
// The address of the currency to check the contracts funds of
const tokenAddress = "0x...";
const funds = await module.balanceOfToken(address, tokenAddress);
console.log(funds);
```

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `walletAddress` | `string` |
| `tokenAddress`  | `string` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[balanceOfToken](../interfaces/ISplitsModule#balanceoftoken)

#### Defined in

[src/modules/royalty.ts:249](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L249)

---

### balanceOfTokenAllRecipients

▸ **balanceOfTokenAllRecipients**(`tokenAddress`): `Promise`<{ [key: string]: [`CurrencyValue`](../interfaces/CurrencyValue); }\>

Returns all the recipients and their balances in a non-native currency.

#### Parameters

| Name           | Type     | Description                                           |
| :------------- | :------- | :---------------------------------------------------- |
| `tokenAddress` | `string` | The address of the currency to check the balances in. |

#### Returns

`Promise`<{ [key: string]: [`CurrencyValue`](../interfaces/CurrencyValue); }\>

A map of recipient addresses to their balances in the specified currency.

#### Defined in

[src/modules/royalty.ts:180](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L180)

---

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[Module](Module).[clearSigner](Module#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L188)

---

### connectContract

▸ `Protected` **connectContract**(): `Royalty`

**`internal`**

#### Returns

`Royalty`

#### Overrides

[Module](Module).[connectContract](Module#connectcontract)

#### Defined in

[src/modules/royalty.ts:104](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L104)

---

### distribute

▸ **distribute**(): `Promise`<`void`\>

Distribute Funds

**`remarks`** Distribute funds held by the contract in the native currency to all recipients.

**`example`**

```javascript
await module.distribute();
```

#### Returns

`Promise`<`void`\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[distribute](../interfaces/ISplitsModule#distribute)

#### Defined in

[src/modules/royalty.ts:308](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L308)

---

### distributeToken

▸ **distributeToken**(`tokenAddress`): `Promise`<`void`\>

Distribute Funds

**`remarks`** Distribute funds held by the contract in the native currency to all recipients.

**`example`**

```javascript
// The address of the currency to distribute funds
const tokenAddress = "0x...";
await module.distributeToken(tokenAddress);
```

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[distributeToken](../interfaces/ISplitsModule#distributetoken)

#### Defined in

[src/modules/royalty.ts:324](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L324)

---

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[Module](Module).[exists](Module#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L126)

---

### get

▸ **get**(): `Promise`<[`Currency`](../interfaces/Currency)\>

#### Returns

`Promise`<[`Currency`](../interfaces/Currency)\>

#### Defined in

[src/modules/royalty.ts:115](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L115)

---

### getAllRecipients

▸ **getAllRecipients**(): `Promise`<[`SplitRecipient`](../interfaces/SplitRecipient)[]\>

Get Recipients

**`remarks`** Get the data about the shares of every split recipient on the module

**`example`**

```javascript
const recipients = await module.getAllRecepients();
console.log(recipients);
```

#### Returns

`Promise`<[`SplitRecipient`](../interfaces/SplitRecipient)[]\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[getAllRecipients](../interfaces/ISplitsModule#getallrecipients)

#### Defined in

[src/modules/royalty.ts:130](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L130)

---

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[Module](Module).[getCallOverrides](Module#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L261)

---

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[Module](Module).[getChainID](Module#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L235)

---

### getMetadata

▸ **getMetadata**(`resolveUrls?`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name          | Type      | Default value | Description                                               |
| :------------ | :-------- | :------------ | :-------------------------------------------------------- |
| `resolveUrls` | `boolean` | `true`        | Whether to resolve the urls in the metadata to a gateway. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[Module](Module).[getMetadata](Module#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L138)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[Module](Module).[getModuleType](Module#getmoduletype)

#### Defined in

[src/modules/royalty.ts:111](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L111)

---

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[Module](Module).[getProvider](Module#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L228)

---

### getRecipientSplitPercentage

▸ **getRecipientSplitPercentage**(`address`): `Promise`<[`SplitRecipient`](../interfaces/SplitRecipient)\>

Get the split percentage of a recipient.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |

#### Returns

`Promise`<[`SplitRecipient`](../interfaces/SplitRecipient)\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[getRecipientSplitPercentage](../interfaces/ISplitsModule#getrecipientsplitpercentage)

#### Defined in

[src/modules/royalty.ts:191](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L191)

---

### getSigner

▸ `Protected` **getSigner**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

[Module](Module).[getSigner](Module#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L202)

---

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[Module](Module).[getSignerAddress](Module#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L219)

---

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[Module](Module).[hasValidSigner](Module#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L212)

---

### parseEventLogs

▸ `Protected` **parseEventLogs**(`eventName`, `logs?`): `any`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `eventName` | `string` |
| `logs?`     | `Log`[]  |

#### Returns

`any`

#### Inherited from

[Module](Module).[parseEventLogs](Module#parseeventlogs)

#### Defined in

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L452)

---

### parseLogs

▸ `Protected` **parseLogs**<`T`\>(`eventName`, `logs?`, `contract?`): `T`[]

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `eventName` | `string`       |
| `logs?`     | `Log`[]        |
| `contract`  | `BaseContract` |

#### Returns

`T`[]

#### Inherited from

[Module](Module).[parseLogs](Module#parselogs)

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L471)

---

### sendContractTransaction

▸ `Protected` **sendContractTransaction**(`contract`, `fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `contract`       | `BaseContract`  |
| `fn`             | `string`        |
| `args`           | `any`[]         |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[Module](Module).[sendContractTransaction](Module#sendcontracttransaction)

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L306)

---

### sendTransaction

▸ `Protected` **sendTransaction**(`fn`, `args`, `callOverrides?`): `Promise`<`TransactionReceipt`\>

**`internal`**

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `fn`             | `string`        |
| `args`           | `any`[]         |
| `callOverrides?` | `CallOverrides` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[Module](Module).[sendTransaction](Module#sendtransaction)

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L295)

---

### setMetadata

▸ **setMetadata**(`metadata`): `Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Parameters

| Name       | Type                                                    | Description          |
| :--------- | :------------------------------------------------------ | :------------------- |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The metadata to set. |

#### Returns

`Promise`<[`ModuleMetadata`](../interfaces/ModuleMetadata)\>

#### Inherited from

[Module](Module).[setMetadata](Module#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L160)

---

### setProviderOrSigner

▸ **setProviderOrSigner**(`providerOrSigner`): `void`

**`internal`**

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

[Module](Module).[setProviderOrSigner](Module#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L172)

---

### signTypedData

▸ `Protected` **signTypedData**(`signer`, `from`, `domain`, `types`, `message`): `Promise`<`BytesLike`\>

#### Parameters

| Name                       | Type     |
| :------------------------- | :------- |
| `signer`                   | `Signer` |
| `from`                     | `string` |
| `domain`                   | `Object` |
| `domain.chainId`           | `number` |
| `domain.name`              | `string` |
| `domain.verifyingContract` | `string` |
| `domain.version`           | `string` |
| `types`                    | `any`    |
| `message`                  | `any`    |

#### Returns

`Promise`<`BytesLike`\>

#### Inherited from

[Module](Module).[signTypedData](Module#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/core/module.ts#L415)

---

### withdraw

▸ **withdraw**(`address`): `Promise`<`void`\>

Transaction that will withdraw the split amount of royalty that
the `address` is owed and transfer it to the wallet.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[withdraw](../interfaces/ISplitsModule#withdraw)

#### Defined in

[src/modules/royalty.ts:270](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L270)

---

### withdrawToken

▸ **withdrawToken**(`walletAddress`, `tokenAddress`): `Promise`<`void`\>

Transaction that will withdraw the split amount of royalty that
the `address` is owed and transfer it to the wallet, in the
currency specified by `tokenAddress`.

For example: If the native currency of a chain is ETH but the user
wants to withdraw their split in $MATIC, they should pass
the address of the $MATIC token as the `tokenAddress` parameter.

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `walletAddress` | `string` |
| `tokenAddress`  | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ISplitsModule](../interfaces/ISplitsModule).[withdrawToken](../interfaces/ISplitsModule#withdrawtoken)

#### Defined in

[src/modules/royalty.ts:288](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/68c3596/src/modules/royalty.ts#L288)
