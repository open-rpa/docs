---
layout: page
title: Base
parent: NodeJS Api
---
[@openiap/nodeapi](../README) / [Exports](../modules) / Base

# Class: Base

## Table of contents

### Constructors

- [constructor](Base#constructor)

### Properties

- [\_acl](Base#_acl)
- [\_created](Base#_created)
- [\_createdby](Base#_createdby)
- [\_createdbyid](Base#_createdbyid)
- [\_encrypt](Base#_encrypt)
- [\_id](Base#_id)
- [\_modified](Base#_modified)
- [\_modifiedby](Base#_modifiedby)
- [\_modifiedbyid](Base#_modifiedbyid)
- [\_name](Base#_name)
- [\_type](Base#_type)
- [\_version](Base#_version)
- [name](Base#name)

### Methods

- [addRight](Base#addright)
- [assign](Base#assign)
- [getRight](Base#getright)
- [hasRight](Base#hasright)
- [removeRight](Base#removeright)
- [setRight](Base#setright)

## Constructors

### constructor

• **new Base**()

#### Defined in

[src/Base.ts:19](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L19)

## Properties

### \_acl

• **\_acl**: [`Ace`](Ace)[] = `[]`

#### Defined in

[src/Base.ts:7](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L7)

___

### \_created

• **\_created**: `Date`

#### Defined in

[src/Base.ts:14](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L14)

___

### \_createdby

• **\_createdby**: `string`

#### Defined in

[src/Base.ts:13](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L13)

___

### \_createdbyid

• **\_createdbyid**: `string`

#### Defined in

[src/Base.ts:12](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L12)

___

### \_encrypt

• **\_encrypt**: `string`[] = `[]`

#### Defined in

[src/Base.ts:10](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L10)

___

### \_id

• **\_id**: `string`

#### Defined in

[src/Base.ts:5](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L5)

___

### \_modified

• **\_modified**: `Date`

#### Defined in

[src/Base.ts:17](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L17)

___

### \_modifiedby

• **\_modifiedby**: `string`

#### Defined in

[src/Base.ts:16](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L16)

___

### \_modifiedbyid

• **\_modifiedbyid**: `string`

#### Defined in

[src/Base.ts:15](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L15)

___

### \_name

• **\_name**: `string`

#### Defined in

[src/Base.ts:9](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L9)

___

### \_type

• **\_type**: `string` = `'unknown'`

#### Defined in

[src/Base.ts:6](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L6)

___

### \_version

• **\_version**: `number` = `0`

#### Defined in

[src/Base.ts:18](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L18)

___

### name

• **name**: `string`

#### Defined in

[src/Base.ts:8](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L8)

## Methods

### addRight

▸ `Static` **addRight**(`item`, `_id`, `name`, `rights`, `deny?`): `void`

Add/update right for user/role

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | [`Base`](Base) | `undefined` | - |
| `_id` | `string` | `undefined` | user/role id |
| `name` | `string` | `undefined` | Displayname for user/role |
| `rights` | `number`[] | `undefined` | Right to set |
| `deny` | `boolean` | `false` | Deny the right |

#### Returns

`void`

void

#### Defined in

[src/Base.ts:71](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L71)

___

### assign

▸ `Static` **assign**<`T`\>(`source`): `T`

Create new instance of object, using values from input object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `T` |

#### Returns

`T`

T New object as Type

#### Defined in

[src/Base.ts:27](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L27)

___

### getRight

▸ `Static` **getRight**(`item`, `_id`, `deny?`): [`Ace`](Ace)

Enumerate ACL for specefic ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | [`Base`](Base) | `undefined` | - |
| `_id` | `string` | `undefined` | Id to search for |
| `deny` | `boolean` | `false` | look for deny or allow permission |

#### Returns

[`Ace`](Ace)

Ace Ace if found, else null

#### Defined in

[src/Base.ts:36](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L36)

___

### hasRight

▸ `Static` **hasRight**(`item`, `_id`, `bit`, `deny?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | [`Base`](Base) | `undefined` |
| `_id` | `string` | `undefined` |
| `bit` | `number` | `undefined` |
| `deny` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/Base.ts:121](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L121)

___

### removeRight

▸ `Static` **removeRight**(`item`, `_id`, `rights?`, `deny?`): `void`

Remove a right from user/role

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | [`Base`](Base) | `undefined` | - |
| `_id` | `string` | `undefined` | user/role id |
| `rights` | `number`[] | `null` | Right to revoke |
| `deny` | `boolean` | `false` | Deny right |

#### Returns

`void`

void

#### Defined in

[src/Base.ts:104](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L104)

___

### setRight

▸ `Static` **setRight**(`item`, `x`): `void`

Set right for specefic id, if exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Base`](Base) |
| `x` | [`Ace`](Ace) |

#### Returns

`void`

void

#### Defined in

[src/Base.ts:53](https://github.com/openiap/nodeapi/blob/a6b5438/src/Base.ts#L53)
