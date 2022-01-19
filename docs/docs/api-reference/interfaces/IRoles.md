---
id: "IRoles"
title: "Interface: IRoles"
sidebar_label: "IRoles"
sidebar_position: 0
custom_edit_url: null
---

Roles are used to handle permissions on modules that extend [ModuleWithRoles](../classes/ModuleWithRoles).

## Properties

### admin

• **admin**: ``"admin"``

This admin role allows the wallet to modify contract metadata and [grant](../classes/ModuleWithRoles#grantrole) and [revoke](../classes/ModuleWithRoles#revokerole) Roles.

#### Defined in

[src/common/role.ts:12](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/common/role.ts#L12)

___

### editor

• **editor**: ``"editor"``

The editor role allows the wallet to edit data in the [DatastoreModule](../classes/DatastoreModule).

**`alpha`**

#### Defined in

[src/common/role.ts:34](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/common/role.ts#L34)

___

### lister

• **lister**: ``"lister"``

The lister role allows the wallet to list assets on the [MarketModule](../classes/MarketModule).

#### Defined in

[src/common/role.ts:39](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/common/role.ts#L39)

___

### minter

• **minter**: ``"minter"``

The minter role allows the wallet to mint new assets.
([NFTs](../classes/NFTModule#mint), [Tokens](../classes/TokenModule#mint), [Packs](../classes/PackModule#create), etc)

#### Defined in

[src/common/role.ts:18](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/common/role.ts#L18)

___

### pauser

• **pauser**: ``"pauser"``

The pauser role allows the wallet to pause all external contract interactions.

#### Defined in

[src/common/role.ts:23](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/common/role.ts#L23)

___

### transfer

• **transfer**: ``"transfer"``

The transfer role allows the wallet to transfer and receive assets
**even** when the module is set to be non-transferrable.

#### Defined in

[src/common/role.ts:29](https://github.com/PrasoonPratham/nftlabs-sdk-ts/blob/e7d1d7f/src/common/role.ts#L29)
