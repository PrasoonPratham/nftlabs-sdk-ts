---
id: "TokenModule"
title: "Class: TokenModule"
sidebar_label: "TokenModule"
sidebar_position: 0
custom_edit_url: null
---

Create a standard crypto token or crypto currency.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getTokenModule("{{module_address}}");
```

## Hierarchy

- [`ModuleWithRoles`](ModuleWithRoles)<`Coin`\>

  ↳ **`TokenModule`**

  ↳↳ [`CurrencyModule`](CurrencyModule)

## Implements

- [`ITransferable`](../interfaces/ITransferable)

## Constructors

### constructor

• **new TokenModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name               | Type                                              |
| :----------------- | :------------------------------------------------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address`          | `string`                                          |
| `options`          | [`ISDKOptions`](../interfaces/ISDKOptions)        |
| `sdk`              | [`ThirdwebSDK`](ThirdwebSDK)                      |

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[constructor](ModuleWithRoles#constructor)

#### Defined in

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L509)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[address](ModuleWithRoles#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L45)

---

### contract

• **contract**: `Coin`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[contract](ModuleWithRoles#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L93)

---

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[ipfsGatewayUrl](ModuleWithRoles#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L50)

---

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[options](ModuleWithRoles#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L55)

---

### readOnlyContract

• **readOnlyContract**: `Coin`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[readOnlyContract](ModuleWithRoles#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L98)

---

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[sdk](ModuleWithRoles#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L57)

---

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType)

#### Defined in

[src/modules/token.ts:46](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L46)

---

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"pauser"``, ``"transfer"``]

#### Defined in

[src/modules/token.ts:48](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L48)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L66)

• `Protected` `set` **providerOrSigner**(`value`): `void`

**`internal`**

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `value` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

ModuleWithRoles.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L70)

---

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

ModuleWithRoles.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L504)

---

### signer

• `Protected` `get` **signer**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L81)

• `Protected` `set` **signer**(`value`): `void`

**`internal`**

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `value` | `null` \| `Signer` |

#### Returns

`void`

#### Inherited from

ModuleWithRoles.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L85)

## Methods

### allowance

▸ **allowance**(`spender`): `Promise`<`BigNumber`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/token.ts:117](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L117)

---

### allowanceOf

▸ **allowanceOf**(`owner`, `spender`): `Promise`<`BigNumber`\>

Get Token Allowance

**`remarks`** Get the allowance of one wallet over another's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the connected wallet.

**`example`**

```javascript
// Address of the wallet who owns the funds
const address = "{{wallet_address}}";

// Address of the wallet to check token allowance
const otherAddress = "0x...";

const allowance = await module.allowanceOf(otherAddress);
console.log(allowance);
```

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `owner`   | `string` |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

The allowance of one wallet over anothers funds.

#### Defined in

[src/modules/token.ts:140](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L140)

---

### balance

▸ **balance**(): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Defined in

[src/modules/token.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L93)

---

### balanceOf

▸ **balanceOf**(`address`): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

Get Token Balance

**`remarks`** Get a wallets token balance.

**`example`**

```javascript
// Address of the wallet to check token balance
const address = "{{wallet_address}}";

const balance = await module.balanceOf(address);
console.log(balance);
```

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `address` | `string` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

The balance of a specific wallet.

#### Defined in

[src/modules/token.ts:113](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L113)

---

### burn

▸ **burn**(`amount`): `Promise`<`TransactionReceipt`\>

Burn Tokens

**`remarks`** Burn tokens held by the connected wallet

**`example`**

```javascript
// The amount of this token you want to burn
const amount = 100;

await module.burn(amount);
```

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:322](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L322)

---

### burnFrom

