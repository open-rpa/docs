[@openiap/nodeapi](../README.md) / [Exports](../modules.md) / client

# Class: client

## Implements

- [`iclient`](../interfaces/iclient.md)

## Table of contents

### Constructors

- [constructor](client.md#constructor)

### Properties

- [agent](client.md#agent)
- [call](client.md#call)
- [connected](client.md#connected)
- [connecting](client.md#connecting)
- [created](client.md#created)
- [doping](client.md#doping)
- [exchanges](client.md#exchanges)
- [grpc](client.md#grpc)
- [grpcStream](client.md#grpcstream)
- [id](client.md#id)
- [jwt](client.md#jwt)
- [lastheartbeat](client.md#lastheartbeat)
- [lastheartbeatsec](client.md#lastheartbeatsec)
- [lastheartbeatstr](client.md#lastheartbeatstr)
- [protocol](client.md#protocol)
- [queues](client.md#queues)
- [remoteip](client.md#remoteip)
- [replies](client.md#replies)
- [seq](client.md#seq)
- [signedin](client.md#signedin)
- [stream](client.md#stream)
- [streams](client.md#streams)
- [url](client.md#url)
- [user](client.md#user)
- [version](client.md#version)
- [watches](client.md#watches)
- [ws](client.md#ws)

### Methods

- [Close](client.md#close)
- [Initialize](client.md#initialize)
- [SendWatch](client.md#sendwatch)
- [UnWatch](client.md#unwatch)
- [Watch](client.md#watch)
- [onConnected](client.md#onconnected)
- [onDisconnected](client.md#ondisconnected)
- [onMessage](client.md#onmessage)
- [ping](client.md#ping)
- [queuecount](client.md#queuecount)

## Constructors

### constructor

• **new client**()

## Properties

### agent

• **agent**: [`clientAgent`](../modules.md#clientagent)

#### Implementation of

[iclient](../interfaces/iclient.md).[agent](../interfaces/iclient.md#agent)

#### Defined in

[src/client.ts:55](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L55)

___

### call

• **call**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[call](../interfaces/iclient.md#call)

#### Defined in

[src/client.ts:75](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L75)

___

### connected

• **connected**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient.md).[connected](../interfaces/iclient.md#connected)

#### Defined in

[src/client.ts:66](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L66)

___

### connecting

• **connecting**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient.md).[connecting](../interfaces/iclient.md#connecting)

#### Defined in

[src/client.ts:67](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L67)

___

### created

• **created**: `Date`

#### Implementation of

[iclient](../interfaces/iclient.md).[created](../interfaces/iclient.md#created)

#### Defined in

[src/client.ts:59](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L59)

___

### doping

• **doping**: `boolean`

#### Implementation of

[iclient](../interfaces/iclient.md).[doping](../interfaces/iclient.md#doping)

#### Defined in

[src/client.ts:58](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L58)

___

### exchanges

• **exchanges**: `any`[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient.md).[exchanges](../interfaces/iclient.md#exchanges)

#### Defined in

[src/client.ts:69](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L69)

___

### grpc

• **grpc**: `FlowService`

#### Implementation of

[iclient](../interfaces/iclient.md).[grpc](../interfaces/iclient.md#grpc)

#### Defined in

[src/client.ts:74](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L74)

___

### grpcStream

• **grpcStream**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[grpcStream](../interfaces/iclient.md#grpcstream)

#### Defined in

[src/client.ts:76](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L76)

___

### id

• **id**: `string` = `""`

#### Implementation of

[iclient](../interfaces/iclient.md).[id](../interfaces/iclient.md#id)

#### Defined in

[src/client.ts:52](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L52)

___

### jwt

• **jwt**: `string`

#### Implementation of

[iclient](../interfaces/iclient.md).[jwt](../interfaces/iclient.md#jwt)

#### Defined in

[src/client.ts:64](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L64)

___

### lastheartbeat

• **lastheartbeat**: `Date`

#### Implementation of

[iclient](../interfaces/iclient.md).[lastheartbeat](../interfaces/iclient.md#lastheartbeat)

#### Defined in

[src/client.ts:60](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L60)

___

### lastheartbeatsec

• **lastheartbeatsec**: `string` = `"0"`

#### Implementation of

[iclient](../interfaces/iclient.md).[lastheartbeatsec](../interfaces/iclient.md#lastheartbeatsec)

#### Defined in

[src/client.ts:62](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L62)

___

### lastheartbeatstr

• **lastheartbeatstr**: `string`

#### Implementation of

[iclient](../interfaces/iclient.md).[lastheartbeatstr](../interfaces/iclient.md#lastheartbeatstr)

#### Defined in

[src/client.ts:61](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L61)

___

### protocol

• **protocol**: [`clientType`](../modules.md#clienttype)

#### Implementation of

[iclient](../interfaces/iclient.md).[protocol](../interfaces/iclient.md#protocol)

#### Defined in

[src/client.ts:56](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L56)

___

### queues

• **queues**: `any`[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient.md).[queues](../interfaces/iclient.md#queues)

#### Defined in

[src/client.ts:68](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L68)

___

### remoteip

• **remoteip**: `string` = `"unknown"`

#### Implementation of

[iclient](../interfaces/iclient.md).[remoteip](../interfaces/iclient.md#remoteip)

#### Defined in

[src/client.ts:54](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L54)

___

### replies

• **replies**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[replies](../interfaces/iclient.md#replies)

#### Defined in

[src/client.ts:77](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L77)

___

### seq

• **seq**: `number` = `0`

#### Implementation of

[iclient](../interfaces/iclient.md).[seq](../interfaces/iclient.md#seq)

#### Defined in

[src/client.ts:53](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L53)

___

### signedin

• **signedin**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient.md).[signedin](../interfaces/iclient.md#signedin)

#### Defined in

[src/client.ts:65](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L65)

___

### stream

• **stream**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[stream](../interfaces/iclient.md#stream)

#### Defined in

[src/client.ts:73](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L73)

___

### streams

• **streams**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[streams](../interfaces/iclient.md#streams)

#### Defined in

[src/client.ts:78](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L78)

___

### url

• **url**: `string`

#### Implementation of

[iclient](../interfaces/iclient.md).[url](../interfaces/iclient.md#url)

#### Defined in

[src/client.ts:71](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L71)

___

### user

• **user**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[user](../interfaces/iclient.md#user)

#### Defined in

[src/client.ts:63](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L63)

___

### version

• **version**: `string`

#### Implementation of

[iclient](../interfaces/iclient.md).[version](../interfaces/iclient.md#version)

#### Defined in

[src/client.ts:57](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L57)

___

### watches

• **watches**: [`changestream`](changestream.md)[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient.md).[watches](../interfaces/iclient.md#watches)

#### Defined in

[src/client.ts:70](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L70)

___

### ws

• **ws**: `any`

#### Implementation of

[iclient](../interfaces/iclient.md).[ws](../interfaces/iclient.md#ws)

#### Defined in

[src/client.ts:72](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L72)

## Methods

### Close

▸ **Close**(): `void`

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.md).[Close](../interfaces/iclient.md#close)

#### Defined in

[src/client.ts:145](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L145)

___

### Initialize

▸ **Initialize**(`ws`, `stream`, `call`, `req`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `any` |
| `stream` | `any` |
| `call` | `any` |
| `req` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[iclient](../interfaces/iclient.md).[Initialize](../interfaces/iclient.md#initialize)

#### Defined in

[src/client.ts:80](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L80)

___

### SendWatch

▸ **SendWatch**(`watch`, `next`, `span`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `watch` | `any` |
| `next` | `any` |
| `span` | `any` |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.md).[SendWatch](../interfaces/iclient.md#sendwatch)

#### Defined in

[src/client.ts:132](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L132)

___

### UnWatch

▸ **UnWatch**(`id`, `jwt`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jwt` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[iclient](../interfaces/iclient.md).[UnWatch](../interfaces/iclient.md#unwatch)

#### Defined in

[src/client.ts:127](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L127)

___

### Watch

▸ **Watch**(`aggregates`, `collectionname`, `jwt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregates` | `object`[] |
| `collectionname` | `string` |
| `jwt` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[iclient](../interfaces/iclient.md).[Watch](../interfaces/iclient.md#watch)

#### Defined in

[src/client.ts:114](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L114)

___

### onConnected

▸ **onConnected**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.md).[onConnected](../interfaces/iclient.md#onconnected)

#### Defined in

[src/client.ts:94](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L94)

___

### onDisconnected

▸ **onDisconnected**(`client`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `error` | `Error` |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.md).[onDisconnected](../interfaces/iclient.md#ondisconnected)

#### Defined in

[src/client.ts:96](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L96)

___

### onMessage

▸ **onMessage**(`client`, `message`): `Promise`<[`Envelope`](../modules.md#envelope)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `message` | `any` |

#### Returns

`Promise`<[`Envelope`](../modules.md#envelope)\>

#### Implementation of

[iclient](../interfaces/iclient.md).[onMessage](../interfaces/iclient.md#onmessage)

#### Defined in

[src/client.ts:99](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L99)

___

### ping

▸ **ping**(`span`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `span` | `any` |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.md).[ping](../interfaces/iclient.md#ping)

#### Defined in

[src/client.ts:102](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L102)

___

### queuecount

▸ **queuecount**(): `number`

#### Returns

`number`

#### Implementation of

[iclient](../interfaces/iclient.md).[queuecount](../interfaces/iclient.md#queuecount)

#### Defined in

[src/client.ts:111](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L111)
