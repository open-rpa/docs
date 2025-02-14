[@openiap/nodeapi](../README.md) / [Exports](../modules.md) / apiinstrumentation

# Class: apiinstrumentation

## Table of contents

### Constructors

- [constructor](apiinstrumentation.md#constructor)

### Methods

- [GetTraceSpanId](apiinstrumentation.md#gettracespanid)
- [With](apiinstrumentation.md#with)
- [setparent](apiinstrumentation.md#setparent)

## Constructors

### constructor

• **new apiinstrumentation**()

## Methods

### GetTraceSpanId

▸ `Static` **GetTraceSpanId**(`span`): [`string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `span` | `Span` |

#### Returns

[`string`, `string`]

#### Defined in

[src/apiinstrumentation.ts:30](https://github.com/openiap/nodeapi/blob/a159861/src/apiinstrumentation.ts#L30)

___

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

[src/apiinstrumentation.ts:15](https://github.com/openiap/nodeapi/blob/a159861/src/apiinstrumentation.ts#L15)

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

[src/apiinstrumentation.ts:3](https://github.com/openiap/nodeapi/blob/a159861/src/apiinstrumentation.ts#L3)
