---
layout: page
title: config
parent: NodeJS Api
---
[@openiap/nodeapi](../README) / [Exports](../modules) / config

# Class: config

## Table of contents

### Constructors

- [constructor](config#constructor)

### Properties

- [BeginstreamDelay](config#beginstreamdelay)
- [ChecksumCheckFiles](config#checksumcheckfiles)
- [ChecksumCheckPackages](config#checksumcheckpackages)
- [DoDumpToConsole](config#dodumptoconsole)
- [DoPing](config#doping)
- [EndstreamDelay](config#endstreamdelay)
- [SendFileHighWaterMark](config#sendfilehighwatermark)
- [ThrottlerMS](config#throttlerms)
- [color](config#color)
- [defaultgrpcport](config#defaultgrpcport)
- [defaultsocketport](config#defaultsocketport)
- [defaultwebport](config#defaultwebport)
- [doDumpMessageHexBytesPerLine](config#dodumpmessagehexbytesperline)
- [doDumpMessageHexLines](config#dodumpmessagehexlines)
- [doDumpMesssageStreams](config#dodumpmesssagestreams)
- [doDumpMesssages](config#dodumpmesssages)
- [doDumpMesssagesIds](config#dodumpmesssagesids)
- [doDumpMesssagesSeq](config#dodumpmesssagesseq)
- [doDumpRPCTraceIds](config#dodumprpctraceids)
- [doDumpStack](config#dodumpstack)
- [doDumpTimestamp](config#dodumptimestamp)
- [doDumpToFile](config#dodumptofile)
- [filecounter](config#filecounter)
- [filedata](config#filedata)
- [role](config#role)

### Methods

- [col](config#col)
- [colrole](config#colrole)
- [dumpdata](config#dumpdata)
- [dumpmessage](config#dumpmessage)
- [err](config#err)
- [hex](config#hex)
- [info](config#info)
- [maxnumberlen](config#maxnumberlen)
- [seq](config#seq)
- [ts](config#ts)
- [warn](config#warn)

## Constructors

### constructor

• **new config**()

## Properties

### BeginstreamDelay

▪ `Static` **BeginstreamDelay**: `number` = `0`

#### Defined in

[src/config.ts:5](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L5)

___

### ChecksumCheckFiles

▪ `Static` **ChecksumCheckFiles**: `boolean` = `false`

#### Defined in

[src/config.ts:6](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L6)

___

### ChecksumCheckPackages

▪ `Static` **ChecksumCheckPackages**: `boolean` = `false`

#### Defined in

[src/config.ts:7](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L7)

___

### DoDumpToConsole

▪ `Static` **DoDumpToConsole**: `boolean` = `false`

#### Defined in

[src/config.ts:17](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L17)

___

### DoPing

▪ `Static` **DoPing**: `boolean` = `true`

#### Defined in

[src/config.ts:8](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L8)

___

### EndstreamDelay

▪ `Static` **EndstreamDelay**: `number` = `0`

#### Defined in

[src/config.ts:4](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L4)

___

### SendFileHighWaterMark

▪ `Static` **SendFileHighWaterMark**: `number`

#### Defined in

[src/config.ts:23](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L23)

___

### ThrottlerMS

▪ `Static` **ThrottlerMS**: `number` = `0`

#### Defined in

[src/config.ts:3](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L3)

___

### color

▪ `Static` **color**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BgBlack` | `string` |
| `BgBlue` | `string` |
| `BgCyan` | `string` |
| `BgGreen` | `string` |
| `BgMagenta` | `string` |
| `BgRed` | `string` |
| `BgWhite` | `string` |
| `BgYellow` | `string` |
| `Blink` | `string` |
| `Bright` | `string` |
| `Dim` | `string` |
| `FgBlack` | `string` |
| `FgBlue` | `string` |
| `FgCyan` | `string` |
| `FgGreen` | `string` |
| `FgMagenta` | `string` |
| `FgRed` | `string` |
| `FgWhite` | `string` |
| `FgYellow` | `string` |
| `Hidden` | `string` |
| `Reset` | `string` |
| `Reverse` | `string` |
| `Underscore` | `string` |

#### Defined in

[src/config.ts:26](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L26)

___

### defaultgrpcport

▪ `Static` **defaultgrpcport**: `number` = `50051`

#### Defined in

[src/config.ts:22](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L22)

___

### defaultsocketport

▪ `Static` **defaultsocketport**: `number` = `8080`

#### Defined in

[src/config.ts:20](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L20)

___

### defaultwebport

▪ `Static` **defaultwebport**: `number` = `8080`

#### Defined in

[src/config.ts:21](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L21)

___

### doDumpMessageHexBytesPerLine

▪ `Static` **doDumpMessageHexBytesPerLine**: `number`

#### Defined in

[src/config.ts:16](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L16)

___

### doDumpMessageHexLines

▪ `Static` **doDumpMessageHexLines**: `number` = `50`

#### Defined in

[src/config.ts:15](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L15)

___

### doDumpMesssageStreams

▪ `Static` **doDumpMesssageStreams**: `boolean` = `false`

#### Defined in

[src/config.ts:14](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L14)

___

### doDumpMesssages

▪ `Static` **doDumpMesssages**: `boolean` = `false`

#### Defined in

[src/config.ts:10](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L10)

___

### doDumpMesssagesIds

▪ `Static` **doDumpMesssagesIds**: `boolean` = `true`

#### Defined in

[src/config.ts:12](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L12)

___

### doDumpMesssagesSeq

▪ `Static` **doDumpMesssagesSeq**: `boolean` = `true`

#### Defined in

[src/config.ts:11](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L11)

___

### doDumpRPCTraceIds

▪ `Static` **doDumpRPCTraceIds**: `boolean` = `false`

#### Defined in

[src/config.ts:19](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L19)

___

### doDumpStack

▪ `Static` **doDumpStack**: `boolean` = `false`

#### Defined in

[src/config.ts:9](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L9)

___

### doDumpTimestamp

▪ `Static` **doDumpTimestamp**: `boolean` = `false`

#### Defined in

[src/config.ts:13](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L13)

___

### doDumpToFile

▪ `Static` **doDumpToFile**: `boolean` = `false`

#### Defined in

[src/config.ts:18](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L18)

___

### filecounter

▪ `Static` **filecounter**: `number` = `0`

#### Defined in

[src/config.ts:111](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L111)

___

### filedata

▪ `Static` **filedata**: `string` = `""`

#### Defined in

[src/config.ts:112](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L112)

___

### role

▪ `Static` **role**: `string` = `"client"`

#### Defined in

[src/config.ts:24](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L24)

## Methods

### col

▸ `Static` **col**(`text`, `c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `c` | `string` |

#### Returns

`string`

#### Defined in

[src/config.ts:223](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L223)

___

### colrole

▸ `Static` **colrole**(): `string`

#### Returns

`string`

#### Defined in

[src/config.ts:226](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L226)

___

### dumpdata

▸ `Static` **dumpdata**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/config.ts:113](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L113)

___

### dumpmessage

▸ `Static` **dumpmessage**(`direction`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | `string` |
| `message` | `any` |

#### Returns

`void`

#### Defined in

[src/config.ts:68](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L68)

___

### err

▸ `Static` **err**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/config.ts:60](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L60)

___

### hex

▸ `Static` **hex**(`buffer`, `bytes_per_line`, `bytes_per_group`, `radix`, `littleEndian`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |
| `bytes_per_line` | `number` |
| `bytes_per_group` | `number` |
| `radix` | `number` |
| `littleEndian` | `boolean` |

#### Returns

`string`

#### Defined in

[src/config.ts:137](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L137)

___

### info

▸ `Static` **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[src/config.ts:54](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L54)

___

### maxnumberlen

▸ `Static` **maxnumberlen**(`bytes`, `radix`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |
| `radix` | `number` |

#### Returns

`number`

#### Defined in

[src/config.ts:176](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L176)

___

### seq

▸ `Static` **seq**(`sequence`, `id`, `rid`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sequence` | `number` |
| `id` | `string` |
| `rid` | `string` |

#### Returns

`string`

#### Defined in

[src/config.ts:238](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L238)

___

### ts

▸ `Static` **ts**(): `string`

#### Returns

`string`

#### Defined in

[src/config.ts:232](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L232)

___

### warn

▸ `Static` **warn**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[src/config.ts:57](https://github.com/openiap/nodeapi/blob/a6b5438/src/config.ts#L57)
