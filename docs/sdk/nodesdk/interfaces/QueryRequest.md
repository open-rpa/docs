[@openiap/nodeapi](../README.md) / [Exports](../modules.md) / QueryRequest

# Interface: QueryRequest

MongoDB Query Request.

## Table of contents

### Properties

- [collectionname](QueryRequest.md#collectionname)
- [explain](QueryRequest.md#explain)
- [orderby](QueryRequest.md#orderby)
- [projection](QueryRequest.md#projection)
- [query](QueryRequest.md#query)
- [queryas](QueryRequest.md#queryas)
- [skip](QueryRequest.md#skip)
- [top](QueryRequest.md#top)

## Properties

### collectionname

• **collectionname**: `string`

MongoDB Collection to query. This field is required.

#### Defined in

[src/proto/querys.ts:57](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L57)

___

### explain

• **explain**: `boolean`

Enabling explain will provides information on the execution of the query

#### Defined in

[src/proto/querys.ts:72](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L72)

___

### orderby

• **orderby**: `string`

MongoDB order by. This field is optional with a default of {"_id": 1}.
You can specify "timestamp" as a string or an object like {"timestamp": -1}.

#### Defined in

[src/proto/querys.ts:68](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L68)

___

### projection

• **projection**: `string`

MongoDB Query projection. This field is optional.

#### Defined in

[src/proto/querys.ts:59](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L59)

___

### query

• **query**: `string`

MongoDB Query to execute. This field is required.

#### Defined in

[src/proto/querys.ts:55](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L55)

___

### queryas

• **queryas**: `string`

Query as if you were this _id. (_id can be a user, role, or customer from the users collection)

#### Defined in

[src/proto/querys.ts:70](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L70)

___

### skip

• **skip**: `number`

MongoDB Number of documents to skip, used for paging on the same query. This field is optional with a default of 0.

#### Defined in

[src/proto/querys.ts:63](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L63)

___

### top

• **top**: `number`

MongoDB Maximum number of documents to return. This field is optional with a default of 100.

#### Defined in

[src/proto/querys.ts:61](https://github.com/openiap/nodeapi/blob/a159861/src/proto/querys.ts#L61)
