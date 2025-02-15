<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [ModuleWithRoles](./sdk.modulewithroles.md) &gt; [onlyRoles](./sdk.modulewithroles.onlyroles.md)

## ModuleWithRoles.onlyRoles() method

Throws an error if an address is missing the roles specified.

<b>Signature:</b>

```typescript
protected onlyRoles(roles: Role[], address: string): Promise<void>;
```

## Parameters

| Parameter | Type                              | Description          |
| --------- | --------------------------------- | -------------------- |
| roles     | [Role](./sdk.role.md)<!-- -->\[\] | The roles to check   |
| address   | string                            | The address to check |

<b>Returns:</b>

Promise&lt;void&gt;
