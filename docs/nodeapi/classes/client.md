---
layout: page
title: client
parent: NodeJS Api
---
[@openiap/nodeapi](../README) / [Exports](../modules) / client

# Class: client

## Implements

- [`iclient`](../interfaces/iclient)

## Table of contents

### Constructors

- [constructor](client#constructor)

### Properties

- [agent](client#agent)
- [call](client#call)
- [connected](client#connected)
- [connecting](client#connecting)
- [created](client#created)
- [doping](client#doping)
- [exchanges](client#exchanges)
- [grpc](client#grpc)
- [grpcStream](client#grpcstream)
- [id](client#id)
- [jwt](client#jwt)
- [lastheartbeat](client#lastheartbeat)
- [lastheartbeatsec](client#lastheartbeatsec)
- [lastheartbeatstr](client#lastheartbeatstr)
- [protocol](client#protocol)
- [queues](client#queues)
- [remoteip](client#remoteip)
- [replies](client#replies)
- [seq](client#seq)
- [signedin](client#signedin)
- [stream](client#stream)
- [streams](client#streams)
- [url](client#url)
- [user](client#user)
- [version](client#version)
- [watches](client#watches)
- [ws](client#ws)

### Methods

- [Close](client#close)
- [Initialize](client#initialize)
- [SendWatch](client#sendwatch)
- [UnWatch](client#unwatch)
- [Watch](client#watch)
- [onConnected](client#onconnected)
- [onDisconnected](client#ondisconnected)
- [onMessage](client#onmessage)
- [ping](client#ping)
- [queuecount](client#queuecount)

## Constructors

### constructor

• **new client**()

## Properties

### agent

• **agent**: [`clientAgent`](../modules#clientagent)

#### Implementation of

[iclient](../interfaces/iclient).[agent](../interfaces/iclient#agent)

#### Defined in

[src/client.ts:55](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L55)

___

### call

• **call**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[call](../interfaces/iclient#call)

#### Defined in

[src/client.ts:75](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L75)

___

### connected

• **connected**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient).[connected](../interfaces/iclient#connected)

#### Defined in

[src/client.ts:66](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L66)

___

### connecting

• **connecting**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient).[connecting](../interfaces/iclient#connecting)

#### Defined in

[src/client.ts:67](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L67)

___

### created

• **created**: `Date`

#### Implementation of

[iclient](../interfaces/iclient).[created](../interfaces/iclient#created)

#### Defined in

[src/client.ts:59](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L59)

___

### doping

• **doping**: `boolean`

#### Implementation of

[iclient](../interfaces/iclient).[doping](../interfaces/iclient#doping)

#### Defined in

[src/client.ts:58](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L58)

___

### exchanges

• **exchanges**: `any`[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient).[exchanges](../interfaces/iclient#exchanges)

#### Defined in

[src/client.ts:69](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L69)

___

### grpc

• **grpc**: `FlowService`

#### Implementation of

[iclient](../interfaces/iclient).[grpc](../interfaces/iclient#grpc)

#### Defined in

[src/client.ts:74](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L74)

___

### grpcStream

• **grpcStream**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[grpcStream](../interfaces/iclient#grpcstream)

#### Defined in

[src/client.ts:76](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L76)

___

### id

• **id**: `string` = `""`

#### Implementation of

[iclient](../interfaces/iclient).[id](../interfaces/iclient#id)

#### Defined in

[src/client.ts:52](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L52)

___

### jwt

• **jwt**: `string`

#### Implementation of

[iclient](../interfaces/iclient).[jwt](../interfaces/iclient#jwt)

#### Defined in

[src/client.ts:64](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L64)

___

### lastheartbeat

• **lastheartbeat**: `Date`

#### Implementation of

[iclient](../interfaces/iclient).[lastheartbeat](../interfaces/iclient#lastheartbeat)

#### Defined in

[src/client.ts:60](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L60)

___

### lastheartbeatsec

• **lastheartbeatsec**: `string` = `"0"`

#### Implementation of

[iclient](../interfaces/iclient).[lastheartbeatsec](../interfaces/iclient#lastheartbeatsec)

#### Defined in

[src/client.ts:62](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L62)

___

### lastheartbeatstr

• **lastheartbeatstr**: `string`

#### Implementation of

[iclient](../interfaces/iclient).[lastheartbeatstr](../interfaces/iclient#lastheartbeatstr)

#### Defined in

[src/client.ts:61](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L61)

___

### protocol

• **protocol**: [`clientType`](../modules#clienttype)

#### Implementation of

[iclient](../interfaces/iclient).[protocol](../interfaces/iclient#protocol)

#### Defined in

[src/client.ts:56](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L56)

___

### queues

• **queues**: `any`[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient).[queues](../interfaces/iclient#queues)

#### Defined in

[src/client.ts:68](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L68)

___

### remoteip

• **remoteip**: `string` = `"unknown"`

#### Implementation of

[iclient](../interfaces/iclient).[remoteip](../interfaces/iclient#remoteip)

#### Defined in

[src/client.ts:54](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L54)

___

### replies

• **replies**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[replies](../interfaces/iclient#replies)

#### Defined in

[src/client.ts:77](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L77)

___

### seq

• **seq**: `number` = `0`

#### Implementation of

[iclient](../interfaces/iclient).[seq](../interfaces/iclient#seq)

#### Defined in

[src/client.ts:53](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L53)

___

### signedin

• **signedin**: `boolean` = `false`

#### Implementation of

[iclient](../interfaces/iclient).[signedin](../interfaces/iclient#signedin)

#### Defined in

[src/client.ts:65](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L65)

___

### stream

• **stream**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[stream](../interfaces/iclient#stream)

#### Defined in

[src/client.ts:73](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L73)

___

### streams

• **streams**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[streams](../interfaces/iclient#streams)

#### Defined in

[src/client.ts:78](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L78)

___

### url

• **url**: `string`

#### Implementation of

[iclient](../interfaces/iclient).[url](../interfaces/iclient#url)

#### Defined in

[src/client.ts:71](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L71)

___

### user

• **user**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[user](../interfaces/iclient#user)

#### Defined in

[src/client.ts:63](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L63)

___

### version

• **version**: `string`

#### Implementation of

[iclient](../interfaces/iclient).[version](../interfaces/iclient#version)

#### Defined in

[src/client.ts:57](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L57)

___

### watches

• **watches**: [`changestream`](changestream)[] = `[]`

#### Implementation of

[iclient](../interfaces/iclient).[watches](../interfaces/iclient#watches)

#### Defined in

[src/client.ts:70](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L70)

___

### ws

• **ws**: `any`

#### Implementation of

[iclient](../interfaces/iclient).[ws](../interfaces/iclient#ws)

#### Defined in

[src/client.ts:72](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L72)

## Methods

### Close

▸ **Close**(): `void`

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient).[Close](../interfaces/iclient#close)

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

[iclient](../interfaces/iclient).[Initialize](../interfaces/iclient#initialize)

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

[iclient](../interfaces/iclient).[SendWatch](../interfaces/iclient#sendwatch)

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

[iclient](../interfaces/iclient).[UnWatch](../interfaces/iclient#unwatch)

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

[iclient](../interfaces/iclient).[Watch](../interfaces/iclient#watch)

#### Defined in

[src/client.ts:114](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L114)

___

### onConnected

▸ **onConnected**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient).[onConnected](../interfaces/iclient#onconnected)

#### Defined in

[src/client.ts:94](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L94)

___

### onDisconnected

▸ **onDisconnected**(`client`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `error` | `Error` |

#### Returns

`void`

#### Implementation of

[iclient](../interfaces/iclient).[onDisconnected](../interfaces/iclient#ondisconnected)

#### Defined in

[src/client.ts:96](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L96)

___

### onMessage

▸ **onMessage**(`client`, `message`): `Promise`<[`Envelope`](../modules#envelope)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `message` | `any` |

#### Returns

`Promise`<[`Envelope`](../modules#envelope)\>

#### Implementation of

[iclient](../interfaces/iclient).[onMessage](../interfaces/iclient#onmessage)

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

[iclient](../interfaces/iclient).[ping](../interfaces/iclient#ping)

#### Defined in

[src/client.ts:102](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L102)

___

### queuecount

▸ **queuecount**(): `number`

#### Returns

`number`

#### Implementation of

[iclient](../interfaces/iclient).[queuecount](../interfaces/iclient#queuecount)

#### Defined in

[src/client.ts:111](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L111)
