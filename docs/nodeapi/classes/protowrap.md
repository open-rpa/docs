---
layout: page
title: protowrap
parent: NodeJS Api
---
[@openiap/nodeapi](../README) / [Exports](../modules) / protowrap

# Class: protowrap

## Table of contents

### Constructors

- [constructor](protowrap#constructor)

### Properties

- [defaultprotocol](protowrap#defaultprotocol)
- [grpc\_server\_options](protowrap#grpc_server_options)
- [openiap\_proto](protowrap#openiap_proto)
- [protoRoot](protowrap#protoroot)

### Methods

- [ClientCleanup](protowrap#clientcleanup)
- [CommandToProto](protowrap#commandtoproto)
- [CreateStream](protowrap#createstream)
- [DownloadFile](protowrap#downloadfile)
- [IsPendingReply](protowrap#ispendingreply)
- [RPC](protowrap#rpc)
- [ReceiveFileContent](protowrap#receivefilecontent)
- [SetStream](protowrap#setstream)
- [UploadFile](protowrap#uploadfile)
- [\_RPC](protowrap#_rpc)
- [connect](protowrap#connect)
- [get](protowrap#get)
- [getChecksum](protowrap#getchecksum)
- [getFileChecksum](protowrap#getfilechecksum)
- [init](protowrap#init)
- [pack](protowrap#pack)
- [post](protowrap#post)
- [sendFileContent](protowrap#sendfilecontent)
- [sendMesssag](protowrap#sendmesssag)
- [serve](protowrap#serve)
- [unpack](protowrap#unpack)

## Constructors

### constructor

• **new protowrap**()

## Properties

### defaultprotocol

▪ `Static` **defaultprotocol**: [`clientType`](../modules#clienttype) = `"pipe"`

#### Defined in

[src/protowrap.ts:63](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L63)

___

### grpc\_server\_options

▪ `Static` **grpc\_server\_options**: `ChannelOptions`

#### Defined in

[src/protowrap.ts:50](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L50)

___

### openiap\_proto

▪ `Static` **openiap\_proto**: `ProtobufTypeDefinition` \| `ServiceClientConstructor` \| `GrpcObject`

#### Defined in

[src/protowrap.ts:65](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L65)

___

### protoRoot

▪ `Static` **protoRoot**: `any`

#### Defined in

[src/protowrap.ts:67](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L67)

## Methods

### ClientCleanup

▸ `Static` **ClientCleanup**(`client`, `onClientDisconnected`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `onClientDisconnected` | `any` |
| `error` | `string` \| `Error` |

#### Returns

`void`

#### Defined in

[src/protowrap.ts:768](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L768)

___

### CommandToProto

▸ `Static` **CommandToProto**(`command`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `any` |

#### Returns

`string`

#### Defined in

[src/protowrap.ts:90](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L90)

___

### CreateStream

▸ `Static` **CreateStream**(`client`, `stream`, `payload`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `stream` | `any` |
| `payload` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:359](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L359)

___

### DownloadFile

▸ `Static` **DownloadFile**(`client`, `id`, `filename`, `folder`, `highWaterMark`): `Promise`<[`DownloadResponse`](../modules#downloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `id` | `string` |
| `filename` | `string` |
| `folder` | `string` |
| `highWaterMark` | `number` |

#### Returns

`Promise`<[`DownloadResponse`](../modules#downloadresponse)\>

#### Defined in

[src/protowrap.ts:372](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L372)

___

### IsPendingReply

▸ `Static` **IsPendingReply**(`client`, `payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `payload` | [`Envelope`](../modules#envelope) |

#### Returns

`any`

#### Defined in

[src/protowrap.ts:539](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L539)

___

### RPC

▸ `Static` **RPC**(`client`, `payload`): `Promise`<[`Envelope`](../modules#envelope)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `payload` | `any` |

#### Returns

`Promise`<[`Envelope`](../modules#envelope)\>

#### Defined in

[src/protowrap.ts:330](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L330)

___

### ReceiveFileContent

▸ `Static` **ReceiveFileContent**(`client`, `rid`, `filename`, `highWaterMark`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `rid` | `string` |
| `filename` | `string` |
| `highWaterMark` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:507](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L507)

___

### SetStream

▸ `Static` **SetStream**(`client`, `stream`, `rid`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `stream` | `any` |
| `rid` | `string` |

#### Returns

`any`

#### Defined in

[src/protowrap.ts:355](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L355)

___

### UploadFile

▸ `Static` **UploadFile**(`client`, `filename`, `jwt`): `Promise`<[`UploadResponse`](../modules#uploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `filename` | `string` |
| `jwt` | `string` |

#### Returns

`Promise`<[`UploadResponse`](../modules#uploadresponse)\>

#### Defined in

[src/protowrap.ts:488](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L488)

___

### \_RPC

▸ `Static` **_RPC**(`client`, `payload`): [`string`, `Promise`<`any`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `payload` | `any` |

#### Returns

[`string`, `Promise`<`any`\>]

#### Defined in

[src/protowrap.ts:334](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L334)

___

### connect

▸ `Static` **connect**(`apiurl`, `clientConstructor?`): [`client`](client)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apiurl` | `string` | `undefined` |
| `clientConstructor` | () => [`iclient`](../interfaces/iclient) | `client` |

#### Returns

[`client`](client)

#### Defined in

[src/protowrap.ts:803](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L803)

___

### get

▸ `Static` **get**(`url`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:614](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L614)

___

### getChecksum

▸ `Static` **getChecksum**(`buffer`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |

#### Returns

`string`

#### Defined in

[src/protowrap.ts:1274](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L1274)

___

### getFileChecksum

▸ `Static` **getFileChecksum**(`filePath`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/protowrap.ts:1258](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L1258)

___

### init

▸ `Static` **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/protowrap.ts:68](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L68)

___

### pack

▸ `Static` **pack**(`command`, `payload`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `any` |
| `payload` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `type_url` | `string` |
| `value` | `any` |

#### Defined in

[src/protowrap.ts:285](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L285)

___

### post

▸ `Static` **post**(`jwt`, `agent`, `url`, `body`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | `any` |
| `agent` | `any` |
| `url` | `any` |
| `body` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:634](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L634)

___

### sendFileContent

▸ `Static` **sendFileContent**(`client`, `rid`, `filename`, `highWaterMark`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `rid` | `any` |
| `filename` | `any` |
| `highWaterMark` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:434](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L434)

___

### sendMesssag

▸ `Static` **sendMesssag**(`client`, `payload`, `id`, `dumpmsg`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client) |
| `payload` | `any` |
| `id` | `string` |
| `dumpmsg` | `boolean` |

#### Returns

`number`

#### Defined in

[src/protowrap.ts:682](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L682)

___

### serve

▸ `Static` **serve**(`protocol`, `onClientConnected`, `port`, `path`, `wss`, `app`, `http`, `clientConstructor?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `protocol` | [`clientType`](../modules#clienttype) | `undefined` |
| `onClientConnected` | `any` | `undefined` |
| `port` | `any` | `undefined` |
| `path` | `any` | `undefined` |
| `wss` | `any` | `undefined` |
| `app` | `any` | `undefined` |
| `http` | `any` | `undefined` |
| `clientConstructor` | () => [`iclient`](../interfaces/iclient) | `client` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `app` | `any` |
| `client` | `any` |
| `connected` | `boolean` |
| `connecting` | `boolean` |
| `http` | `any` |
| `id` | `string` |
| `pending` | {} |
| `port` | `any` |
| `protocol` | [`clientType`](../modules#clienttype) |
| `ws` | `any` |
| `wss` | `any` |

#### Defined in

[src/protowrap.ts:1008](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L1008)

___

### unpack

▸ `Static` **unpack**(`message`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`any`[]

#### Defined in

[src/protowrap.ts:296](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L296)
