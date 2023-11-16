---
layout: page
title: protowrap
parent: NodeJS Api
---
[@openiap/nodeapi](../README.html) / [Exports](../modules.html) / protowrap

# Class: protowrap

## Table of contents

### Constructors

- [constructor](protowrap.html#constructor)

### Properties

- [defaultprotocol](protowrap.html#defaultprotocol)
- [grpc\_server\_options](protowrap.html#grpc_server_options)
- [openiap\_proto](protowrap.html#openiap_proto)
- [protoRoot](protowrap.html#protoroot)

### Methods

- [ClientCleanup](protowrap.html#clientcleanup)
- [CommandToProto](protowrap.html#commandtoproto)
- [CreateStream](protowrap.html#createstream)
- [DownloadFile](protowrap.html#downloadfile)
- [IsPendingReply](protowrap.html#ispendingreply)
- [RPC](protowrap.html#rpc)
- [ReceiveFileContent](protowrap.html#receivefilecontent)
- [SetStream](protowrap.html#setstream)
- [UploadFile](protowrap.html#uploadfile)
- [\_RPC](protowrap.html#_rpc)
- [connect](protowrap.html#connect)
- [get](protowrap.html#get)
- [getChecksum](protowrap.html#getchecksum)
- [getFileChecksum](protowrap.html#getfilechecksum)
- [init](protowrap.html#init)
- [pack](protowrap.html#pack)
- [post](protowrap.html#post)
- [sendFileContent](protowrap.html#sendfilecontent)
- [sendMesssag](protowrap.html#sendmesssag)
- [serve](protowrap.html#serve)
- [unpack](protowrap.html#unpack)

## Constructors

### constructor

• **new protowrap**()

## Properties

### defaultprotocol

▪ `Static` **defaultprotocol**: [`clientType`](../modules.html#clienttype) = `"pipe"`

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
| `client` | [`client`](client.html) |
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
| `client` | [`client`](client.html) |
| `stream` | `any` |
| `payload` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:359](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L359)

___

### DownloadFile

▸ `Static` **DownloadFile**(`client`, `id`, `filename`, `folder`, `highWaterMark`): `Promise`<[`DownloadResponse`](../modules.html#downloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `id` | `string` |
| `filename` | `string` |
| `folder` | `string` |
| `highWaterMark` | `number` |

#### Returns

`Promise`<[`DownloadResponse`](../modules.html#downloadresponse)\>

#### Defined in

[src/protowrap.ts:372](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L372)

___

### IsPendingReply

▸ `Static` **IsPendingReply**(`client`, `payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `payload` | [`Envelope`](../modules.html#envelope) |

#### Returns

`any`

#### Defined in

[src/protowrap.ts:539](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L539)

___

### RPC

▸ `Static` **RPC**(`client`, `payload`): `Promise`<[`Envelope`](../modules.html#envelope)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `payload` | `any` |

#### Returns

`Promise`<[`Envelope`](../modules.html#envelope)\>

#### Defined in

[src/protowrap.ts:330](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L330)

___

### ReceiveFileContent

▸ `Static` **ReceiveFileContent**(`client`, `rid`, `filename`, `highWaterMark`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
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
| `client` | [`client`](client.html) |
| `stream` | `any` |
| `rid` | `string` |

#### Returns

`any`

#### Defined in

[src/protowrap.ts:355](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L355)

___

### UploadFile

▸ `Static` **UploadFile**(`client`, `filename`, `jwt`): `Promise`<[`UploadResponse`](../modules.html#uploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `filename` | `string` |
| `jwt` | `string` |

#### Returns

`Promise`<[`UploadResponse`](../modules.html#uploadresponse)\>

#### Defined in

[src/protowrap.ts:488](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L488)

___

### \_RPC

▸ `Static` **_RPC**(`client`, `payload`): [`string`, `Promise`<`any`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.html) |
| `payload` | `any` |

#### Returns

[`string`, `Promise`<`any`\>]

#### Defined in

[src/protowrap.ts:334](https://github.com/openiap/nodeapi/blob/a6b5438/src/protowrap.ts#L334)

___

### connect

▸ `Static` **connect**(`apiurl`, `clientConstructor?`): [`client`](client.html)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apiurl` | `string` | `undefined` |
| `clientConstructor` | () => [`iclient`](../interfaces/iclient.html) | `client` |

#### Returns

[`client`](client.html)

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
| `client` | [`client`](client.html) |
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
| `client` | [`client`](client.html) |
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
| `protocol` | [`clientType`](../modules.html#clienttype) | `undefined` |
| `onClientConnected` | `any` | `undefined` |
| `port` | `any` | `undefined` |
| `path` | `any` | `undefined` |
| `wss` | `any` | `undefined` |
| `app` | `any` | `undefined` |
| `http` | `any` | `undefined` |
| `clientConstructor` | () => [`iclient`](../interfaces/iclient.html) | `client` |

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
| `protocol` | [`clientType`](../modules.html#clienttype) |
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
