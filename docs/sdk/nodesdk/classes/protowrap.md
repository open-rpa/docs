[@openiap/nodeapi](../README.md) / [Exports](../modules.md) / protowrap

# Class: protowrap

## Table of contents

### Constructors

- [constructor](protowrap.md#constructor)

### Properties

- [defaultprotocol](protowrap.md#defaultprotocol)
- [grpc\_server\_options](protowrap.md#grpc_server_options)
- [openiap\_proto](protowrap.md#openiap_proto)
- [protoRoot](protowrap.md#protoroot)

### Methods

- [ClientCleanup](protowrap.md#clientcleanup)
- [CommandToProto](protowrap.md#commandtoproto)
- [CreateStream](protowrap.md#createstream)
- [DownloadFile](protowrap.md#downloadfile)
- [IsPendingReply](protowrap.md#ispendingreply)
- [RPC](protowrap.md#rpc)
- [ReceiveFileContent](protowrap.md#receivefilecontent)
- [SetStream](protowrap.md#setstream)
- [UploadFile](protowrap.md#uploadfile)
- [\_RPC](protowrap.md#_rpc)
- [connect](protowrap.md#connect)
- [get](protowrap.md#get)
- [getChecksum](protowrap.md#getchecksum)
- [getFileChecksum](protowrap.md#getfilechecksum)
- [init](protowrap.md#init)
- [pack](protowrap.md#pack)
- [post](protowrap.md#post)
- [sendFileContent](protowrap.md#sendfilecontent)
- [sendMesssag](protowrap.md#sendmesssag)
- [serve](protowrap.md#serve)
- [unpack](protowrap.md#unpack)

## Constructors

### constructor

• **new protowrap**()

## Properties

### defaultprotocol

▪ `Static` **defaultprotocol**: [`clientType`](../modules.md#clienttype) = `"pipe"`

#### Defined in

[src/protowrap.ts:63](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L63)

___

### grpc\_server\_options

▪ `Static` **grpc\_server\_options**: `ChannelOptions`

#### Defined in

[src/protowrap.ts:50](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L50)

___

### openiap\_proto

▪ `Static` **openiap\_proto**: `ProtobufTypeDefinition` \| `ServiceClientConstructor` \| `GrpcObject`

#### Defined in

[src/protowrap.ts:65](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L65)

___

### protoRoot

▪ `Static` **protoRoot**: `any`

#### Defined in

[src/protowrap.ts:67](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L67)

## Methods

### ClientCleanup

▸ `Static` **ClientCleanup**(`client`, `onClientDisconnected`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `onClientDisconnected` | `any` |
| `error` | `string` \| `Error` |

#### Returns

`void`

#### Defined in

[src/protowrap.ts:614](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L614)

___

### CommandToProto

▸ `Static` **CommandToProto**(`command`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |

#### Returns

`string`

#### Defined in

[src/protowrap.ts:101](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L101)

___

### CreateStream

▸ `Static` **CreateStream**(`client`, `stream`, `payload`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `stream` | `any` |
| `payload` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:200](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L200)

___

### DownloadFile

▸ `Static` **DownloadFile**(`client`, `id`, `collectionname`, `filename`, `folder`, `highWaterMark`): `Promise`<[`DownloadResponse`](../modules.md#downloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `id` | `string` |
| `collectionname` | `string` |
| `filename` | `string` |
| `folder` | `string` |
| `highWaterMark` | `number` |

#### Returns

`Promise`<[`DownloadResponse`](../modules.md#downloadresponse)\>

#### Defined in

[src/protowrap.ts:213](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L213)

___

### IsPendingReply

▸ `Static` **IsPendingReply**(`client`, `payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `payload` | [`Envelope`](../modules.md#envelope) |

#### Returns

`any`

#### Defined in

[src/protowrap.ts:385](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L385)

___

### RPC

▸ `Static` **RPC**(`client`, `payload`): `Promise`<[`Envelope`](../modules.md#envelope)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `payload` | `any` |

#### Returns

`Promise`<[`Envelope`](../modules.md#envelope)\>

#### Defined in

[src/protowrap.ts:171](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L171)

___

### ReceiveFileContent

▸ `Static` **ReceiveFileContent**(`client`, `rid`, `filename`, `highWaterMark`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `rid` | `string` |
| `filename` | `string` |
| `highWaterMark` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:353](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L353)

___

### SetStream

▸ `Static` **SetStream**(`client`, `stream`, `rid`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `stream` | `any` |
| `rid` | `string` |

#### Returns

`any`

#### Defined in

[src/protowrap.ts:196](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L196)

___

### UploadFile

▸ `Static` **UploadFile**(`client`, `filename`, `metadata`, `jwt`): `Promise`<[`UploadResponse`](../modules.md#uploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `filename` | `string` |
| `metadata` | `object` |
| `jwt` | `string` |

#### Returns

`Promise`<[`UploadResponse`](../modules.md#uploadresponse)\>

#### Defined in

[src/protowrap.ts:329](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L329)

___

### \_RPC

▸ `Static` **_RPC**(`client`, `payload`): [`string`, `Promise`<`any`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `payload` | `any` |

#### Returns

[`string`, `Promise`<`any`\>]

#### Defined in

[src/protowrap.ts:175](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L175)

___

### connect

▸ `Static` **connect**(`apiurl`, `clientConstructor?`): [`client`](client.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apiurl` | `string` | `undefined` |
| `clientConstructor` | () => [`iclient`](../interfaces/iclient.md) | `client` |

#### Returns

[`client`](client.md)

#### Defined in

[src/protowrap.ts:649](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L649)

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

[src/protowrap.ts:460](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L460)

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

[src/protowrap.ts:1121](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L1121)

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

[src/protowrap.ts:1105](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L1105)

___

### init

▸ `Static` **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/protowrap.ts:68](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L68)

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

[src/protowrap.ts:126](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L126)

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

[src/protowrap.ts:480](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L480)

___

### sendFileContent

▸ `Static` **sendFileContent**(`client`, `rid`, `filename`, `highWaterMark`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `rid` | `any` |
| `filename` | `any` |
| `highWaterMark` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/protowrap.ts:275](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L275)

___

### sendMesssag

▸ `Static` **sendMesssag**(`client`, `payload`, `id`, `dumpmsg`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`client`](client.md) |
| `payload` | `any` |
| `id` | `string` |
| `dumpmsg` | `boolean` |

#### Returns

`number`

#### Defined in

[src/protowrap.ts:528](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L528)

___

### serve

▸ `Static` **serve**(`protocol`, `onClientConnected`, `port`, `path`, `wss`, `app`, `http`, `clientConstructor?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `protocol` | [`clientType`](../modules.md#clienttype) | `undefined` |
| `onClientConnected` | `any` | `undefined` |
| `port` | `any` | `undefined` |
| `path` | `any` | `undefined` |
| `wss` | `any` | `undefined` |
| `app` | `any` | `undefined` |
| `http` | `any` | `undefined` |
| `clientConstructor` | () => [`iclient`](../interfaces/iclient.md) | `client` |

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
| `protocol` | [`clientType`](../modules.md#clienttype) |
| `ws` | `any` |
| `wss` | `any` |

#### Defined in

[src/protowrap.ts:854](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L854)

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

[src/protowrap.ts:137](https://github.com/openiap/nodeapi/blob/a159861/src/protowrap.ts#L137)
