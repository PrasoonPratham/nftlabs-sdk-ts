---
id: "CurrencyModule"
title: "Class: CurrencyModule"
sidebar_label: "CurrencyModule"
sidebar_position: 0
custom_edit_url: null
---

**`deprecated`** - see [TokenModule](TokenModule)

## Hierarchy

- [`TokenModule`](TokenModule)

  ↳ **`CurrencyModule`**

## Constructors

### constructor

• **new CurrencyModule**(`providerOrSigner`, `address`, `options`, `sdk`)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`ProviderOrSigner`](../modules#providerorsigner) |
| `address` | `string` |
| `options` | [`ISDKOptions`](../interfaces/ISDKOptions) |
| `sdk` | [`ThirdwebSDK`](ThirdwebSDK) |

#### Inherited from

[TokenModule](TokenModule).[constructor](TokenModule#constructor)

#### Defined in

[src/core/module.ts:509](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L509)

## Properties

### address

• `Readonly` **address**: `string`

**`readonly`**

#### Inherited from

[TokenModule](TokenModule).[address](TokenModule#address)

#### Defined in

[src/core/module.ts:45](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L45)

___

### contract

• **contract**: `Coin`

Contract connects to the SDK signer or provider

**`internal`**

#### Inherited from

[TokenModule](TokenModule).[contract](TokenModule#contract)

#### Defined in

[src/core/module.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L93)

___

### ipfsGatewayUrl

• `Protected` `Readonly` **ipfsGatewayUrl**: `string`

**`internal`**

**`readonly`**

#### Inherited from

[TokenModule](TokenModule).[ipfsGatewayUrl](TokenModule#ipfsgatewayurl)

#### Defined in

[src/core/module.ts:50](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L50)

___

### options

• `Protected` `Readonly` **options**: [`ISDKOptions`](../interfaces/ISDKOptions)

**`internal`**

**`readonly`**

#### Inherited from

[TokenModule](TokenModule).[options](TokenModule#options)

#### Defined in

[src/core/module.ts:55](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L55)

___

### readOnlyContract

• **readOnlyContract**: `Coin`

Contract connects to the [ISDKOptions.readOnlyRpcUrl](../interfaces/ISDKOptions#readonlyrpcurl) if provided, otherwise connect to signer or provider

**`internal`**

#### Inherited from

[TokenModule](TokenModule).[readOnlyContract](TokenModule#readonlycontract)

#### Defined in

[src/core/module.ts:98](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L98)

___

### sdk

• `Protected` `Readonly` **sdk**: [`ThirdwebSDK`](ThirdwebSDK)

#### Inherited from

[TokenModule](TokenModule).[sdk](TokenModule#sdk)

#### Defined in

[src/core/module.ts:57](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L57)

___

### moduleType

▪ `Static` **moduleType**: [`ModuleType`](../enums/ModuleType)

#### Inherited from

[TokenModule](TokenModule).[moduleType](TokenModule#moduletype)

#### Defined in

[src/modules/token.ts:46](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L46)

___

### roles

▪ `Static` **roles**: readonly [``"admin"``, ``"minter"``, ``"pauser"``, ``"transfer"``]

#### Inherited from

[TokenModule](TokenModule).[roles](TokenModule#roles)

#### Defined in

[src/modules/token.ts:48](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L48)

## Accessors

### providerOrSigner

• `Protected` `get` **providerOrSigner**(): [`ProviderOrSigner`](../modules#providerorsigner)

**`internal`**

#### Returns

[`ProviderOrSigner`](../modules#providerorsigner)

#### Inherited from

TokenModule.providerOrSigner

#### Defined in

[src/core/module.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L66)

• `Protected` `set` **providerOrSigner**(`value`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProviderOrSigner`](../modules#providerorsigner) |

#### Returns

`void`

#### Inherited from

TokenModule.providerOrSigner

#### Defined in

[src/core/module.ts:70](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L70)

___

### roles

• `Private` `get` **roles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

TokenModule.roles

#### Defined in

[src/core/module.ts:504](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L504)

___

### signer

• `Protected` `get` **signer**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

TokenModule.signer

#### Defined in

[src/core/module.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L81)

• `Protected` `set` **signer**(`value`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `Signer` |

#### Returns

`void`

#### Inherited from

TokenModule.signer

#### Defined in

[src/core/module.ts:85](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L85)

## Methods

### allowance

▸ **allowance**(`spender`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenModule](TokenModule).[allowance](TokenModule#allowance)

#### Defined in

[src/modules/token.ts:117](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L117)

___

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

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

The allowance of one wallet over anothers funds.

#### Inherited from

[TokenModule](TokenModule).[allowanceOf](TokenModule#allowanceof)

#### Defined in

[src/modules/token.ts:140](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L140)

___

### balance

▸ **balance**(): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Inherited from

[TokenModule](TokenModule).[balance](TokenModule#balance)

#### Defined in

[src/modules/token.ts:93](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L93)

___

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

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

The balance of a specific wallet.

#### Inherited from

[TokenModule](TokenModule).[balanceOf](TokenModule#balanceof)

#### Defined in

[src/modules/token.ts:113](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L113)

___

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

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[burn](TokenModule#burn)

#### Defined in

[src/modules/token.ts:322](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L322)

___

### burnFrom

▸ **burnFrom**(`from`, `amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[burnFrom](TokenModule#burnfrom)

#### Defined in

[src/modules/token.ts:326](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L326)

___

### clearSigner

▸ **clearSigner**(): `void`

**`internal`**

#### Returns

`void`

#### Inherited from

[TokenModule](TokenModule).[clearSigner](TokenModule#clearsigner)

#### Defined in

[src/core/module.ts:188](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L188)

___

### connectContract

▸ `Protected` **connectContract**(): `Coin`

**`internal`**

#### Returns

`Coin`

#### Inherited from

[TokenModule](TokenModule).[connectContract](TokenModule#connectcontract)

#### Defined in

[src/modules/token.ts:66](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L66)

___

### delegateTo

▸ **delegateTo**(`delegateeAddress`): `Promise`<`TransactionReceipt`\>

Lets you delegate your voting power to the delegateeAddress

**`alpha`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delegateeAddress` | `string` | delegatee wallet address |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[delegateTo](TokenModule#delegateto)

#### Defined in

[src/modules/token.ts:176](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L176)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

whether the given contract exists on-chain

#### Inherited from

[TokenModule](TokenModule).[exists](TokenModule#exists)

#### Defined in

[src/core/module.ts:126](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L126)

___

### get

▸ **get**(): `Promise`<[`Currency`](../interfaces/Currency)\>

#### Returns

`Promise`<[`Currency`](../interfaces/Currency)\>

#### Inherited from

[TokenModule](TokenModule).[get](TokenModule#get)

#### Defined in

[src/modules/token.ts:77](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L77)

___

### getAllHolderBalances

▸ **getAllHolderBalances**(): `Promise`<`Record`<`string`, `BigNumber`\>\>

Lets you get a all token holders and their corresponding balances

**`beta`** - This can be very slow for large numbers of token holders

#### Returns

`Promise`<`Record`<`string`, `BigNumber`\>\>

- A JSON object of all token holders and their corresponding balances

#### Inherited from

[TokenModule](TokenModule).[getAllHolderBalances](TokenModule#getallholderbalances)

#### Defined in

[src/modules/token.ts:282](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L282)

___

### getAllRoleMembers

▸ **getAllRoleMembers**(): `Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

Call this to get get a list of addresses for all supported roles on the module.

**`see`** [getRoleMembers](ModuleWithRoles#getrolemembers) to get a list of addresses that are members of a specific role.

**`throws`** If the module does not support roles this will throw an [InvariantError](InvariantError).

#### Returns

`Promise`<`Partial`<`Record`<keyof [`IRoles`](../interfaces/IRoles), `string`[]\>\>\>

A record of [Role](../modules#role)s to lists of addresses that are members of the given role.

#### Inherited from

[TokenModule](TokenModule).[getAllRoleMembers](TokenModule#getallrolemembers)

#### Defined in

[src/core/module.ts:556](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L556)

___

### getCallOverrides

▸ `Protected` **getCallOverrides**(): `Promise`<`CallOverrides`\>

**`internal`**

#### Returns

`Promise`<`CallOverrides`\>

#### Inherited from

[TokenModule](TokenModule).[getCallOverrides](TokenModule#getcalloverrides)

#### Defined in

[src/core/module.ts:261](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L261)

___

### getChainID

▸ `Protected` **getChainID**(): `Promise`<`number`\>

**`internal`**

#### Returns

`Promise`<`number`\>

#### Inherited from

[TokenModule](TokenModule).[getChainID](TokenModule#getchainid)

#### Defined in

[src/core/module.ts:235](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L235)

___

### getDelegation

▸ **getDelegation**(): `Promise`<`string`\>

Get your voting delegatee address

#### Returns

`Promise`<`string`\>

the address of your vote delegatee

#### Inherited from

[TokenModule](TokenModule).[getDelegation](TokenModule#getdelegation)

#### Defined in

[src/modules/token.ts:162](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L162)

___

### getDelegationOf

▸ **getDelegationOf**(`account`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenModule](TokenModule).[getDelegationOf](TokenModule#getdelegationof)

#### Defined in

[src/modules/token.ts:166](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L166)

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

[TokenModule](TokenModule).[getMetadata](TokenModule#getmetadata)

#### Defined in

[src/core/module.ts:138](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L138)

___

### getModuleRoles

▸ `Protected` **getModuleRoles**(): readonly keyof [`IRoles`](../interfaces/IRoles)[]

**`override`**

**`internal`**

#### Returns

readonly keyof [`IRoles`](../interfaces/IRoles)[]

#### Inherited from

[TokenModule](TokenModule).[getModuleRoles](TokenModule#getmoduleroles)

#### Defined in

[src/modules/token.ts:59](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L59)

___

### getModuleType

▸ `Protected` **getModuleType**(): [`ModuleType`](../enums/ModuleType)

**`internal`**

#### Returns

[`ModuleType`](../enums/ModuleType)

#### Inherited from

[TokenModule](TokenModule).[getModuleType](TokenModule#getmoduletype)

#### Defined in

[src/modules/token.ts:73](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L73)

___

### getProvider

▸ `Protected` **getProvider**(): `Promise`<`Provider`\>

**`internal`**

#### Returns

`Promise`<`Provider`\>

#### Inherited from

[TokenModule](TokenModule).[getProvider](TokenModule#getprovider)

#### Defined in

[src/core/module.ts:228](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L228)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to to get a memberlist for. |

#### Returns

`Promise`<`string`[]\>

The list of addresses that are members of the specific role.

#### Inherited from

[TokenModule](TokenModule).[getRoleMembers](TokenModule#getrolemembers)

#### Defined in

[src/core/module.ts:532](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L532)

___

### getSigner

▸ `Protected` **getSigner**(): ``null`` \| `Signer`

**`internal`**

#### Returns

``null`` \| `Signer`

#### Inherited from

[TokenModule](TokenModule).[getSigner](TokenModule#getsigner)

#### Defined in

[src/core/module.ts:202](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L202)

___

### getSignerAddress

▸ `Protected` **getSignerAddress**(): `Promise`<`string`\>

**`internal`**

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenModule](TokenModule).[getSignerAddress](TokenModule#getsigneraddress)

#### Defined in

[src/core/module.ts:219](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L219)

___

### getValue

▸ **getValue**(`value`): `Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BigNumberish` |

#### Returns

`Promise`<[`CurrencyValue`](../interfaces/CurrencyValue)\>

#### Inherited from

[TokenModule](TokenModule).[getValue](TokenModule#getvalue)

#### Defined in

[src/modules/token.ts:81](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L81)

___

### getVoteBalance

▸ **getVoteBalance**(): `Promise`<`BigNumber`\>

Get your wallet voting power for the current checkpoints

#### Returns

`Promise`<`BigNumber`\>

the amount of voting power in tokens

#### Inherited from

[TokenModule](TokenModule).[getVoteBalance](TokenModule#getvotebalance)

#### Defined in

[src/modules/token.ts:149](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L149)

___

### getVoteBalanceOf

▸ **getVoteBalanceOf**(`account`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenModule](TokenModule).[getVoteBalanceOf](TokenModule#getvotebalanceof)

#### Defined in

[src/modules/token.ts:153](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L153)

___

### grantRole

▸ **grantRole**(`role`, `address`): `Promise`<`TransactionReceipt`\>

Call this to grant a role to a specific address.

**`remarks`**

Make sure you are sure you want to grant the role to the address.

**`throws`** If you are trying to grant does not exist on the module this will throw an [InvariantError](InvariantError).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to grant to the address |
| `address` | `string` | The address to grant the role to |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[TokenModule](TokenModule).[grantRole](TokenModule#grantrole)

#### Defined in

[src/core/module.ts:680](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L680)

___

### hasValidSigner

▸ `Protected` **hasValidSigner**(): `boolean`

**`internal`**

#### Returns

`boolean`

#### Inherited from

[TokenModule](TokenModule).[hasValidSigner](TokenModule#hasvalidsigner)

#### Defined in

[src/core/module.ts:212](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L212)

___

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Returns true if transfers are restricted. Otherwise returns false.

#### Returns

`Promise`<`boolean`\>

- True if transfers are restricted.

#### Inherited from

[TokenModule](TokenModule).[isTransferRestricted](TokenModule#istransferrestricted)

#### Defined in

[src/modules/token.ts:387](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L387)

___

### mint

▸ **mint**(`amount`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenModule](TokenModule).[mint](TokenModule#mint)

#### Defined in

[src/modules/token.ts:217](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L217)

___

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
    amount: 100, // How many tokens to mint to specified address
  },
 {
   address: "0x...",
   amount: 100,
 }
]

await module.transfer(toAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ITokenMintArgs`](../interfaces/ITokenMintArgs)[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenModule](TokenModule).[mintBatchTo](TokenModule#mintbatchto)

#### Defined in

[src/modules/token.ts:263](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L263)

___

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

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenModule](TokenModule).[mintTo](TokenModule#mintto)

#### Defined in

[src/modules/token.ts:237](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L237)

___

### onlyRoles

▸ `Protected` **onlyRoles**(`roles`, `address`): `Promise`<`void`\>

Throws an error if an address is missing the roles specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roles` | keyof [`IRoles`](../interfaces/IRoles)[] | The roles to check |
| `address` | `string` | The address to check |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenModule](TokenModule).[onlyRoles](TokenModule#onlyroles)

#### Defined in

[src/core/module.ts:793](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L793)

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

[TokenModule](TokenModule).[parseEventLogs](TokenModule#parseeventlogs)

#### Defined in

[src/core/module.ts:452](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L452)

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

[TokenModule](TokenModule).[parseLogs](TokenModule#parselogs)

#### Defined in

[src/core/module.ts:471](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L471)

___

### prepareBatchMetadata

▸ **prepareBatchMetadata**(`metadata`): `Promise`<`string`[]\>

Prepares a list of metadata for uploading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject)[] | List of metadata to prepare for upload. |

#### Returns

`Promise`<`string`[]\>

- List of metadata prepared for upload.

#### Inherited from

[TokenModule](TokenModule).[prepareBatchMetadata](TokenModule#preparebatchmetadata)

#### Defined in

[src/core/module.ts:779](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L779)

___

### prepareMetadata

▸ **prepareMetadata**(`metadata`): `Promise`<`string`\>

Prepares any set of metadata for uploading by recursively converting all Buffer|Blob|File objects
into a hash of the object after its been uploaded to distributed storage (e.g. IPFS). After uploading
any File|Buffer|Blob, the metadata is serialized to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) | The list of metadata to prepare for upload. |

#### Returns

`Promise`<`string`\>

- The serialized metadata object.

#### Inherited from

[TokenModule](TokenModule).[prepareMetadata](TokenModule#preparemetadata)

#### Defined in

[src/core/module.ts:743](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L743)

___

### revokeAllRolesFromAddress

▸ **revokeAllRolesFromAddress**(`address`): `Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

Call this to revoke all roles given to a specific address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address to revoke all roles for. |

#### Returns

`Promise`<keyof [`IRoles`](../interfaces/IRoles)[]\>

A list of roles that were revoked.

#### Inherited from

[TokenModule](TokenModule).[revokeAllRolesFromAddress](TokenModule#revokeallrolesfromaddress)

#### Defined in

[src/core/module.ts:641](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L641)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | keyof [`IRoles`](../interfaces/IRoles) | The [role](../interfaces/IRoles) to revoke |
| `address` | `string` | The address to revoke the role from |

#### Returns

`Promise`<`TransactionReceipt`\>

The transaction receipt

#### Inherited from

[TokenModule](TokenModule).[revokeRole](TokenModule#revokerole)

#### Defined in

[src/core/module.ts:712](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L712)

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

[TokenModule](TokenModule).[sendContractTransaction](TokenModule#sendcontracttransaction)

#### Defined in

[src/core/module.ts:306](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L306)

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

[TokenModule](TokenModule).[sendTransaction](TokenModule#sendtransaction)

#### Defined in

[src/core/module.ts:295](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L295)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `rolesWithAddresses` | [`SetAllRoles`](../modules#setallroles) | A record of [Role](../modules#role)s to lists of addresses that should be members of the given role. |

#### Returns

`Promise`<`any`\>

#### Inherited from

[TokenModule](TokenModule).[setAllRoleMembers](TokenModule#setallrolemembers)

#### Defined in

[src/core/module.ts:582](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L582)

___

### setAllowance

▸ **setAllowance**(`spender`, `amount`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumber` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[setAllowance](TokenModule#setallowance)

#### Defined in

[src/modules/token.ts:209](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L209)

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

[TokenModule](TokenModule).[setMetadata](TokenModule#setmetadata)

#### Defined in

[src/core/module.ts:160](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L160)

___

### setModuleMetadata

▸ **setModuleMetadata**(`metadata`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`MetadataURIOrObject`](../modules#metadatauriorobject) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[setModuleMetadata](TokenModule#setmodulemetadata)

#### Defined in

[src/modules/token.ts:359](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L359)

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

[TokenModule](TokenModule).[setProviderOrSigner](TokenModule#setproviderorsigner)

#### Defined in

[src/core/module.ts:172](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L172)

___

### setRestrictedTransfer

▸ **setRestrictedTransfer**(`restricted?`): `Promise`<`TransactionReceipt`\>

Setter for transfer restriction.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `restricted` | `boolean` | `false` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[setRestrictedTransfer](TokenModule#setrestrictedtransfer)

#### Defined in

[src/modules/token.ts:391](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L391)

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

[TokenModule](TokenModule).[signTypedData](TokenModule#signtypeddata)

#### Defined in

[src/core/module.ts:415](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/core/module.ts#L415)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenModule](TokenModule).[totalSupply](TokenModule#totalsupply)

#### Defined in

[src/modules/token.ts:89](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L89)

___

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

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[transfer](TokenModule#transfer)

#### Defined in

[src/modules/token.ts:198](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L198)

___

### transferBatch

▸ **transferBatch**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ITokenMintArgs`](../interfaces/ITokenMintArgs)[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenModule](TokenModule).[transferBatch](TokenModule#transferbatch)

#### Defined in

[src/modules/token.ts:366](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L366)

___

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
const amount = 100

// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await module.transferFrom(fromAddress, toAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

[TokenModule](TokenModule).[transferFrom](TokenModule#transferfrom)

#### Defined in

[src/modules/token.ts:351](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L351)

___

### transferFromBatch

▸ **transferFromBatch**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ITokenMintFromArgs`](../interfaces/ITokenMintFromArgs)[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenModule](TokenModule).[transferFromBatch](TokenModule#transferfrombatch)

#### Defined in

[src/modules/token.ts:376](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/bd3e5c6/src/modules/token.ts#L376)
