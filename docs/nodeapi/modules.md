
---
layout: page
title: modules
parent: NodeJS Api
---
[@openiap/nodeapi](README.md) / Exports

# @openiap/nodeapi

## Table of contents

### Classes

- [Ace](classes/Ace.md)
- [Base](classes/Base.md)
- [Rights](classes/Rights.md)
- [WellknownIds](classes/WellknownIds.md)
- [apiinstrumentation](classes/apiinstrumentation.md)
- [changestream](classes/changestream.md)
- [client](classes/client.md)
- [config](classes/config.md)
- [openiap](classes/openiap.md)
- [protowrap](classes/protowrap.md)

### Interfaces

- [AddWorkItemQueueRequest](interfaces/AddWorkItemQueueRequest.md)
- [AddWorkItemQueueResponse](interfaces/AddWorkItemQueueResponse.md)
- [AggregateRequest](interfaces/AggregateRequest.md)
- [AggregateResponse](interfaces/AggregateResponse.md)
- [BeginStream](interfaces/BeginStream.md)
- [CountRequest](interfaces/CountRequest.md)
- [CountResponse](interfaces/CountResponse.md)
- [CustomCommandRequest](interfaces/CustomCommandRequest.md)
- [CustomCommandResponse](interfaces/CustomCommandResponse.md)
- [DeleteManyRequest](interfaces/DeleteManyRequest.md)
- [DeleteManyResponse](interfaces/DeleteManyResponse.md)
- [DeleteOneRequest](interfaces/DeleteOneRequest.md)
- [DeleteOneResponse](interfaces/DeleteOneResponse.md)
- [DeleteWorkItemQueueRequest](interfaces/DeleteWorkItemQueueRequest.md)
- [DeleteWorkItemQueueResponse](interfaces/DeleteWorkItemQueueResponse.md)
- [DeleteWorkitemRequest](interfaces/DeleteWorkitemRequest.md)
- [DeleteWorkitemResponse](interfaces/DeleteWorkitemResponse.md)
- [DownloadRequest](interfaces/DownloadRequest.md)
- [DownloadResponse](interfaces/DownloadResponse.md)
- [DropCollectionRequest](interfaces/DropCollectionRequest.md)
- [DropCollectionResponse](interfaces/DropCollectionResponse.md)
- [EndStream](interfaces/EndStream.md)
- [Envelope](interfaces/Envelope.md)
- [ErrorResponse](interfaces/ErrorResponse.md)
- [GetDocumentVersionRequest](interfaces/GetDocumentVersionRequest.md)
- [GetDocumentVersionResponse](interfaces/GetDocumentVersionResponse.md)
- [GetElementRequest](interfaces/GetElementRequest.md)
- [GetElementResponse](interfaces/GetElementResponse.md)
- [InsertManyRequest](interfaces/InsertManyRequest.md)
- [InsertManyResponse](interfaces/InsertManyResponse.md)
- [InsertOneRequest](interfaces/InsertOneRequest.md)
- [InsertOneResponse](interfaces/InsertOneResponse.md)
- [InsertOrUpdateManyRequest](interfaces/InsertOrUpdateManyRequest.md)
- [InsertOrUpdateManyResponse](interfaces/InsertOrUpdateManyResponse.md)
- [InsertOrUpdateOneRequest](interfaces/InsertOrUpdateOneRequest.md)
- [InsertOrUpdateOneResponse](interfaces/InsertOrUpdateOneResponse.md)
- [ListCollectionsRequest](interfaces/ListCollectionsRequest.md)
- [ListCollectionsResponse](interfaces/ListCollectionsResponse.md)
- [PingRequest](interfaces/PingRequest.md)
- [PingResponse](interfaces/PingResponse.md)
- [PopWorkitemRequest](interfaces/PopWorkitemRequest.md)
- [PopWorkitemResponse](interfaces/PopWorkitemResponse.md)
- [PushWorkitemRequest](interfaces/PushWorkitemRequest.md)
- [PushWorkitemResponse](interfaces/PushWorkitemResponse.md)
- [PushWorkitemsRequest](interfaces/PushWorkitemsRequest.md)
- [PushWorkitemsResponse](interfaces/PushWorkitemsResponse.md)
- [QueryRequest](interfaces/QueryRequest.md)
- [QueryResponse](interfaces/QueryResponse.md)
- [QueueEvent](interfaces/QueueEvent.md)
- [QueueMessageRequest](interfaces/QueueMessageRequest.md)
- [QueueMessageResponse](interfaces/QueueMessageResponse.md)
- [RefreshToken](interfaces/RefreshToken.md)
- [RegisterExchangeRequest](interfaces/RegisterExchangeRequest.md)
- [RegisterExchangeResponse](interfaces/RegisterExchangeResponse.md)
- [RegisterQueueRequest](interfaces/RegisterQueueRequest.md)
- [RegisterQueueResponse](interfaces/RegisterQueueResponse.md)
- [Role](interfaces/Role.md)
- [SigninRequest](interfaces/SigninRequest.md)
- [SigninResponse](interfaces/SigninResponse.md)
- [Stat](interfaces/Stat.md)
- [Stream](interfaces/Stream.md)
- [UnRegisterQueueRequest](interfaces/UnRegisterQueueRequest.md)
- [UnRegisterQueueResponse](interfaces/UnRegisterQueueResponse.md)
- [UnWatchRequest](interfaces/UnWatchRequest.md)
- [UnWatchResponse](interfaces/UnWatchResponse.md)
- [UpdateDocumentRequest](interfaces/UpdateDocumentRequest.md)
- [UpdateDocumentResponse](interfaces/UpdateDocumentResponse.md)
- [UpdateOneRequest](interfaces/UpdateOneRequest.md)
- [UpdateOneResponse](interfaces/UpdateOneResponse.md)
- [UpdateResult](interfaces/UpdateResult.md)
- [UpdateWorkItemQueueRequest](interfaces/UpdateWorkItemQueueRequest.md)
- [UpdateWorkItemQueueResponse](interfaces/UpdateWorkItemQueueResponse.md)
- [UpdateWorkitemRequest](interfaces/UpdateWorkitemRequest.md)
- [UpdateWorkitemResponse](interfaces/UpdateWorkitemResponse.md)
- [UploadRequest](interfaces/UploadRequest.md)
- [UploadResponse](interfaces/UploadResponse.md)
- [User](interfaces/User.md)
- [WatchEvent](interfaces/WatchEvent.md)
- [WatchRequest](interfaces/WatchRequest.md)
- [WatchResponse](interfaces/WatchResponse.md)
- [WorkItemQueue](interfaces/WorkItemQueue.md)
- [Workitem](interfaces/Workitem.md)
- [WorkitemFile](interfaces/WorkitemFile.md)
- [iclient](interfaces/iclient.md)

### Type Aliases

