---
layout: default
title: Python API
nav_order: 10
---

Install using
```bash
python3 -m pip install openiap
```

Please see [Getting Started](Agent-Getting-Started) on how to set up and run example code.

## Quick Start Example
In a folder called .vscode, add `launch.json`.
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Run main.py",
            "type": "python",
            "request": "launch",
            "program": "main.py",
            "console": "integratedTerminal",
            "env": {
                "apiurl": "grpc://username:password@grpc.app.openiap.io:443",
            }
        }
    ]
}
```

Next, add `main.py` to the root folder.
```python
import asyncio
from openiap import Client
async def main():
    client = openiap.Client()
    client.Signin()
    result = await client.Query(collectionname="entities", projection={"_created": 1, "name": 1, "_type": 1})
    print(result)
    client.Close()
asyncio.run(main())
```

Now press `F5` or click `Run`, to run the example.
We **HIGHLY** discourage the use of username and password.
Please see [Getting Started](Agent-Getting-Started) on how to
generate JWT tokens and to easily swap between multiple users and OpenFlow instances.

## RegisterQueue
To register and consume a message queue:
```python
import json
import asyncio
from openiap import Client

async def main():
    client = Client()
    await client.Signin()
    queuename = await client.RegisterQueue(queuename="myqueue", callback=callback_function)
    print(f"Consuming queue {queuename}")
    while True:
        await asyncio.sleep(1)

async def callback_function(cli:Client, message, payload):
    print(json.dumps(payload, indent=2))

if __name__ == "__main__":
    asyncio.run(main())
```

This will give issues if we disconnect from the server. When the client reconnects, we will no longer be consuming the queue, so let's update the logic to handle registering the queue after reconnection.

```python
import openiap, asyncio
from openiap import Client
import json
async def callback_function(cli:Client, message, payload):
    print(json.dumps(payload, indent=2))
async def onconnected(cli:Client):
    try:
        await cli.Signin()
        print("Connected to OpenIAP") 
        queuename = await cli.RegisterQueue("myqueue", callback_function)
        print(f"Consuming queue {queuename}")
    except Exception as e:
        print(e)
async def main():
    client = openiap.Client()
    client.onconnected = onconnected
    while True:
        await asyncio.sleep(1)
if __name__ == "__main__":
    asyncio.run(main())
```
This way, we sign in and re-consume the queue every time the client reconnects to the server.

# openiap module
Classes
-------

`Client(url: str = '', grpc_max_receive_message_length: int = 4194304)`
:   

    ### Methods

    `Aggregate(self, aggregates: dict = {}, collectionname: str = 'entities', queryas: str = None)`
    :

    `Close(self)`
    :

    `Count(self, query: dict = {}, collectionname: str = 'entities', queryas: str = None)`
    :

    `DeleteMany(self, query: dict, collectionname: str = 'entities', recursive: bool = False)`
    :

    `DeleteOne(self, id: str, collectionname: str = 'entities', recursive: bool = False)`
    :

    `DownloadFile(self, Id: str = None, Filename: str = None)`
    :

    `DropCollection(self, collectionname: str)`
    :

    `GetDocumentVersion(self, id: str, collectionname: str, version: int = 0, decrypt: bool = True)`
    :

    `GetElement(self, xpath: str)`
    :

    `InsertMany(self, items: [], collectionname: str = 'entities', skipresults: bool = False)`
    :

    `InsertOne(self, item: dict, collectionname: str = 'entities')`
    :

    `InsertOrUpdateMany(self, items: dict, collectionname: str = 'entities', uniqeness: str = '_id', skipresults: bool = False)`
    :

    `InsertOrUpdateOne(self, item: dict, collectionname: str = 'entities', uniqeness: str = '_id')`
    :

    `ListCollections(self, includehist: bool = False)`
    :

    `PopWorkitem(self, wiq: str, includefiles: bool = False, compressed: bool = False)`
    :

    `PushWorkitem(self, wiq: str, name: str, payload: dict, files: <built-in function any> = None, wiqid: str = None, nextrun: datetime.datetime = None, priority: int = 2, compressed: bool = False)`
    :

    `Query(self, collectionname: str = 'entities', query: dict = {}, projection: dict = {}, top: int = 100, skip: int = 0, orderby=None, queryas: str = None)`
    :

    `QueueMessage(self, queuename: str, payload, correlationId=None, striptoken=True, rpc=False)`
    :

    `RegisterQueue(self, queuename: str, callback)`
    :

    `Signin(self, username: str = None, password: str = None, ping: bool = True, validateonly: bool = False, longtoken: bool = False)`
    :

    `UnWatch(self, id: str)`
    :

    `UpdateDocument(self, query: dict, document: dict, collectionname: str = 'entities')`
    :

    `UpdateOne(self, item: dict, collectionname: str = 'entities')`
    :

    `UpdateWorkitem(self, workitem, files: <built-in function any> = None, compressed: bool = False, ignoremaxretries: bool = False)`
    :

    `Watch(self, collectionname, paths: list, callback)`
    :

    `ainput(self, string: str) ‑> str`
    :

    `onconnected(self, client)`
    :

    `onmessage(self, client, command, rid, message)`
    :

`GracefulKiller()`
:   

    ### Class variables

    `kill_now`
    :

    ### Methods

    `exit_gracefully(self, *args)`
    :