---
layout: page
title: apiinstrumentation
parent: NodeJS Api
---
---
layout: page
title: apiinstrumentation
parent: NodeJS Api
---
[@openiap/nodeapi](../README.md) / [Exports](../modules.md) / apiinstrumentation

# Class: apiinstrumentation

## Table of contents

### Constructors

- [constructor](apiinstrumentation.html#constructor)

### Methods

- [With](apiinstrumentation.html#with)
- [setparent](apiinstrumentation.html#setparent)

## Constructors

### constructor

• **new apiinstrumentation**()

## Methods

### With

▸ `Static` **With**<`T`\>(`spanname`, `traceId?`, `spanId?`, `traceFlags?`, `callback`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `spanname` | `string` | `undefined` |
| `traceId` | `string` | `undefined` |
| `spanId` | `string` | `undefined` |
| `traceFlags` | `TraceFlags` | `TraceFlags.SAMPLED` |
| `callback` | (`span`: `Span`) => `Promise`<`T`\> | `undefined` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/apiinstrumentation.ts:15](https://github.com/openiap/nodeapi/blob/a6b5438/src/apiinstrumentation.ts#L15)

___

### setparent

▸ `Static` **setparent**(`traceId?`, `spanId?`, `traceFlags?`): `Context`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `traceId` | `string` | `undefined` |
| `spanId` | `string` | `undefined` |
| `traceFlags` | `TraceFlags` | `TraceFlags.SAMPLED` |

#### Returns

`Context`

#### Defined in

[src/apiinstrumentation.ts:3](https://github.com/openiap/nodeapi/blob/a6b5438/src/apiinstrumentation.ts#L3)