- [AggregateOptions](modules.md#aggregateoptions)
- [CountOptions](modules.md#countoptions)
- [CreateWorkflowInstanceOptions](modules.md#createworkflowinstanceoptions)
- [CustomCommandOptions](modules.md#customcommandoptions)
- [DeleteManyOptions](modules.md#deletemanyoptions)
- [DeleteOneOptions](modules.md#deleteoneoptions)
- [DeleteWorkitemOptions](modules.md#deleteworkitemoptions)
- [DownloadFileOptions](modules.md#downloadfileoptions)
- [DropCollectionOptions](modules.md#dropcollectionoptions)
- [FindOneOptions](modules.md#findoneoptions)
- [GetDocumentVersionOptions](modules.md#getdocumentversionoptions)
- [InsertManyOptions](modules.md#insertmanyoptions)
- [InsertOneOptions](modules.md#insertoneoptions)
- [InsertOrUpdateManyOptions](modules.md#insertorupdatemanyoptions)
- [InsertOrUpdateOneOptions](modules.md#insertorupdateoneoptions)
- [ListCollectionsOptions](modules.md#listcollectionsoptions)
- [PopWorkitemOptions](modules.md#popworkitemoptions)
- [PushWorkitemOptions](modules.md#pushworkitemoptions)
- [PushWorkitemsOptions](modules.md#pushworkitemsoptions)
- [QueryOptions](modules.md#queryoptions)
- [QueueMessageOptions](modules.md#queuemessageoptions)
- [RegisterExchangeOptions](modules.md#registerexchangeoptions)
- [RegisterQueueOptions](modules.md#registerqueueoptions)
- [SigninOptions](modules.md#signinoptions)
- [UnRegisterQueueOptions](modules.md#unregisterqueueoptions)
- [UnWatchOptions](modules.md#unwatchoptions)
- [UpdateDocumentOptions](modules.md#updatedocumentoptions)
- [UpdateOneOptions](modules.md#updateoneoptions)
- [UpdateWorkitemOptions](modules.md#updateworkitemoptions)
- [UploadFileOptions](modules.md#uploadfileoptions)
- [WatchOptions](modules.md#watchoptions)
- [clientAgent](modules.md#clientagent)
- [clientType](modules.md#clienttype)

### Variables

- [AddWorkItemQueueRequest](modules.md#addworkitemqueuerequest)
- [AddWorkItemQueueResponse](modules.md#addworkitemqueueresponse)
- [AggregateRequest](modules.md#aggregaterequest)
- [AggregateResponse](modules.md#aggregateresponse)
- [BeginStream](modules.md#beginstream)
- [CountRequest](modules.md#countrequest)
- [CountResponse](modules.md#countresponse)
- [CustomCommandRequest](modules.md#customcommandrequest)
- [CustomCommandResponse](modules.md#customcommandresponse)
- [DeleteManyRequest](modules.md#deletemanyrequest)
- [DeleteManyResponse](modules.md#deletemanyresponse)
- [DeleteOneRequest](modules.md#deleteonerequest)
- [DeleteOneResponse](modules.md#deleteoneresponse)
- [DeleteWorkItemQueueRequest](modules.md#deleteworkitemqueuerequest)
- [DeleteWorkItemQueueResponse](modules.md#deleteworkitemqueueresponse)
- [DeleteWorkitemRequest](modules.md#deleteworkitemrequest)
- [DeleteWorkitemResponse](modules.md#deleteworkitemresponse)
- [DownloadRequest](modules.md#downloadrequest)
- [DownloadResponse](modules.md#downloadresponse)
- [DropCollectionRequest](modules.md#dropcollectionrequest)
- [DropCollectionResponse](modules.md#dropcollectionresponse)
- [EndStream](modules.md#endstream)
- [Envelope](modules.md#envelope)
- [ErrorResponse](modules.md#errorresponse)
- [GetDocumentVersionRequest](modules.md#getdocumentversionrequest)
- [GetDocumentVersionResponse](modules.md#getdocumentversionresponse)
- [GetElementRequest](modules.md#getelementrequest)
- [GetElementResponse](modules.md#getelementresponse)
- [InsertManyRequest](modules.md#insertmanyrequest)
- [InsertManyResponse](modules.md#insertmanyresponse)
- [InsertOneRequest](modules.md#insertonerequest)
- [InsertOneResponse](modules.md#insertoneresponse)
- [InsertOrUpdateManyRequest](modules.md#insertorupdatemanyrequest)
- [InsertOrUpdateManyResponse](modules.md#insertorupdatemanyresponse)
- [InsertOrUpdateOneRequest](modules.md#insertorupdateonerequest)
- [InsertOrUpdateOneResponse](modules.md#insertorupdateoneresponse)
- [ListCollectionsRequest](modules.md#listcollectionsrequest)
- [ListCollectionsResponse](modules.md#listcollectionsresponse)
- [PingRequest](modules.md#pingrequest)
- [PingResponse](modules.md#pingresponse)
- [PopWorkitemRequest](modules.md#popworkitemrequest)
- [PopWorkitemResponse](modules.md#popworkitemresponse)
- [PushWorkitemRequest](modules.md#pushworkitemrequest)
- [PushWorkitemResponse](modules.md#pushworkitemresponse)
- [PushWorkitemsRequest](modules.md#pushworkitemsrequest)
- [PushWorkitemsResponse](modules.md#pushworkitemsresponse)
- [QueryRequest](modules.md#queryrequest)
- [QueryResponse](modules.md#queryresponse)
- [QueueEvent](modules.md#queueevent)
- [QueueMessageRequest](modules.md#queuemessagerequest)
- [QueueMessageResponse](modules.md#queuemessageresponse)
- [RefreshToken](modules.md#refreshtoken)
- [RegisterExchangeRequest](modules.md#registerexchangerequest)
- [RegisterExchangeResponse](modules.md#registerexchangeresponse)
- [RegisterQueueRequest](modules.md#registerqueuerequest)
- [RegisterQueueResponse](modules.md#registerqueueresponse)
- [Role](modules.md#role)
- [SigninRequest](modules.md#signinrequest)
- [SigninResponse](modules.md#signinresponse)
- [Stat](modules.md#stat)
- [Stream](modules.md#stream)
- [UnRegisterQueueRequest](modules.md#unregisterqueuerequest)
- [UnRegisterQueueResponse](modules.md#unregisterqueueresponse)
- [UnWatchRequest](modules.md#unwatchrequest)
- [UnWatchResponse](modules.md#unwatchresponse)
- [UpdateDocumentRequest](modules.md#updatedocumentrequest)
- [UpdateDocumentResponse](modules.md#updatedocumentresponse)
- [UpdateOneRequest](modules.md#updateonerequest)
- [UpdateOneResponse](modules.md#updateoneresponse)
- [UpdateResult](modules.md#updateresult)
- [UpdateWorkItemQueueRequest](modules.md#updateworkitemqueuerequest)
- [UpdateWorkItemQueueResponse](modules.md#updateworkitemqueueresponse)
- [UpdateWorkitemRequest](modules.md#updateworkitemrequest)
- [UpdateWorkitemResponse](modules.md#updateworkitemresponse)
- [UploadRequest](modules.md#uploadrequest)
- [UploadResponse](modules.md#uploadresponse)
- [User](modules.md#user)
- [WatchEvent](modules.md#watchevent)
- [WatchRequest](modules.md#watchrequest)
- [WatchResponse](modules.md#watchresponse)
- [WorkItemQueue](modules.md#workitemqueue)
- [Workitem](modules.md#workitem)
- [WorkitemFile](modules.md#workitemfile)

## Type Aliases

### AggregateOptions

Ƭ **AggregateOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregates?` | `object`[] |
| `collectionname?` | `string` |
| `jwt?` | `string` |
| `queryas?` | `string` |

#### Defined in

[src/openiap.ts:1577](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1577)

___

### CountOptions

Ƭ **CountOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `jwt?` | `string` |
| `orderby?` | `Object` \| `string` |
| `projection?` | `Object` |
| `query?` | `object` |
| `queryas?` | `string` |

#### Defined in

[src/openiap.ts:1553](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1553)

___

### CreateWorkflowInstanceOptions

Ƭ **CreateWorkflowInstanceOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `initialrun` | `boolean` |
| `jwt?` | `string` |
| `name` | `string` |
| `resultqueue` | `string` |
| `targetid` | `string` |
| `workflowid` | `string` |

#### Defined in

[src/openiap.ts:1812](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1812)

___

### CustomCommandOptions

Ƭ **CustomCommandOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `data?` | `string` |
| `id?` | `string` |
| `jwt?` | `string` |
| `name?` | `string` |

#### Defined in

[src/openiap.ts:1803](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1803)

___

### DeleteManyOptions

Ƭ **DeleteManyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `jwt?` | `string` |
| `query` | `object` |
| `recursive?` | `boolean` |

#### Defined in

[src/openiap.ts:1662](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1662)

___

### DeleteOneOptions

Ƭ **DeleteOneOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `id` | `string` |
| `jwt?` | `string` |
| `recursive?` | `boolean` |

#### Defined in

[src/openiap.ts:1653](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1653)

___

### DeleteWorkitemOptions

Ƭ **DeleteWorkitemOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `jwt?` | `string` |

#### Defined in

[src/openiap.ts:1797](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1797)

___

### DownloadFileOptions

Ƭ **DownloadFileOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filename?` | `string` |
| `folder?` | `string` |
| `id?` | `string` |
| `jwt?` | `string` |

#### Defined in

[src/openiap.ts:1684](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1684)

___

### DropCollectionOptions

Ƭ **DropCollectionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname` | `string` |
| `jwt?` | `string` |

#### Defined in

[src/openiap.ts:1471](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1471)

___

### FindOneOptions

Ƭ **FindOneOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `jwt?` | `string` |
| `orderby?` | `Object` \| `string` |
| `projection?` | `Object` |
| `query?` | `object` |
| `queryas?` | `string` |

#### Defined in

[src/openiap.ts:1513](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1513)

___

### GetDocumentVersionOptions

Ƭ **GetDocumentVersionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `decrypt?` | `boolean` |
| `id` | `string` |
| `jwt?` | `string` |
| `version?` | `number` |

#### Defined in

[src/openiap.ts:1541](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1541)

___

### InsertManyOptions

Ƭ **InsertManyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `items` | `object`[] |
| `j?` | `boolean` |
| `jwt?` | `string` |
| `skipresults?` | `boolean` |
| `w?` | `number` |

#### Defined in

[src/openiap.ts:1597](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1597)

___

### InsertOneOptions

Ƭ **InsertOneOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `item` | `object` |
| `j?` | `boolean` |
| `jwt?` | `string` |
| `w?` | `number` |

#### Defined in

[src/openiap.ts:1587](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1587)

___

### InsertOrUpdateManyOptions

Ƭ **InsertOrUpdateManyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `items` | `object`[] |
| `j?` | `boolean` |
| `jwt?` | `string` |
| `skipresults?` | `boolean` |
| `uniqeness?` | `string` |
| `w?` | `number` |

#### Defined in

[src/openiap.ts:1640](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1640)

___

### InsertOrUpdateOneOptions

Ƭ **InsertOrUpdateOneOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `item` | `object` |
| `j?` | `boolean` |
| `jwt?` | `string` |
| `uniqeness?` | `string` |
| `w?` | `number` |

#### Defined in

[src/openiap.ts:1629](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1629)

___

### ListCollectionsOptions

Ƭ **ListCollectionsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `includehist?` | `boolean` |
| `jwt?` | `string` |

#### Defined in

[src/openiap.ts:1464](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1464)

___

### PopWorkitemOptions

Ƭ **PopWorkitemOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compressed?` | `boolean` |
| `includefiles?` | `boolean` |
| `jwt?` | `string` |
| `wiq?` | `string` |
| `wiqid?` | `string` |

#### Defined in

[src/openiap.ts:1769](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1769)

___

### PushWorkitemOptions

Ƭ **PushWorkitemOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `failed_wiq?` | `string` |
| `failed_wiqid?` | `string` |
| `files?` | `any`[] |
| `jwt?` | `string` |
| `name?` | `string` |
| `nextrun?` | `Date` |
| `payload` | `any` |
| `priority?` | `number` |
| `success_wiq?` | `string` |
| `success_wiqid?` | `string` |
| `wiq?` | `string` |
| `wiqid?` | `string` |

#### Defined in

[src/openiap.ts:1737](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1737)

___

### PushWorkitemsOptions

Ƭ **PushWorkitemsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `failed_wiq?` | `string` |
| `failed_wiqid?` | `string` |
| `items` | [`Workitem`](modules.md#workitem)[] |
| `jwt?` | `string` |
| `nextrun?` | `Date` |
| `priority?` | `number` |
| `success_wiq?` | `string` |
| `success_wiqid?` | `string` |
| `wiq?` | `string` |
| `wiqid?` | `string` |

#### Defined in

[src/openiap.ts:1754](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1754)

___

### QueryOptions

Ƭ **QueryOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `jwt?` | `string` |
| `orderby?` | `Object` \| `string` |
| `projection?` | `Object` |
| `query?` | `object` |
| `queryas?` | `string` |
| `skip?` | `number` |
| `top?` | `number` |

#### Defined in

[src/openiap.ts:1525](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1525)

___

### QueueMessageOptions

Ƭ **QueueMessageOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `data` | `object` |
| `exchangename?` | `string` |
| `expiration?` | `number` |
| `jwt?` | `string` |
| `queuename` | `string` |
| `replyto?` | `string` |
| `routingkey?` | `string` |
| `striptoken?` | `boolean` |

#### Defined in

[src/openiap.ts:1723](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1723)

___

### RegisterExchangeOptions

Ƭ **RegisterExchangeOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addqueue?` | `boolean` |
| `algorithm?` | `string` |
| `exchangename` | `string` |
| `jwt?` | `string` |
| `routingkey?` | `string` |

#### Defined in

[src/openiap.ts:1705](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1705)

___

### RegisterQueueOptions

Ƭ **RegisterQueueOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jwt?` | `string` |
| `queuename` | `string` |

#### Defined in

[src/openiap.ts:1699](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1699)

___

### SigninOptions

Ƭ **SigninOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent?` | `string` |
| `jwt?` | `string` |
| `longtoken?` | `boolean` |
| `password?` | `string` |
| `ping?` | `boolean` |
| `username?` | `string` |
| `validateonly?` | `boolean` |
| `version?` | `string` |

#### Defined in

[src/openiap.ts:1449](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1449)

___

### UnRegisterQueueOptions

Ƭ **UnRegisterQueueOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jwt?` | `string` |
| `queuename` | `string` |

#### Defined in

[src/openiap.ts:1717](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1717)

___

### UnWatchOptions

Ƭ **UnWatchOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[src/openiap.ts:1679](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1679)

___

### UpdateDocumentOptions

Ƭ **UpdateDocumentOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `document` | `object` |
| `j?` | `boolean` |
| `jwt?` | `string` |
| `query` | `object` |
| `w?` | `number` |

#### Defined in

[src/openiap.ts:1618](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1618)

___

### UpdateOneOptions

Ƭ **UpdateOneOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `item` | `object` |
| `j?` | `boolean` |
| `jwt?` | `string` |
| `w?` | `number` |

#### Defined in

[src/openiap.ts:1608](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1608)

___

### UpdateWorkitemOptions

Ƭ **UpdateWorkitemOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ignoremaxretries?` | `boolean` | If workitem has reached the max number of retryes and this is set to true, the workitem will be updated it to retry anyway |
| `jwt?` | `string` | Override who the request should run as, using a customer jwt |
| `workitem` | [`Workitem`](modules.md#workitem) | Workitem to update |

#### Defined in

[src/openiap.ts:1780](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1780)

___

### UploadFileOptions

Ƭ **UploadFileOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `jwt?` | `string` |

#### Defined in

[src/openiap.ts:1692](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1692)

___

### WatchOptions

Ƭ **WatchOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionname?` | `string` |
| `jwt?` | `string` |
| `paths` | `string`[] |

#### Defined in

[src/openiap.ts:1671](https://github.com/openiap/nodeapi/blob/a6b5438/src/openiap.ts#L1671)

___

### clientAgent

Ƭ **clientAgent**: ``"node"`` \| ``"browser"`` \| ``"nodered"`` \| ``"openrpa"`` \| ``"powershell"`` \| ``"assistant"`` \| ``"assistent"`` \| ``"nodeagent"`` \| ``"python"`` \| ``"java"`` \| ``"csharp"`` \| ``"go"`` \| ``"unknown"``

#### Defined in

[src/client.ts:11](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L11)

___

### clientType

Ƭ **clientType**: ``"socket"`` \| ``"pipe"`` \| ``"ws"`` \| ``"grpc"`` \| ``"rest"``

#### Defined in

[src/client.ts:10](https://github.com/openiap/nodeapi/blob/a6b5438/src/client.ts#L10)

## Variables

### AddWorkItemQueueRequest

• **AddWorkItemQueueRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`AddWorkItemQueueRequest`](modules.md#addworkitemqueuerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`AddWorkItemQueueRequest`](modules.md#addworkitemqueuerequest) |
| `encode` | (`message`: [`AddWorkItemQueueRequest`](modules.md#addworkitemqueuerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`AddWorkItemQueueRequest`](modules.md#addworkitemqueuerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`AddWorkItemQueueRequest`](modules.md#addworkitemqueuerequest) |
| `toJSON` | (`message`: [`AddWorkItemQueueRequest`](modules.md#addworkitemqueuerequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:125](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L125)

[src/proto/workitems.ts:1521](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1521)

___

### AddWorkItemQueueResponse

• **AddWorkItemQueueResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`AddWorkItemQueueResponse`](modules.md#addworkitemqueueresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`AddWorkItemQueueResponse`](modules.md#addworkitemqueueresponse) |
| `encode` | (`message`: [`AddWorkItemQueueResponse`](modules.md#addworkitemqueueresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`AddWorkItemQueueResponse`](modules.md#addworkitemqueueresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`AddWorkItemQueueResponse`](modules.md#addworkitemqueueresponse) |
| `toJSON` | (`message`: [`AddWorkItemQueueResponse`](modules.md#addworkitemqueueresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:130](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L130)

[src/proto/workitems.ts:1586](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1586)

___

### AggregateRequest

• **AggregateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`AggregateRequest`](modules.md#aggregaterequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`AggregateRequest`](modules.md#aggregaterequest) |
| `encode` | (`message`: [`AggregateRequest`](modules.md#aggregaterequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`AggregateRequest`](modules.md#aggregaterequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`AggregateRequest`](modules.md#aggregaterequest) |
| `toJSON` | (`message`: [`AggregateRequest`](modules.md#aggregaterequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:77](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L77)

[src/proto/querys.ts:1072](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1072)

___

### AggregateResponse

• **AggregateResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`AggregateResponse`](modules.md#aggregateresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`AggregateResponse`](modules.md#aggregateresponse) |
| `encode` | (`message`: [`AggregateResponse`](modules.md#aggregateresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`AggregateResponse`](modules.md#aggregateresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`AggregateResponse`](modules.md#aggregateresponse) |
| `toJSON` | (`message`: [`AggregateResponse`](modules.md#aggregateresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:84](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L84)

[src/proto/querys.ts:1152](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1152)

___

### BeginStream

• **BeginStream**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`BeginStream`](modules.md#beginstream) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`BeginStream`](modules.md#beginstream) |
| `encode` | (`message`: [`BeginStream`](modules.md#beginstream), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`BeginStream`](modules.md#beginstream) |
| `fromPartial` | <I\>(`object`: `I`) => [`BeginStream`](modules.md#beginstream) |
| `toJSON` | (`message`: [`BeginStream`](modules.md#beginstream)) => `unknown` |

#### Defined in

[src/proto/base.ts:133](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L133)

[src/proto/base.ts:986](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L986)

___

### CountRequest

• **CountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`CountRequest`](modules.md#countrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`CountRequest`](modules.md#countrequest) |
| `encode` | (`message`: [`CountRequest`](modules.md#countrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`CountRequest`](modules.md#countrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`CountRequest`](modules.md#countrequest) |
| `toJSON` | (`message`: [`CountRequest`](modules.md#countrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:88](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L88)

[src/proto/querys.ts:1203](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1203)

___

### CountResponse

• **CountResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`CountResponse`](modules.md#countresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`CountResponse`](modules.md#countresponse) |
| `encode` | (`message`: [`CountResponse`](modules.md#countresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`CountResponse`](modules.md#countresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`CountResponse`](modules.md#countresponse) |
| `toJSON` | (`message`: [`CountResponse`](modules.md#countresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:94](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L94)

[src/proto/querys.ts:1274](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1274)

___

### CustomCommandRequest

• **CustomCommandRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`CustomCommandRequest`](modules.md#customcommandrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`CustomCommandRequest`](modules.md#customcommandrequest) |
| `encode` | (`message`: [`CustomCommandRequest`](modules.md#customcommandrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`CustomCommandRequest`](modules.md#customcommandrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`CustomCommandRequest`](modules.md#customcommandrequest) |
| `toJSON` | (`message`: [`CustomCommandRequest`](modules.md#customcommandrequest)) => `unknown` |

#### Defined in

[src/proto/base.ts:163](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L163)

[src/proto/base.ts:1338](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1338)

___

### CustomCommandResponse

• **CustomCommandResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`CustomCommandResponse`](modules.md#customcommandresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`CustomCommandResponse`](modules.md#customcommandresponse) |
| `encode` | (`message`: [`CustomCommandResponse`](modules.md#customcommandresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`CustomCommandResponse`](modules.md#customcommandresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`CustomCommandResponse`](modules.md#customcommandresponse) |
| `toJSON` | (`message`: [`CustomCommandResponse`](modules.md#customcommandresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:170](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L170)

[src/proto/base.ts:1418](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1418)

___

### DeleteManyRequest

• **DeleteManyRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteManyRequest`](modules.md#deletemanyrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteManyRequest`](modules.md#deletemanyrequest) |
| `encode` | (`message`: [`DeleteManyRequest`](modules.md#deletemanyrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DeleteManyRequest`](modules.md#deletemanyrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`DeleteManyRequest`](modules.md#deletemanyrequest) |
| `toJSON` | (`message`: [`DeleteManyRequest`](modules.md#deletemanyrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:199](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L199)

[src/proto/querys.ts:2514](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2514)

___

### DeleteManyResponse

• **DeleteManyResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteManyResponse`](modules.md#deletemanyresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteManyResponse`](modules.md#deletemanyresponse) |
| `encode` | (`message`: [`DeleteManyResponse`](modules.md#deletemanyresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DeleteManyResponse`](modules.md#deletemanyresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`DeleteManyResponse`](modules.md#deletemanyresponse) |
| `toJSON` | (`message`: [`DeleteManyResponse`](modules.md#deletemanyresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:206](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L206)

[src/proto/querys.ts:2598](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2598)

___

### DeleteOneRequest

• **DeleteOneRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteOneRequest`](modules.md#deleteonerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteOneRequest`](modules.md#deleteonerequest) |
| `encode` | (`message`: [`DeleteOneRequest`](modules.md#deleteonerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DeleteOneRequest`](modules.md#deleteonerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`DeleteOneRequest`](modules.md#deleteonerequest) |
| `toJSON` | (`message`: [`DeleteOneRequest`](modules.md#deleteonerequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:189](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L189)

[src/proto/querys.ts:2392](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2392)

___

### DeleteOneResponse

• **DeleteOneResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteOneResponse`](modules.md#deleteoneresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteOneResponse`](modules.md#deleteoneresponse) |
| `encode` | (`message`: [`DeleteOneResponse`](modules.md#deleteoneresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DeleteOneResponse`](modules.md#deleteoneresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`DeleteOneResponse`](modules.md#deleteoneresponse) |
| `toJSON` | (`message`: [`DeleteOneResponse`](modules.md#deleteoneresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:195](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L195)

[src/proto/querys.ts:2463](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2463)

___

### DeleteWorkItemQueueRequest

• **DeleteWorkItemQueueRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteWorkItemQueueRequest`](modules.md#deleteworkitemqueuerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteWorkItemQueueRequest`](modules.md#deleteworkitemqueuerequest) |
| `encode` | (`message`: [`DeleteWorkItemQueueRequest`](modules.md#deleteworkitemqueuerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DeleteWorkItemQueueRequest`](modules.md#deleteworkitemqueuerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`DeleteWorkItemQueueRequest`](modules.md#deleteworkitemqueuerequest) |
| `toJSON` | (`message`: [`DeleteWorkItemQueueRequest`](modules.md#deleteworkitemqueuerequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:144](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L144)

[src/proto/workitems.ts:1768](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1768)

___

### DeleteWorkItemQueueResponse

• **DeleteWorkItemQueueResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteWorkItemQueueResponse`](modules.md#deleteworkitemqueueresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteWorkItemQueueResponse`](modules.md#deleteworkitemqueueresponse) |
| `encode` | (`_`: [`DeleteWorkItemQueueResponse`](modules.md#deleteworkitemqueueresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`DeleteWorkItemQueueResponse`](modules.md#deleteworkitemqueueresponse) |
| `fromPartial` | <I\>(`_`: `I`) => [`DeleteWorkItemQueueResponse`](modules.md#deleteworkitemqueueresponse) |
| `toJSON` | (`_`: [`DeleteWorkItemQueueResponse`](modules.md#deleteworkitemqueueresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:150](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L150)

[src/proto/workitems.ts:1839](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1839)

___

### DeleteWorkitemRequest

• **DeleteWorkitemRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteWorkitemRequest`](modules.md#deleteworkitemrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteWorkitemRequest`](modules.md#deleteworkitemrequest) |
| `encode` | (`message`: [`DeleteWorkitemRequest`](modules.md#deleteworkitemrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DeleteWorkitemRequest`](modules.md#deleteworkitemrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`DeleteWorkitemRequest`](modules.md#deleteworkitemrequest) |
| `toJSON` | (`message`: [`DeleteWorkitemRequest`](modules.md#deleteworkitemrequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:92](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L92)

[src/proto/workitems.ts:1148](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1148)

___

### DeleteWorkitemResponse

• **DeleteWorkitemResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DeleteWorkitemResponse`](modules.md#deleteworkitemresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DeleteWorkitemResponse`](modules.md#deleteworkitemresponse) |
| `encode` | (`_`: [`DeleteWorkitemResponse`](modules.md#deleteworkitemresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`DeleteWorkitemResponse`](modules.md#deleteworkitemresponse) |
| `fromPartial` | <I\>(`_`: `I`) => [`DeleteWorkitemResponse`](modules.md#deleteworkitemresponse) |
| `toJSON` | (`_`: [`DeleteWorkitemResponse`](modules.md#deleteworkitemresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:96](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L96)

[src/proto/workitems.ts:1199](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1199)

___

### DownloadRequest

• **DownloadRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DownloadRequest`](modules.md#downloadrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DownloadRequest`](modules.md#downloadrequest) |
| `encode` | (`message`: [`DownloadRequest`](modules.md#downloadrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DownloadRequest`](modules.md#downloadrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`DownloadRequest`](modules.md#downloadrequest) |
| `toJSON` | (`message`: [`DownloadRequest`](modules.md#downloadrequest)) => `unknown` |

#### Defined in

[src/proto/base.ts:107](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L107)

[src/proto/base.ts:684](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L684)

___

### DownloadResponse

• **DownloadResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DownloadResponse`](modules.md#downloadresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DownloadResponse`](modules.md#downloadresponse) |
| `encode` | (`message`: [`DownloadResponse`](modules.md#downloadresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DownloadResponse`](modules.md#downloadresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`DownloadResponse`](modules.md#downloadresponse) |
| `toJSON` | (`message`: [`DownloadResponse`](modules.md#downloadresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:112](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L112)

[src/proto/base.ts:746](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L746)

___

### DropCollectionRequest

• **DropCollectionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DropCollectionRequest`](modules.md#dropcollectionrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DropCollectionRequest`](modules.md#dropcollectionrequest) |
| `encode` | (`message`: [`DropCollectionRequest`](modules.md#dropcollectionrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`DropCollectionRequest`](modules.md#dropcollectionrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`DropCollectionRequest`](modules.md#dropcollectionrequest) |
| `toJSON` | (`message`: [`DropCollectionRequest`](modules.md#dropcollectionrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:14](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L14)

[src/proto/querys.ts:316](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L316)

___

### DropCollectionResponse

• **DropCollectionResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`DropCollectionResponse`](modules.md#dropcollectionresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`DropCollectionResponse`](modules.md#dropcollectionresponse) |
| `encode` | (`_`: [`DropCollectionResponse`](modules.md#dropcollectionresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`DropCollectionResponse`](modules.md#dropcollectionresponse) |
| `fromPartial` | <I\>(`_`: `I`) => [`DropCollectionResponse`](modules.md#dropcollectionresponse) |
| `toJSON` | (`_`: [`DropCollectionResponse`](modules.md#dropcollectionresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:18](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L18)

[src/proto/querys.ts:367](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L367)

___

### EndStream

• **EndStream**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`EndStream`](modules.md#endstream) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`EndStream`](modules.md#endstream) |
| `encode` | (`_`: [`EndStream`](modules.md#endstream), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`EndStream`](modules.md#endstream) |
| `fromPartial` | <I\>(`_`: `I`) => [`EndStream`](modules.md#endstream) |
| `toJSON` | (`_`: [`EndStream`](modules.md#endstream)) => `unknown` |

#### Defined in

[src/proto/base.ts:142](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L142)

[src/proto/base.ts:1100](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1100)

___

### Envelope

• **Envelope**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Envelope`](modules.md#envelope) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Envelope`](modules.md#envelope) |
| `encode` | (`message`: [`Envelope`](modules.md#envelope), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Envelope`](modules.md#envelope) |
| `fromPartial` | <I\>(`object`: `I`) => [`Envelope`](modules.md#envelope) |
| `toJSON` | (`message`: [`Envelope`](modules.md#envelope)) => `unknown` |

#### Defined in

[src/proto/base.ts:72](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L72)

[src/proto/base.ts:257](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L257)

___

### ErrorResponse

• **ErrorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`ErrorResponse`](modules.md#errorresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`ErrorResponse`](modules.md#errorresponse) |
| `encode` | (`message`: [`ErrorResponse`](modules.md#errorresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`ErrorResponse`](modules.md#errorresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`ErrorResponse`](modules.md#errorresponse) |
| `toJSON` | (`message`: [`ErrorResponse`](modules.md#errorresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:93](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L93)

[src/proto/base.ts:511](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L511)

___

### GetDocumentVersionRequest

• **GetDocumentVersionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`GetDocumentVersionRequest`](modules.md#getdocumentversionrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`GetDocumentVersionRequest`](modules.md#getdocumentversionrequest) |
| `encode` | (`message`: [`GetDocumentVersionRequest`](modules.md#getdocumentversionrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`GetDocumentVersionRequest`](modules.md#getdocumentversionrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`GetDocumentVersionRequest`](modules.md#getdocumentversionrequest) |
| `toJSON` | (`message`: [`GetDocumentVersionRequest`](modules.md#getdocumentversionrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:66](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L66)

[src/proto/querys.ts:941](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L941)

___

### GetDocumentVersionResponse

• **GetDocumentVersionResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`GetDocumentVersionResponse`](modules.md#getdocumentversionresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`GetDocumentVersionResponse`](modules.md#getdocumentversionresponse) |
| `encode` | (`message`: [`GetDocumentVersionResponse`](modules.md#getdocumentversionresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`GetDocumentVersionResponse`](modules.md#getdocumentversionresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`GetDocumentVersionResponse`](modules.md#getdocumentversionresponse) |
| `toJSON` | (`message`: [`GetDocumentVersionResponse`](modules.md#getdocumentversionresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:73](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L73)

[src/proto/querys.ts:1021](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1021)

___

### GetElementRequest

• **GetElementRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`GetElementRequest`](modules.md#getelementrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`GetElementRequest`](modules.md#getelementrequest) |
| `encode` | (`message`: [`GetElementRequest`](modules.md#getelementrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`GetElementRequest`](modules.md#getelementrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`GetElementRequest`](modules.md#getelementrequest) |
| `toJSON` | (`message`: [`GetElementRequest`](modules.md#getelementrequest)) => `unknown` |

#### Defined in

[src/proto/base.ts:99](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L99)

[src/proto/base.ts:582](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L582)

___

### GetElementResponse

• **GetElementResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`GetElementResponse`](modules.md#getelementresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`GetElementResponse`](modules.md#getelementresponse) |
| `encode` | (`message`: [`GetElementResponse`](modules.md#getelementresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`GetElementResponse`](modules.md#getelementresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`GetElementResponse`](modules.md#getelementresponse) |
| `toJSON` | (`message`: [`GetElementResponse`](modules.md#getelementresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:103](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L103)

[src/proto/base.ts:633](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L633)

___

### InsertManyRequest

• **InsertManyRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertManyRequest`](modules.md#insertmanyrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertManyRequest`](modules.md#insertmanyrequest) |
| `encode` | (`message`: [`InsertManyRequest`](modules.md#insertmanyrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertManyRequest`](modules.md#insertmanyrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertManyRequest`](modules.md#insertmanyrequest) |
| `toJSON` | (`message`: [`InsertManyRequest`](modules.md#insertmanyrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:121](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L121)

[src/proto/querys.ts:1600](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1600)

___

### InsertManyResponse

• **InsertManyResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertManyResponse`](modules.md#insertmanyresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertManyResponse`](modules.md#insertmanyresponse) |
| `encode` | (`message`: [`InsertManyResponse`](modules.md#insertmanyresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertManyResponse`](modules.md#insertmanyresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertManyResponse`](modules.md#insertmanyresponse) |
| `toJSON` | (`message`: [`InsertManyResponse`](modules.md#insertmanyresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:129](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L129)

[src/proto/querys.ts:1689](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1689)

___

### InsertOneRequest

• **InsertOneRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertOneRequest`](modules.md#insertonerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertOneRequest`](modules.md#insertonerequest) |
| `encode` | (`message`: [`InsertOneRequest`](modules.md#insertonerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertOneRequest`](modules.md#insertonerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertOneRequest`](modules.md#insertonerequest) |
| `toJSON` | (`message`: [`InsertOneRequest`](modules.md#insertonerequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:110](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L110)

[src/proto/querys.ts:1469](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1469)

___

### InsertOneResponse

• **InsertOneResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertOneResponse`](modules.md#insertoneresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertOneResponse`](modules.md#insertoneresponse) |
| `encode` | (`message`: [`InsertOneResponse`](modules.md#insertoneresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertOneResponse`](modules.md#insertoneresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertOneResponse`](modules.md#insertoneresponse) |
| `toJSON` | (`message`: [`InsertOneResponse`](modules.md#insertoneresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:117](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L117)

[src/proto/querys.ts:1549](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1549)

___

### InsertOrUpdateManyRequest

• **InsertOrUpdateManyRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertOrUpdateManyRequest`](modules.md#insertorupdatemanyrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertOrUpdateManyRequest`](modules.md#insertorupdatemanyrequest) |
| `encode` | (`message`: [`InsertOrUpdateManyRequest`](modules.md#insertorupdatemanyrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertOrUpdateManyRequest`](modules.md#insertorupdatemanyrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertOrUpdateManyRequest`](modules.md#insertorupdatemanyrequest) |
| `toJSON` | (`message`: [`InsertOrUpdateManyRequest`](modules.md#insertorupdatemanyrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:176](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L176)

[src/proto/querys.ts:2243](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2243)

___

### InsertOrUpdateManyResponse

• **InsertOrUpdateManyResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertOrUpdateManyResponse`](modules.md#insertorupdatemanyresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertOrUpdateManyResponse`](modules.md#insertorupdatemanyresponse) |
| `encode` | (`message`: [`InsertOrUpdateManyResponse`](modules.md#insertorupdatemanyresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertOrUpdateManyResponse`](modules.md#insertorupdatemanyresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertOrUpdateManyResponse`](modules.md#insertorupdatemanyresponse) |
| `toJSON` | (`message`: [`InsertOrUpdateManyResponse`](modules.md#insertorupdatemanyresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:185](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L185)

[src/proto/querys.ts:2341](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2341)

___

### InsertOrUpdateOneRequest

• **InsertOrUpdateOneRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertOrUpdateOneRequest`](modules.md#insertorupdateonerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertOrUpdateOneRequest`](modules.md#insertorupdateonerequest) |
| `encode` | (`message`: [`InsertOrUpdateOneRequest`](modules.md#insertorupdateonerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertOrUpdateOneRequest`](modules.md#insertorupdateonerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertOrUpdateOneRequest`](modules.md#insertorupdateonerequest) |
| `toJSON` | (`message`: [`InsertOrUpdateOneRequest`](modules.md#insertorupdateonerequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:164](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L164)

[src/proto/querys.ts:2103](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2103)

___

### InsertOrUpdateOneResponse

• **InsertOrUpdateOneResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`InsertOrUpdateOneResponse`](modules.md#insertorupdateoneresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`InsertOrUpdateOneResponse`](modules.md#insertorupdateoneresponse) |
| `encode` | (`message`: [`InsertOrUpdateOneResponse`](modules.md#insertorupdateoneresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`InsertOrUpdateOneResponse`](modules.md#insertorupdateoneresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`InsertOrUpdateOneResponse`](modules.md#insertorupdateoneresponse) |
| `toJSON` | (`message`: [`InsertOrUpdateOneResponse`](modules.md#insertorupdateoneresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:172](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L172)

[src/proto/querys.ts:2192](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2192)

___

### ListCollectionsRequest

• **ListCollectionsRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`ListCollectionsRequest`](modules.md#listcollectionsrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`ListCollectionsRequest`](modules.md#listcollectionsrequest) |
| `encode` | (`message`: [`ListCollectionsRequest`](modules.md#listcollectionsrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`ListCollectionsRequest`](modules.md#listcollectionsrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`ListCollectionsRequest`](modules.md#listcollectionsrequest) |
| `toJSON` | (`message`: [`ListCollectionsRequest`](modules.md#listcollectionsrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:6](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L6)

[src/proto/querys.ts:214](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L214)

___

### ListCollectionsResponse

• **ListCollectionsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`ListCollectionsResponse`](modules.md#listcollectionsresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`ListCollectionsResponse`](modules.md#listcollectionsresponse) |
| `encode` | (`message`: [`ListCollectionsResponse`](modules.md#listcollectionsresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`ListCollectionsResponse`](modules.md#listcollectionsresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`ListCollectionsResponse`](modules.md#listcollectionsresponse) |
| `toJSON` | (`message`: [`ListCollectionsResponse`](modules.md#listcollectionsresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:10](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L10)

[src/proto/querys.ts:265](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L265)

___

### PingRequest

• **PingRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PingRequest`](modules.md#pingrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PingRequest`](modules.md#pingrequest) |
| `encode` | (`_`: [`PingRequest`](modules.md#pingrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`PingRequest`](modules.md#pingrequest) |
| `fromPartial` | <I\>(`_`: `I`) => [`PingRequest`](modules.md#pingrequest) |
| `toJSON` | (`_`: [`PingRequest`](modules.md#pingrequest)) => `unknown` |

#### Defined in

[src/proto/base.ts:84](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L84)

[src/proto/base.ts:382](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L382)

___

### PingResponse

• **PingResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PingResponse`](modules.md#pingresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PingResponse`](modules.md#pingresponse) |
| `encode` | (`_`: [`PingResponse`](modules.md#pingresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`PingResponse`](modules.md#pingresponse) |
| `fromPartial` | <I\>(`_`: `I`) => [`PingResponse`](modules.md#pingresponse) |
| `toJSON` | (`_`: [`PingResponse`](modules.md#pingresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:87](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L87)

[src/proto/base.ts:425](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L425)

___

### PopWorkitemRequest

• **PopWorkitemRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PopWorkitemRequest`](modules.md#popworkitemrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PopWorkitemRequest`](modules.md#popworkitemrequest) |
| `encode` | (`message`: [`PopWorkitemRequest`](modules.md#popworkitemrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PopWorkitemRequest`](modules.md#popworkitemrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`PopWorkitemRequest`](modules.md#popworkitemrequest) |
| `toJSON` | (`message`: [`PopWorkitemRequest`](modules.md#popworkitemrequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:81](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L81)

[src/proto/workitems.ts:1015](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1015)

___

### PopWorkitemResponse

• **PopWorkitemResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PopWorkitemResponse`](modules.md#popworkitemresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PopWorkitemResponse`](modules.md#popworkitemresponse) |
| `encode` | (`message`: [`PopWorkitemResponse`](modules.md#popworkitemresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PopWorkitemResponse`](modules.md#popworkitemresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`PopWorkitemResponse`](modules.md#popworkitemresponse) |
| `toJSON` | (`message`: [`PopWorkitemResponse`](modules.md#popworkitemresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:88](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L88)

[src/proto/workitems.ts:1095](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1095)

___

### PushWorkitemRequest

• **PushWorkitemRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PushWorkitemRequest`](modules.md#pushworkitemrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PushWorkitemRequest`](modules.md#pushworkitemrequest) |
| `encode` | (`message`: [`PushWorkitemRequest`](modules.md#pushworkitemrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PushWorkitemRequest`](modules.md#pushworkitemrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`PushWorkitemRequest`](modules.md#pushworkitemrequest) |
| `toJSON` | (`message`: [`PushWorkitemRequest`](modules.md#pushworkitemrequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:37](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L37)

[src/proto/workitems.ts:489](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L489)

___

### PushWorkitemResponse

• **PushWorkitemResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PushWorkitemResponse`](modules.md#pushworkitemresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PushWorkitemResponse`](modules.md#pushworkitemresponse) |
| `encode` | (`message`: [`PushWorkitemResponse`](modules.md#pushworkitemresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PushWorkitemResponse`](modules.md#pushworkitemresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`PushWorkitemResponse`](modules.md#pushworkitemresponse) |
| `toJSON` | (`message`: [`PushWorkitemResponse`](modules.md#pushworkitemresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:51](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L51)

[src/proto/workitems.ts:636](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L636)

___

### PushWorkitemsRequest

• **PushWorkitemsRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PushWorkitemsRequest`](modules.md#pushworkitemsrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PushWorkitemsRequest`](modules.md#pushworkitemsrequest) |
| `encode` | (`message`: [`PushWorkitemsRequest`](modules.md#pushworkitemsrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PushWorkitemsRequest`](modules.md#pushworkitemsrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`PushWorkitemsRequest`](modules.md#pushworkitemsrequest) |
| `toJSON` | (`message`: [`PushWorkitemsRequest`](modules.md#pushworkitemsrequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:55](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L55)

[src/proto/workitems.ts:699](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L699)

___

### PushWorkitemsResponse

• **PushWorkitemsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`PushWorkitemsResponse`](modules.md#pushworkitemsresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PushWorkitemsResponse`](modules.md#pushworkitemsresponse) |
| `encode` | (`message`: [`PushWorkitemsResponse`](modules.md#pushworkitemsresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PushWorkitemsResponse`](modules.md#pushworkitemsresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`PushWorkitemsResponse`](modules.md#pushworkitemsresponse) |
| `toJSON` | (`message`: [`PushWorkitemsResponse`](modules.md#pushworkitemsresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:67](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L67)

[src/proto/workitems.ts:828](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L828)

___

### QueryRequest

• **QueryRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`QueryRequest`](modules.md#queryrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`QueryRequest`](modules.md#queryrequest) |
| `encode` | (`message`: [`QueryRequest`](modules.md#queryrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`QueryRequest`](modules.md#queryrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`QueryRequest`](modules.md#queryrequest) |
| `toJSON` | (`message`: [`QueryRequest`](modules.md#queryrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:52](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L52)

[src/proto/querys.ts:783](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L783)

___

### QueryResponse

• **QueryResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`QueryResponse`](modules.md#queryresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`QueryResponse`](modules.md#queryresponse) |
| `encode` | (`message`: [`QueryResponse`](modules.md#queryresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`QueryResponse`](modules.md#queryresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`QueryResponse`](modules.md#queryresponse) |
| `toJSON` | (`message`: [`QueryResponse`](modules.md#queryresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:62](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L62)

[src/proto/querys.ts:890](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L890)

___

### QueueEvent

• **QueueEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`QueueEvent`](modules.md#queueevent) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`QueueEvent`](modules.md#queueevent) |
| `encode` | (`message`: [`QueueEvent`](modules.md#queueevent), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`QueueEvent`](modules.md#queueevent) |
| `fromPartial` | <I\>(`object`: `I`) => [`QueueEvent`](modules.md#queueevent) |
| `toJSON` | (`message`: [`QueueEvent`](modules.md#queueevent)) => `unknown` |

#### Defined in

[src/proto/queues.ts:45](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L45)

[src/proto/queues.ts:534](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L534)

___

### QueueMessageRequest

• **QueueMessageRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`QueueMessageRequest`](modules.md#queuemessagerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`QueueMessageRequest`](modules.md#queuemessagerequest) |
| `encode` | (`message`: [`QueueMessageRequest`](modules.md#queuemessagerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`QueueMessageRequest`](modules.md#queuemessagerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`QueueMessageRequest`](modules.md#queuemessagerequest) |
| `toJSON` | (`message`: [`QueueMessageRequest`](modules.md#queuemessagerequest)) => `unknown` |

#### Defined in

[src/proto/queues.ts:25](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L25)

[src/proto/queues.ts:320](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L320)

___

### QueueMessageResponse

• **QueueMessageResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`QueueMessageResponse`](modules.md#queuemessageresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`QueueMessageResponse`](modules.md#queuemessageresponse) |
| `encode` | (`message`: [`QueueMessageResponse`](modules.md#queuemessageresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`QueueMessageResponse`](modules.md#queuemessageresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`QueueMessageResponse`](modules.md#queuemessageresponse) |
| `toJSON` | (`message`: [`QueueMessageResponse`](modules.md#queuemessageresponse)) => `unknown` |

#### Defined in

[src/proto/queues.ts:36](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L36)

[src/proto/queues.ts:436](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L436)

___

### RefreshToken

• **RefreshToken**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`RefreshToken`](modules.md#refreshtoken) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`RefreshToken`](modules.md#refreshtoken) |
| `encode` | (`message`: [`RefreshToken`](modules.md#refreshtoken), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`RefreshToken`](modules.md#refreshtoken) |
| `fromPartial` | <I\>(`object`: `I`) => [`RefreshToken`](modules.md#refreshtoken) |
| `toJSON` | (`message`: [`RefreshToken`](modules.md#refreshtoken)) => `unknown` |

#### Defined in

[src/proto/base.ts:191](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L191)

[src/proto/base.ts:1665](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1665)

___

### RegisterExchangeRequest

• **RegisterExchangeRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`RegisterExchangeRequest`](modules.md#registerexchangerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`RegisterExchangeRequest`](modules.md#registerexchangerequest) |
| `encode` | (`message`: [`RegisterExchangeRequest`](modules.md#registerexchangerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`RegisterExchangeRequest`](modules.md#registerexchangerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`RegisterExchangeRequest`](modules.md#registerexchangerequest) |
| `toJSON` | (`message`: [`RegisterExchangeRequest`](modules.md#registerexchangerequest)) => `unknown` |

#### Defined in

[src/proto/queues.ts:14](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L14)

[src/proto/queues.ts:180](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L180)

___

### RegisterExchangeResponse

• **RegisterExchangeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`RegisterExchangeResponse`](modules.md#registerexchangeresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`RegisterExchangeResponse`](modules.md#registerexchangeresponse) |
| `encode` | (`message`: [`RegisterExchangeResponse`](modules.md#registerexchangeresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`RegisterExchangeResponse`](modules.md#registerexchangeresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`RegisterExchangeResponse`](modules.md#registerexchangeresponse) |
| `toJSON` | (`message`: [`RegisterExchangeResponse`](modules.md#registerexchangeresponse)) => `unknown` |

#### Defined in

[src/proto/queues.ts:21](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L21)

[src/proto/queues.ts:260](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L260)

___

### RegisterQueueRequest

• **RegisterQueueRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`RegisterQueueRequest`](modules.md#registerqueuerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`RegisterQueueRequest`](modules.md#registerqueuerequest) |
| `encode` | (`message`: [`RegisterQueueRequest`](modules.md#registerqueuerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`RegisterQueueRequest`](modules.md#registerqueuerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`RegisterQueueRequest`](modules.md#registerqueuerequest) |
| `toJSON` | (`message`: [`RegisterQueueRequest`](modules.md#registerqueuerequest)) => `unknown` |

#### Defined in

[src/proto/queues.ts:6](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L6)

[src/proto/queues.ts:78](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L78)

___

### RegisterQueueResponse

• **RegisterQueueResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`RegisterQueueResponse`](modules.md#registerqueueresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`RegisterQueueResponse`](modules.md#registerqueueresponse) |
| `encode` | (`message`: [`RegisterQueueResponse`](modules.md#registerqueueresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`RegisterQueueResponse`](modules.md#registerqueueresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`RegisterQueueResponse`](modules.md#registerqueueresponse) |
| `toJSON` | (`message`: [`RegisterQueueResponse`](modules.md#registerqueueresponse)) => `unknown` |

#### Defined in

[src/proto/queues.ts:10](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L10)

[src/proto/queues.ts:129](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L129)

___

### Role

• **Role**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Role`](modules.md#role) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Role`](modules.md#role) |
| `encode` | (`message`: [`Role`](modules.md#role), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Role`](modules.md#role) |
| `fromPartial` | <I\>(`object`: `I`) => [`Role`](modules.md#role) |
| `toJSON` | (`message`: [`Role`](modules.md#role)) => `unknown` |

#### Defined in

[src/proto/base.ts:197](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L197)

[src/proto/base.ts:1736](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1736)

___

### SigninRequest

• **SigninRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`SigninRequest`](modules.md#signinrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`SigninRequest`](modules.md#signinrequest) |
| `encode` | (`message`: [`SigninRequest`](modules.md#signinrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`SigninRequest`](modules.md#signinrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`SigninRequest`](modules.md#signinrequest) |
| `toJSON` | (`message`: [`SigninRequest`](modules.md#signinrequest)) => `unknown` |

#### Defined in

[src/proto/base.ts:174](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L174)

[src/proto/base.ts:1478](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1478)

___

### SigninResponse

• **SigninResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`SigninResponse`](modules.md#signinresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`SigninResponse`](modules.md#signinresponse) |
| `encode` | (`message`: [`SigninResponse`](modules.md#signinresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`SigninResponse`](modules.md#signinresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`SigninResponse`](modules.md#signinresponse) |
| `toJSON` | (`message`: [`SigninResponse`](modules.md#signinresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:185](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L185)

[src/proto/base.ts:1594](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1594)

___

### Stat

• **Stat**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Stat`](modules.md#stat) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Stat`](modules.md#stat) |
| `encode` | (`message`: [`Stat`](modules.md#stat), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Stat`](modules.md#stat) |
| `fromPartial` | <I\>(`object`: `I`) => [`Stat`](modules.md#stat) |
| `toJSON` | (`message`: [`Stat`](modules.md#stat)) => `unknown` |

#### Defined in

[src/proto/base.ts:145](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L145)

[src/proto/base.ts:1159](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1159)

___

### Stream

• **Stream**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Stream`](modules.md#stream) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Stream`](modules.md#stream) |
| `encode` | (`message`: [`Stream`](modules.md#stream), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Stream`](modules.md#stream) |
| `fromPartial` | <I\>(`object`: `I`) => [`Stream`](modules.md#stream) |
| `toJSON` | (`message`: [`Stream`](modules.md#stream)) => `unknown` |

#### Defined in

[src/proto/base.ts:138](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L138)

[src/proto/base.ts:1048](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1048)

___

### UnRegisterQueueRequest

• **UnRegisterQueueRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UnRegisterQueueRequest`](modules.md#unregisterqueuerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UnRegisterQueueRequest`](modules.md#unregisterqueuerequest) |
| `encode` | (`message`: [`UnRegisterQueueRequest`](modules.md#unregisterqueuerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UnRegisterQueueRequest`](modules.md#unregisterqueuerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UnRegisterQueueRequest`](modules.md#unregisterqueuerequest) |
| `toJSON` | (`message`: [`UnRegisterQueueRequest`](modules.md#unregisterqueuerequest)) => `unknown` |

#### Defined in

[src/proto/queues.ts:54](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L54)

[src/proto/queues.ts:632](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L632)

___

### UnRegisterQueueResponse

• **UnRegisterQueueResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UnRegisterQueueResponse`](modules.md#unregisterqueueresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UnRegisterQueueResponse`](modules.md#unregisterqueueresponse) |
| `encode` | (`_`: [`UnRegisterQueueResponse`](modules.md#unregisterqueueresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`UnRegisterQueueResponse`](modules.md#unregisterqueueresponse) |
| `fromPartial` | <I\>(`_`: `I`) => [`UnRegisterQueueResponse`](modules.md#unregisterqueueresponse) |
| `toJSON` | (`_`: [`UnRegisterQueueResponse`](modules.md#unregisterqueueresponse)) => `unknown` |

#### Defined in

[src/proto/queues.ts:58](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L58)

[src/proto/queues.ts:683](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/queues.ts#L683)

___

### UnWatchRequest

• **UnWatchRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UnWatchRequest`](modules.md#unwatchrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UnWatchRequest`](modules.md#unwatchrequest) |
| `encode` | (`message`: [`UnWatchRequest`](modules.md#unwatchrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UnWatchRequest`](modules.md#unwatchrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UnWatchRequest`](modules.md#unwatchrequest) |
| `toJSON` | (`message`: [`UnWatchRequest`](modules.md#unwatchrequest)) => `unknown` |

#### Defined in

[src/proto/watch.ts:21](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L21)

[src/proto/watch.ts:220](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L220)

___

### UnWatchResponse

• **UnWatchResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UnWatchResponse`](modules.md#unwatchresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UnWatchResponse`](modules.md#unwatchresponse) |
| `encode` | (`_`: [`UnWatchResponse`](modules.md#unwatchresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`_`: `any`) => [`UnWatchResponse`](modules.md#unwatchresponse) |
| `fromPartial` | <I\>(`_`: `I`) => [`UnWatchResponse`](modules.md#unwatchresponse) |
| `toJSON` | (`_`: [`UnWatchResponse`](modules.md#unwatchresponse)) => `unknown` |

#### Defined in

[src/proto/watch.ts:25](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L25)

[src/proto/watch.ts:271](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L271)

___

### UpdateDocumentRequest

• **UpdateDocumentRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateDocumentRequest`](modules.md#updatedocumentrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateDocumentRequest`](modules.md#updatedocumentrequest) |
| `encode` | (`message`: [`UpdateDocumentRequest`](modules.md#updatedocumentrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateDocumentRequest`](modules.md#updatedocumentrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateDocumentRequest`](modules.md#updatedocumentrequest) |
| `toJSON` | (`message`: [`UpdateDocumentRequest`](modules.md#updatedocumentrequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:144](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L144)

[src/proto/querys.ts:1871](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1871)

___

### UpdateDocumentResponse

• **UpdateDocumentResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateDocumentResponse`](modules.md#updatedocumentresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateDocumentResponse`](modules.md#updatedocumentresponse) |
| `encode` | (`message`: [`UpdateDocumentResponse`](modules.md#updatedocumentresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateDocumentResponse`](modules.md#updatedocumentresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateDocumentResponse`](modules.md#updatedocumentresponse) |
| `toJSON` | (`message`: [`UpdateDocumentResponse`](modules.md#updatedocumentresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:160](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L160)

[src/proto/querys.ts:2049](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L2049)

___

### UpdateOneRequest

• **UpdateOneRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateOneRequest`](modules.md#updateonerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateOneRequest`](modules.md#updateonerequest) |
| `encode` | (`message`: [`UpdateOneRequest`](modules.md#updateonerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateOneRequest`](modules.md#updateonerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateOneRequest`](modules.md#updateonerequest) |
| `toJSON` | (`message`: [`UpdateOneRequest`](modules.md#updateonerequest)) => `unknown` |

#### Defined in

[src/proto/querys.ts:133](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L133)

[src/proto/querys.ts:1740](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1740)

___

### UpdateOneResponse

• **UpdateOneResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateOneResponse`](modules.md#updateoneresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateOneResponse`](modules.md#updateoneresponse) |
| `encode` | (`message`: [`UpdateOneResponse`](modules.md#updateoneresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateOneResponse`](modules.md#updateoneresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateOneResponse`](modules.md#updateoneresponse) |
| `toJSON` | (`message`: [`UpdateOneResponse`](modules.md#updateoneresponse)) => `unknown` |

#### Defined in

[src/proto/querys.ts:140](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L140)

[src/proto/querys.ts:1820](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1820)

___

### UpdateResult

• **UpdateResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateResult`](modules.md#updateresult) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateResult`](modules.md#updateresult) |
| `encode` | (`message`: [`UpdateResult`](modules.md#updateresult), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateResult`](modules.md#updateresult) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateResult`](modules.md#updateresult) |
| `toJSON` | (`message`: [`UpdateResult`](modules.md#updateresult)) => `unknown` |

#### Defined in

[src/proto/querys.ts:152](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L152)

[src/proto/querys.ts:1960](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/querys.ts#L1960)

___

### UpdateWorkItemQueueRequest

• **UpdateWorkItemQueueRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateWorkItemQueueRequest`](modules.md#updateworkitemqueuerequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateWorkItemQueueRequest`](modules.md#updateworkitemqueuerequest) |
| `encode` | (`message`: [`UpdateWorkItemQueueRequest`](modules.md#updateworkitemqueuerequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateWorkItemQueueRequest`](modules.md#updateworkitemqueuerequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateWorkItemQueueRequest`](modules.md#updateworkitemqueuerequest) |
| `toJSON` | (`message`: [`UpdateWorkItemQueueRequest`](modules.md#updateworkitemqueuerequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:134](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L134)

[src/proto/workitems.ts:1640](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1640)

___

### UpdateWorkItemQueueResponse

• **UpdateWorkItemQueueResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateWorkItemQueueResponse`](modules.md#updateworkitemqueueresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateWorkItemQueueResponse`](modules.md#updateworkitemqueueresponse) |
| `encode` | (`message`: [`UpdateWorkItemQueueResponse`](modules.md#updateworkitemqueueresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateWorkItemQueueResponse`](modules.md#updateworkitemqueueresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateWorkItemQueueResponse`](modules.md#updateworkitemqueueresponse) |
| `toJSON` | (`message`: [`UpdateWorkItemQueueResponse`](modules.md#updateworkitemqueueresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:140](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L140)

[src/proto/workitems.ts:1714](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1714)

___

### UpdateWorkitemRequest

• **UpdateWorkitemRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateWorkitemRequest`](modules.md#updateworkitemrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateWorkitemRequest`](modules.md#updateworkitemrequest) |
| `encode` | (`message`: [`UpdateWorkitemRequest`](modules.md#updateworkitemrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateWorkitemRequest`](modules.md#updateworkitemrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateWorkitemRequest`](modules.md#updateworkitemrequest) |
| `toJSON` | (`message`: [`UpdateWorkitemRequest`](modules.md#updateworkitemrequest)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:71](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L71)

[src/proto/workitems.ts:885](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L885)

___

### UpdateWorkitemResponse

• **UpdateWorkitemResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UpdateWorkitemResponse`](modules.md#updateworkitemresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UpdateWorkitemResponse`](modules.md#updateworkitemresponse) |
| `encode` | (`message`: [`UpdateWorkitemResponse`](modules.md#updateworkitemresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UpdateWorkitemResponse`](modules.md#updateworkitemresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`UpdateWorkitemResponse`](modules.md#updateworkitemresponse) |
| `toJSON` | (`message`: [`UpdateWorkitemResponse`](modules.md#updateworkitemresponse)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:77](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L77)

[src/proto/workitems.ts:962](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L962)

___

### UploadRequest

• **UploadRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UploadRequest`](modules.md#uploadrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UploadRequest`](modules.md#uploadrequest) |
| `encode` | (`message`: [`UploadRequest`](modules.md#uploadrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UploadRequest`](modules.md#uploadrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`UploadRequest`](modules.md#uploadrequest) |
| `toJSON` | (`message`: [`UploadRequest`](modules.md#uploadrequest)) => `unknown` |

#### Defined in

[src/proto/base.ts:118](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L118)

[src/proto/base.ts:817](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L817)

___

### UploadResponse

• **UploadResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`UploadResponse`](modules.md#uploadresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`UploadResponse`](modules.md#uploadresponse) |
| `encode` | (`message`: [`UploadResponse`](modules.md#uploadresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`UploadResponse`](modules.md#uploadresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`UploadResponse`](modules.md#uploadresponse) |
| `toJSON` | (`message`: [`UploadResponse`](modules.md#uploadresponse)) => `unknown` |

#### Defined in

[src/proto/base.ts:123](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L123)

[src/proto/base.ts:879](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L879)

___

### User

• **User**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`User`](modules.md#user) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`User`](modules.md#user) |
| `encode` | (`message`: [`User`](modules.md#user), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`User`](modules.md#user) |
| `fromPartial` | <I\>(`object`: `I`) => [`User`](modules.md#user) |
| `toJSON` | (`message`: [`User`](modules.md#user)) => `unknown` |

#### Defined in

[src/proto/base.ts:202](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L202)

[src/proto/base.ts:1795](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/base.ts#L1795)

___

### WatchEvent

• **WatchEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`WatchEvent`](modules.md#watchevent) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`WatchEvent`](modules.md#watchevent) |
| `encode` | (`message`: [`WatchEvent`](modules.md#watchevent), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`WatchEvent`](modules.md#watchevent) |
| `fromPartial` | <I\>(`object`: `I`) => [`WatchEvent`](modules.md#watchevent) |
| `toJSON` | (`message`: [`WatchEvent`](modules.md#watchevent)) => `unknown` |

#### Defined in

[src/proto/watch.ts:15](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L15)

[src/proto/watch.ts:149](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L149)

___

### WatchRequest

• **WatchRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`WatchRequest`](modules.md#watchrequest) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`WatchRequest`](modules.md#watchrequest) |
| `encode` | (`message`: [`WatchRequest`](modules.md#watchrequest), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`WatchRequest`](modules.md#watchrequest) |
| `fromPartial` | <I\>(`object`: `I`) => [`WatchRequest`](modules.md#watchrequest) |
| `toJSON` | (`message`: [`WatchRequest`](modules.md#watchrequest)) => `unknown` |

#### Defined in

[src/proto/watch.ts:6](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L6)

[src/proto/watch.ts:32](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L32)

___

### WatchResponse

• **WatchResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`WatchResponse`](modules.md#watchresponse) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`WatchResponse`](modules.md#watchresponse) |
| `encode` | (`message`: [`WatchResponse`](modules.md#watchresponse), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`WatchResponse`](modules.md#watchresponse) |
| `fromPartial` | <I\>(`object`: `I`) => [`WatchResponse`](modules.md#watchresponse) |
| `toJSON` | (`message`: [`WatchResponse`](modules.md#watchresponse)) => `unknown` |

#### Defined in

[src/proto/watch.ts:11](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L11)

[src/proto/watch.ts:98](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/watch.ts#L98)

___

### WorkItemQueue

• **WorkItemQueue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`WorkItemQueue`](modules.md#workitemqueue) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`WorkItemQueue`](modules.md#workitemqueue) |
| `encode` | (`message`: [`WorkItemQueue`](modules.md#workitemqueue), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`WorkItemQueue`](modules.md#workitemqueue) |
| `fromPartial` | <I\>(`object`: `I`) => [`WorkItemQueue`](modules.md#workitemqueue) |
| `toJSON` | (`message`: [`WorkItemQueue`](modules.md#workitemqueue)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:99](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L99)

[src/proto/workitems.ts:1266](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L1266)

___

### Workitem

• **Workitem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Workitem`](modules.md#workitem) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Workitem`](modules.md#workitem) |
| `encode` | (`message`: [`Workitem`](modules.md#workitem), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Workitem`](modules.md#workitem) |
| `fromPartial` | <I\>(`object`: `I`) => [`Workitem`](modules.md#workitem) |
| `toJSON` | (`message`: [`Workitem`](modules.md#workitem)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:8](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L8)

[src/proto/workitems.ts:177](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L177)

___

### WorkitemFile

• **WorkitemFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`WorkitemFile`](modules.md#workitemfile) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`WorkitemFile`](modules.md#workitemfile) |
| `encode` | (`message`: [`WorkitemFile`](modules.md#workitemfile), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`WorkitemFile`](modules.md#workitemfile) |
| `fromPartial` | <I\>(`object`: `I`) => [`WorkitemFile`](modules.md#workitemfile) |
| `toJSON` | (`message`: [`WorkitemFile`](modules.md#workitemfile)) => `unknown` |

#### Defined in

[src/proto/workitems.ts:30](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L30)

[src/proto/workitems.ts:396](https://github.com/openiap/nodeapi/blob/a6b5438/src/proto/workitems.ts#L396)
