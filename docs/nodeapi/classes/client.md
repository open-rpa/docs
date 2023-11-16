---
layout: page
title: client
parent: NodeJS Api
---
[@openiap/nodeapi](../README.html) / [Exports](../modules.html) / client

# Class: client

## Implements

- [`iclient`](../interfaces/iclient.html)

## Table of contents

### Constructors

- [constructor](client.html#constructor)

### Properties

- [agent](client.html#agent)
- [call](client.html#call)
- [connected](client.html#connected)
- [connecting](client.html#connecting)
- [created](client.html#created)
- [doping](client.html#doping)
- [exchanges](client.html#exchanges)
- [grpc](client.html#grpc)
- [grpcStream](client.html#grpcstream)
- [id](client.html#id)
- [jwt](client.html#jwt)
- [lastheartbeat](client.html#lastheartbeat)
- [lastheartbeatsec](client.html#lastheartbeatsec)
- [lastheartbeatstr](client.html#lastheartbeatstr)
- [protocol](client.html#protocol)
- [queues](client.html#queues)
- [remoteip](client.html#remoteip)
- [replies](client.html#replies)
- [seq](client.html#seq)
- [signedin](client.html#signedin)
- [stream](client.html#stream)
- [streams](client.html#streams)
- [url](client.html#url)
- [user](client.html#user)
- [version](client.html#version)
- [watches](client.html#watches)
- [ws](client.html#ws)

### Methods

- [Close](client.html#close)
- [Initialize](client.html#initialize)
- [SendWatch](client.html#sendwatch)
- [UnWatch](client.html#unwatch)
- [Watch](client.html#watch)
- [onConnected](client.html#onconnected)
- [onDisconnected](client.html#ondisconnected)
- [onMessage](client.html#onmessage)
- [ping](client.html#ping)
- [queuecount](client.html#queuecount)

## Constructors

### constructor

• **new client**()

## Properties

### agent

• **agent**: [`clientAgent`](../modules.html#clientagent)

#### Implementation of

[iclient](../interfaces/iclient.html).[agent](../interfaces/iclient.html#agent)

#### Defined in

[src/client.ts:55](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L55)

___

### call

• **call**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[call](../interfaces/iclient.html#call)

#### Defined in

[src/client.ts:75](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L75)

___

### connected

• **connected**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient.html).[connected](../interfaces/iclient.html#connected)

#### Defined in

[src/client.ts:66](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L66)

___

### connecting

• **connecting**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient.html).[connecting](../interfaces/iclient.html#connecting)

#### Defined in

[src/client.ts:67](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L67)

___

### created

• **created**: `Date`

#### Implementation of

[iclient](../interfaces/iclient.html).[created](../interfaces/iclient.html#created)

#### Defined in

[src/client.ts:59](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L59)

___

### doping

• **doping**: `boolean`

#### Implementation of

[iclient](../interfaces/iclient.html).[doping](../interfaces/iclient.html#doping)

#### Defined in

[src/client.ts:58](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L58)

___

### exchanges

• **exchanges**: `any`[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient.html).[exchanges](../interfaces/iclient.html#exchanges)

#### Defined in

[src/client.ts:69](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L69)

___

### grpc

• **grpc**: `FlowService`

#### Implementation of

[iclient](../interfaces/iclient.html).[grpc](../interfaces/iclient.html#grpc)

#### Defined in

[src/client.ts:74](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L74)

___

### grpcStream

• **grpcStream**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[grpcStream](../interfaces/iclient.html#grpcstream)

#### Defined in

[src/client.ts:76](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L76)

___

### id

• **id**: `string` = `""`

#### Implementation of

[iclient](../interfaces/iclient.html).[id](../interfaces/iclient.html#id)

#### Defined in

[src/client.ts:52](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L52)

___

### jwt

• **jwt**: `string`

#### Implementation of

[iclient](../interfaces/iclient.html).[jwt](../interfaces/iclient.html#jwt)

#### Defined in

[src/client.ts:64](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L64)

___

### lastheartbeat

• **lastheartbeat**: `Date`

#### Implementation of

[iclient](../interfaces/iclient.html).[lastheartbeat](../interfaces/iclient.html#lastheartbeat)

#### Defined in

[src/client.ts:60](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L60)

___

### lastheartbeatsec

• **lastheartbeatsec**: `string` = `"0"`

#### Implementation of

[iclient](../interfaces/iclient.html).[lastheartbeatsec](../interfaces/iclient.html#lastheartbeatsec)

#### Defined in

[src/client.ts:62](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L62)

___

### lastheartbeatstr

• **lastheartbeatstr**: `string`

#### Implementation of

[iclient](../interfaces/iclient.html).[lastheartbeatstr](../interfaces/iclient.html#lastheartbeatstr)

#### Defined in

[src/client.ts:61](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L61)

___

### protocol

• **protocol**: [`clientType`](../modules.html#clienttype)

#### Implementation of

[iclient](../interfaces/iclient.html).[protocol](../interfaces/iclient.html#protocol)

#### Defined in

[src/client.ts:56](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L56)

___

### queues

• **queues**: `any`[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient.html).[queues](../interfaces/iclient.html#queues)

#### Defined in

[src/client.ts:68](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L68)

___

### remoteip

• **remoteip**: `string` = `"unknown"`

#### Implementation of

[iclient](../interfaces/iclient.html).[remoteip](../interfaces/iclient.html#remoteip)

#### Defined in

[src/client.ts:54](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L54)

___

### replies

• **replies**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[replies](../interfaces/iclient.html#replies)

#### Defined in

[src/client.ts:77](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L77)

___

### seq

• **seq**: `number` = `0`

#### Implementation of

[iclient](../interfaces/iclient.html).[seq](../interfaces/iclient.html#seq)

#### Defined in

[src/client.ts:53](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L53)

___

### signedin

• **signedin**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient.html).[signedin](../interfaces/iclient.html#signedin)

#### Defined in

[src/client.ts:65](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L65)

___

### stream

• **stream**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[stream](../interfaces/iclient.html#stream)

#### Defined in

[src/client.ts:73](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L73)

___

### streams

• **streams**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[streams](../interfaces/iclient.html#streams)

#### Defined in

[src/client.ts:78](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L78)

___

### url

• **url**: `string`

#### Implementation of

[iclient](../interfaces/iclient.html).[url](../interfaces/iclient.html#url)

#### Defined in

[src/client.ts:71](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L71)

___

### user

• **user**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[user](../interfaces/iclient.html#user)

#### Defined in

[src/client.ts:63](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L63)

___

### version

• **version**: `string`

#### Implementation of

[iclient](../interfaces/iclient.html).[version](../interfaces/iclient.html#version)

#### Defined in

[src/client.ts:57](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L57)

___

### watches

• **watches**: [`changestream`](changestream.html)[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient.html).[watches](../interfaces/iclient.html#watches)

#### Defined in

[src/client.ts:70](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L70)

___

### ws

• **ws**: `any`

#### Implementation of

[iclient](../interfaces/iclient.html).[ws](../interfaces/iclient.html#ws)

#### Defined in

[src/client.ts:72](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L72)

## Methods

### Close

▸ **Close**(): `void`

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.html).[Close](../interfaces/iclient.html#close)

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

[iclient](../interfaces/iclient.html).[Initialize](../interfaces/iclient.html#initialize)

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

[iclient](../interfaces/iclient.html).[SendWatch](../interfaces/iclient.html#sendwatch)

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

[iclient](../interfaces/iclient.html).[UnWatch](../interfaces/iclient.html#unwatch)

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

[iclient](../interfaces/iclient.html).[Watch](../interfaces/iclient.html#watch)

#### Defined in

[src/client.ts:114](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L114)

___

### onConnected

▸ **onConnected**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.html).[onConnected](../interfaces/iclient.html#onconnected)

#### Defined in

[src/client.ts:94](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L94)

___

### onDisconnected

▸ **onDisconnected**(`client`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `error` | `Error` |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient.html).[onDisconnected](../interfaces/iclient.html#ondisconnected)

#### Defined in

[src/client.ts:96](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L96)

___

### onMessage

▸ **onMessage**(`client`, `message`): `Promise`<[`Envelope`](../modules.html#envelope)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `message` | `any` |

#### Returns

`Promise`<[`Envelope`](../modules.html#envelope)\>

#### Implementation of

[iclient](../interfaces/iclient.html).[onMessage](../interfaces/iclient.html#onmessage)

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

[iclient](../interfaces/iclient.html).[ping](../interfaces/iclient.html#ping)

#### Defined in

[src/client.ts:102](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L102)

___

### queuecount

▸ **queuecount**(): `number`

#### Returns

`number`

#### Implementation of

[iclient](../interfaces/iclient.html).[queuecount](../interfaces/iclient.html#queuecount)

#### Defined in

[src/client.ts:111](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L111)