▸ **burnFrom**(`from`, `amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `from`   | `string`       |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:326](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L326)

---

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[clearSigner](ModuleWithRoles#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L188)

---

### connectContract

▸ `Protected` **connectContract**(): `Coin`

**`internal`**

#### Returns

`Coin`

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[connectContract](ModuleWithRoles#connectcontract)

#### Defined in

[src/modules/token.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L66)

---

### delegateTo

▸ **delegateTo**(`delegateeAddress`): `Promise`<`TransactionReceipt`\>

Lets you delegate your voting power to the delegateeAddress

**`alpha`**

#### Parameters

| Name               | Type     | Description              |
| :----------------- | :------- | :----------------------- |
| `delegateeAddress` | `string` | delegatee wallet address |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:176](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L176)

---

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[exists](ModuleWithRoles#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L126)

---

### get

▸ **get**(): `Promise`<[`Currency`](../interfaces/Currency)\>

#### Returns

`Promise`<[`Currency`](../interfaces/Currency)\>

#### Defined in

[src/modules/token.ts:77](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L77)

---

### getAllHolderBalances

▸ **getAllHolderBalances**(): `Promise`<`Record`<`string`, `BigNumber`\>\>

Lets you get a all token holders and their corresponding balances

**`beta`** - This can be very slow for large numbers of token holders

#### Returns

`Promise`<`Record`<`string`, `BigNumber`\>\>

- A JSON object of all token holders and their corresponding balances

#### Defined in

[src/modules/token.ts:282](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L282)

---

### getAllRoleMembers

▸ **getAllRoleMembers**(): `Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

Call this to get get a list of addresses for all supported roles on the module.

**`see`** [getRoleMembers](ModuleWithRoles#getrolemembers) to get a list of addresses that are members of a specific role.

**`throws`** If the module does not support roles this will throw an [InvariantError](InvariantError).

#### Returns

`Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

A record of [Role](../modules#role)s to lists of addresses that are members of the given role.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getAllRoleMembers](ModuleWithRoles#getallrolemembers)

#### Defined in

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L556)

---

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getCallOverrides](ModuleWithRoles#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L261)

---

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getChainID](ModuleWithRoles#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L235)

---

### getDelegation

▸ **getDelegation**(): `Promise`<`string`\>

Get your voting delegatee address

#### Returns

`Promise`<`string`\>

the address of your vote delegatee

#### Defined in

[src/modules/token.ts:162](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L162)

---

### getDelegationOf

▸ **getDelegationOf**(`account`): `Promise`<`string`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `account` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/modules/token.ts:166](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L166)

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

[ModuleWithRoles](ModuleWithRoles).[getMetadata](ModuleWithRoles#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L138)

---

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`override`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleRoles](ModuleWithRoles#getmoduleroles)

#### Defined in

[src/modules/token.ts:59](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L59)

---

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Overrides

[ModuleWithRoles](ModuleWithRoles).[getModuleType](ModuleWithRoles#getmoduletype)

#### Defined in

[src/modules/token.ts:73](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L73)

---

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getProvider](ModuleWithRoles#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L228)

---

### getRoleMembers

▸ **getRoleMembers**(`role`): `Promise`<`string`[]\>

Call this to get a list of addresses that are members of a specific role.

**`throws`** If you are requestiong a role that does not exist on the module this will throw an [InvariantError](InvariantError).

**`see`** [getAllRoleMembers](ModuleWithRoles#getallrolemembers) to get get a list of addresses for all supported roles on the module.

**`example`** Say you want to get the list of addresses that are members of the [minter](../interfaces/IRoles#minter) role.

```typescript
const minterAddresses: string[] = await module.getRoleMemberList("minter");
```

#### Parameters

| Name   | Type                                   | Description                                                  |
| :----- | :------------------------------------- | :----------------------------------------------------------- |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to to get a memberlist for. |

#### Returns

`Promise`<`string`[]\>

The list of addresses that are members of the specific role.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getRoleMembers](ModuleWithRoles#getrolemembers)

#### Defined in

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L532)

---

### getSigner

▸ `Protected` **getSigner**(): `null` \| `Signer`

**`internal`**

#### Returns

`null` \| `Signer`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSigner](ModuleWithRoles#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L202)

---

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[getSignerAddress](ModuleWithRoles#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L219)

---

### getValue

▸ **getValue**(`value`): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Parameters

| Name    | Type           |
| :------ | :------------- |
| `value` | `BigNumberish` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Defined in

[src/modules/token.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L81)

---

### getVoteBalance

▸ **getVoteBalance**(): `Promise`<`BigNumber`\>

Get your wallet voting power for the current checkpoints

#### Returns

`Promise`<`BigNumber`\>

the amount of voting power in tokens

#### Defined in

[src/modules/token.ts:149](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L149)

---

### getVoteBalanceOf

▸ **getVoteBalanceOf**(`account`): `Promise`<`BigNumber`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/token.ts:153](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L153)

---

### grantRole

▸ **grantRole**(`role`, `address`): `Promise`<`TransactionReceipt`\>

Call this to grant a role to a specific address.

**`remarks`**

Make sure you are sure you want to grant the role to the address.

**`throws`** If you are trying to grant does not exist on the module this will throw an [InvariantError](InvariantError).

#### Parameters

| Name      | Type                                   | Description                                              |
| :-------- | :------------------------------------- | :------------------------------------------------------- |
| `role`    | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to grant to the address |
| `address` | `string`                               | The address to grant the role to                         |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[grantRole](ModuleWithRoles#grantrole)

#### Defined in

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L680)

---

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[hasValidSigner](ModuleWithRoles#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L212)

---

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Returns true if transfers are restricted. Otherwise returns false.

#### Returns

`Promise`<`boolean`\>

- True if transfers are restricted.

#### Implementation of

[ITransferable](../interfaces/ITransferable).[isTransferRestricted](../interfaces/ITransferable#istransferrestricted)

#### Defined in

[src/modules/token.ts:387](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L387)

---

### mint

▸ **mint**(`amount`): `Promise`<`void`\>

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/token.ts:217](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L217)

---

### mintBatchTo

▸ **mintBatchTo**(`args`): `Promise`<`void`\>

Mint Tokens To Many Wallets

**`remarks`** Mint tokens to many different wallets

**`example`**

```javascript
// Data of the tokens you want to mint
const data = [
  {
    address: "{{wallet_address}}", // Address to mint tokens to
    amount: 100 // How many tokens to mint to specified address
  },
  {
    address: "0x...",
    amount: 100
  }
];

await module.transfer(toAddress, amount);
```

#### Parameters

| Name   | Type                                               |
| :----- | :------------------------------------------------- |
| `args` | [`ITokenMintArgs`](../interfaces/ITokenMintArgs)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/token.ts:263](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L263)

---

### mintTo

▸ **mintTo**(`to`, `amount`): `Promise`<`void`\>

Mint Tokens

**`remarks`** Mint tokens to a specified address

**`example`**

```javascript
// Address of the wallet you want to mint the tokens to
const toAddress = "{{wallet_address}}";

// The amount of this token you want to mint
const amount = 100;

await module.transfer(toAddress, amount);
```

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `to`     | `string`       |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/token.ts:237](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L237)

---

### onlyRoles

▸ `Protected` **onlyRoles**(`roles`, `address`): `Promise`<`void`\>

Throws an error if an address is missing the roles specified.

#### Parameters

| Name      | Type                                     | Description          |
| :-------- | :--------------------------------------- | :------------------- |
| `roles`   | keyof [`IRoles`](../interfaces/IRoles)[] | The roles to check   |
| `address` | `string`                                 | The address to check |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[onlyRoles](ModuleWithRoles#onlyroles)

#### Defined in

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L793)

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

[ModuleWithRoles](ModuleWithRoles).[parseEventLogs](ModuleWithRoles#parseeventlogs)

#### Defined in

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L452)

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

[ModuleWithRoles](ModuleWithRoles).[parseLogs](ModuleWithRoles#parselogs)

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L471)

---

### prepareBatchMetadata

▸ **prepareBatchMetadata**(`metadata`): `Promise`<`string`[]\>

Prepares a list of metadata for uploading.

#### Parameters

| Name       | Type                                                      | Description                             |
| :--------- | :-------------------------------------------------------- | :-------------------------------------- |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | List of metadata to prepare for upload. |

#### Returns

`Promise`<`string`[]\>

- List of metadata prepared for upload.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[prepareBatchMetadata](ModuleWithRoles#preparebatchmetadata)

#### Defined in

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L779)

---

### prepareMetadata

▸ **prepareMetadata**(`metadata`): `Promise`<`string`\>

Prepares any set of metadata for uploading by recursively converting all Buffer|Blob|File objects
into a hash of the object after its been uploaded to distributed storage (e.g. IPFS). After uploading
any File|Buffer|Blob, the metadata is serialized to a string.

#### Parameters

| Name       | Type                                                    | Description                                 |
| :--------- | :------------------------------------------------------ | :------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The list of metadata to prepare for upload. |

#### Returns

`Promise`<`string`\>

- The serialized metadata object.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[prepareMetadata](ModuleWithRoles#preparemetadata)

#### Defined in

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L743)

---

### revokeAllRolesFromAddress

▸ **revokeAllRolesFromAddress**(`address`): `Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

Call this to revoke all roles given to a specific address.

#### Parameters

| Name      | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `address` | `string` | The address to revoke all roles for. |

#### Returns

`Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

A list of roles that were revoked.

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[revokeAllRolesFromAddress](ModuleWithRoles#revokeallrolesfromaddress)

#### Defined in

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L641)

---

### revokeRole

▸ **revokeRole**(`role`, `address`): `Promise`<`TransactionReceipt`\>

Call this to revoke a role from a specific address.

**`remarks`**

-- Caution --

This will let you remove yourself from the role, too.
If you remove yourself from the [admin](../interfaces/IRoles#admin) role, you will no longer be able to administer the module.
There is no way to recover from this.

**`throws`** If you are trying to revoke does not exist on the module this will throw an [InvariantError](InvariantError).

#### Parameters

| Name      | Type                                   | Description                                |
| :-------- | :------------------------------------- | :----------------------------------------- |
| `role`    | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to revoke |
| `address` | `string`                               | The address to revoke the role from        |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[revokeRole](ModuleWithRoles#revokerole)

#### Defined in

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L712)

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

[ModuleWithRoles](ModuleWithRoles).[sendContractTransaction](ModuleWithRoles#sendcontracttransaction)

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L306)

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

[ModuleWithRoles](ModuleWithRoles).[sendTransaction](ModuleWithRoles#sendtransaction)

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L295)

---

### setAllRoleMembers

▸ **setAllRoleMembers**(`rolesWithAddresses`): `Promise`<`any`\>

Call this to OVERWRITE the list of addresses that are members of specific roles.

Every role in the list will be overwritten with the new list of addresses provided with them.
If you want to add or remove addresses for a single address use [grantRole](ModuleWithRoles#grantrole) and [revokeRole](ModuleWithRoles#grantrole) respectively instead.

**`throws`** If you are requestiong a role that does not exist on the module this will throw an [InvariantError](InvariantError).

**`example`** Say you want to overwrite the list of addresses that are members of the [minter](../interfaces/IRoles#minter) role.

```typescript
const minterAddresses: string[] = await module.getRoleMemberList("minter");
await module.setAllRoleMembers({
  minter: []
});
console.log(await module.getRoleMemberList("minter")); // No matter what members had the role before, the new list will be set to []
```

#### Parameters

| Name                 | Type                                    | Description                                                                                          |
| :------------------- | :-------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `rolesWithAddresses` | [`SetAllRoles`](../modules#setallroles) | A record of [Role](../modules#role)s to lists of addresses that should be members of the given role. |

#### Returns

`Promise`<`any`\>

#### Inherited from

[ModuleWithRoles](ModuleWithRoles).[setAllRoleMembers](ModuleWithRoles#setallrolemembers)

#### Defined in

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L582)

---

### setAllowance

▸ **setAllowance**(`spender`, `amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `spender` | `string`    |
| `amount`  | `BigNumber` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:209](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L209)

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

[ModuleWithRoles](ModuleWithRoles).[setMetadata](ModuleWithRoles#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L160)

---

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:359](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L359)

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

[ModuleWithRoles](ModuleWithRoles).[setProviderOrSigner](ModuleWithRoles#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L172)

---

### setRestrictedTransfer

▸ **setRestrictedTransfer**(`restricted?`): `Promise`<`TransactionReceipt`\>

Setter for transfer restriction.

#### Parameters

| Name         | Type      | Default value |
| :----------- | :-------- | :------------ |
| `restricted` | `boolean` | `false`       |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Implementation of

[ITransferable](../interfaces/ITransferable).[setRestrictedTransfer](../interfaces/ITransferable#setrestrictedtransfer)

#### Defined in

[src/modules/token.ts:391](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L391)

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

[ModuleWithRoles](ModuleWithRoles).[signTypedData](ModuleWithRoles#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/core/module.ts#L415)

---

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/modules/token.ts:89](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L89)

---

### transfer

▸ **transfer**(`to`, `amount`): `Promise`<`TransactionReceipt`\>

Transfer Tokens

**`remarks`** Transfer tokens from the connected wallet to another wallet.

**`example`**

```javascript
// Address of the wallet you want to send the tokens to
const toAddress = "0x...";

// The amount of tokens you want to send
const amount = 0;

await module.transfer(toAddress, amount);
```

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `to`     | `string`       |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:198](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L198)

---

### transferBatch

▸ **transferBatch**(`args`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                               |
| :----- | :------------------------------------------------- |
| `args` | [`ITokenMintArgs`](../interfaces/ITokenMintArgs)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/token.ts:366](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L366)

---

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`): `Promise`<`TransactionReceipt`\>

Transfer Tokens From Address

**`remarks`** Transfer tokens from one wallet to another

**`example`**

```javascript
// Address of the wallet sending the tokens
const fromAddress = "{{wallet_address}}";
// Address of the wallet you want to send the tokens to
const toAddress = "0x...";
// The number of tokens you want to send
const amount = 100;

// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await module.transferFrom(fromAddress, toAddress, amount);
```

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `from`   | `string`       |
| `to`     | `string`       |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[src/modules/token.ts:351](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L351)

---

### transferFromBatch

▸ **transferFromBatch**(`args`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                       |
| :----- | :--------------------------------------------------------- |
| `args` | [`ITokenMintFromArgs`](../interfaces/ITokenMintFromArgs)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/token.ts:376](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/3077f6d/src/modules/token.ts#L376)
