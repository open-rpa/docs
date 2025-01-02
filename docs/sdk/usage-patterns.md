---
layout: default
title: Usage Patterns
parent: SDKs
---

## Execution Models

The SDK supports two distinct execution models, designed to accommodate different types of applications and use cases.

1. **Persistent Connections**  
   In this model, the code runs indefinitely, making it ideal for scenarios where the application needs to maintain a constant connection or listen for incoming events. Examples include:

   - **Listening on a Port**: The code opens a port and waits for incoming connections or data, such as a server continuously handling client requests.
   - **Message Queue Listening**: The code stays connected to a message queue, processing messages as they arrive without terminating after a single task.

   This approach is useful for long-running tasks where the application is expected to remain active and continuously responsive to new inputs. When using the persistent connection model, you hook into the SDK's event loop to receive notifications when the client signs in, allowing you to perform additional operations, such as subscribing to channels or listening for incoming messages. In the event that the client loses connection to OpenIAP servers, it will automatically reconnect, and you can then re-subscribe to channels or re-listen for incoming messages.

2. **Transient Connections**  
   This model is intended for tasks where the code connects to a service, performs a specific action, and then disconnects or exits. This type of connection is short-lived, allowing for efficient resource usage, especially for operations that do not require a persistent connection. Examples include:

   - **Fetching Data**: The code connects to an API, retrieves the necessary data, and then disconnects.
   - **Sending a Single Message**: The code establishes a connection to a messaging service, sends a message, and closes the connection.

   This approach is suitable for discrete, one-time operations where maintaining a constant connection would be unnecessary. In this model, the connection is established, the operation is performed, and then the connection is closed. The SDK handles the connection lifecycle, ensuring efficient resource management. In this case, there is no need to handle reconnection logic.

By offering both persistent and transient connection models, the SDK enables flexibility, allowing developers to choose the model that best fits their application's requirements.

> **Note:** The initial call to `connect()` will fail if the connection is unsuccessful. However, once the client is connected, it will automatically attempt to reconnect in the event of a disconnection. Use the event loop to listen for connection events, such as when the client has signed in, to perform additional operations.

# Transient Connections

{% tabs Transient %}

{% tab Transient rust %}
```rust
use openiap_client::{enable_tracing, Client, OpenIAPError, RegisterQueueRequest};
use std::sync::Arc;

#[tokio::main]
async fn main() -> Result<(), OpenIAPError> {
    let b = Arc::new(Client::new());
    let b_clone = Arc::clone(&b);
    b.on_event(Box::new(move |_event| {
        println!("CLI: Event received: {:?}", _event);
        let b = Arc::clone(&b_clone);
        match _event {
            openiap_client::ClientEvent::Connecting => println!("CLI: Client connecting!"),
            openiap_client::ClientEvent::Connected => println!("CLI: Client connected!"),
            openiap_client::ClientEvent::Disconnected(e) => println!("CLI: Client disconnected! {:?}", e),
            openiap_client::ClientEvent::SignedIn => {
                println!("CLI: Client signed in, we can now register queues in OpenIAP!");
                let b = Arc::clone(&b);
                tokio::spawn(async move {
                    match b.register_queue(
                        RegisterQueueRequest::byqueuename("testq"),
                        Box::new(|event| {
                            println!(
                                "Received message from queue {:?} with reply to {:?}: {:?}",
                                event.queuename, event.replyto, event.data
                            );
                        }),
                    )
                    .await {
                        Ok(_) => println!("CLI: Queue registered!"),
                        Err(e) => println!("CLI: Queue registration failed! {:?}", e),                        
                    };
                });
            },
        }
    })).await;
    println!("CLI: Connecting to OpenIAP...");
    b.connect_async("").await?;
    println!("CLI: Connected to OpenIAP, begin loop");
    loop {
        tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
    }
}
```
{% endtab %}

{% tab Transient nodejs %}
```javascript
const { Client } = require('openiap');
const client = new Client();
client.connect();
client.on_client_event((event) => {
    console.log("client event", event);
    if (event.event == "SignedIn") {
        const queuename = client.register_queue({ queuename: 'testq' }, (event) => {
            console.log("queue:", event?.queuename, "event from:", event?.replyto, "payload:", event?.data);
        });
        console.log("Registered queue as", queuename);
    }
});
```
{% endtab %}

{% tab Transient python %}
```python
from openiap import Client
client = Client()
client.connect()
query_result = client.query(collectionname="entities", query="{}", projection="{\"name\": 1}")
print("result", query_result)
client.free()
```
{% endtab %}

{% tab Transient dotnet %}
```csharp
static void Main(string[] args) {
    MainAsync(args).GetAwaiter().GetResult();
}
static async Task MainAsync(string[] args) {
    Client client = new Client();
    await client.connect();
    string results = await client.Query<string>("entities", "{}", "{\"name\": 1}");
    Console.WriteLine("result: " + results);    
}
```
{% endtab %}

{% endtabs %}

# Persistent Connections Example

{% tabs Persistent %}

{% tab Persistent rust %}
```rust
use openiap_client::{OpenIAPError, Client, QueryRequest};
#[tokio::main]
async fn main() -> Result<(), OpenIAPError> {
    let client = Client::new_connect("").await?;
    let q = client.query( QueryRequest::with_projection(
        "entities",
        "{}",
        "{\"name\":1}"
    )).await?;
    let items: serde_json::Value = serde_json::from_str(&q.results).unwrap();
    let items: &Vec<serde_json::Value> = items.as_array().unwrap();
    for item in items {
        println!("Item: {:?}", item);
    }
    Ok(())
}

```
{% endtab %}

{% tab Persistent nodejs %}
```javascript
const { Client } = require('openiap');
const client = new Client();
client.connect();
const query_result = client.query({ collectionname: 'entities', query: '{}', projection: '{"name":1}' });
console.log("result", query_result);
client.free();
```
{% endtab %}

{% tab Persistent python %}
```python
from openiap import Client
import json
import time
def onmessage(event, counter):
    data = event["data"]
    print(f"{counter} Received event: {json.dumps(event, indent=2)}")

def onclientevent(result, counter):
    print("client event", result)
    event = result["event"]
    if event == "SignedIn":
        print("client signed in, registering queue")
        queuename = client.register_queue(queuename="testq", callback=onmessage)
        print("queue", queuename, "registered")

client = Client()
client.connect()
client.on_client_event(callback=onclientevent)
while True:
    time.sleep(1)
```
{% endtab %}

{% tab Persistent dotnet %}
```csharp
static void Main(string[] args) {
    MainAsync(args).GetAwaiter().GetResult();
}
static void on_client_event(Client client, dynamic eventObj) {
    Console.WriteLine("Client event " + eventObj.evt + ": " + eventObj.reason);
    client.RegisterQueue("testq", e => {
        Console.WriteLine("Queue event received from " + e.queuename + " with data: " + e.data);
    });
}
static async Task MainAsync(string[] args) {
    Client client = new Client();
    Console.WriteLine("Connecting to OpenIAP");
    await client.connect();
    var eventid = client.on_client_event((eventObj) => {
        on_client_event(client, eventObj);
    });
    Console.WriteLine("Client event id: " + eventid);
    Console.WriteLine("Connected to OpenIAP, begin loop");
    while(true) {
        await Task.Delay(1000);
    }
}
```
{% endtab %}

{% endtabs %}

# Event Loop

The SDK provides an event loop that allows you to listen for various events, such as connection status changes, incoming messages, and errors. By registering event handlers, you can respond to these events and take appropriate actions within your application. This approach is also used for registering a queue consumer with the `register_queue` method or subscribing to database changes with the `watch` method.

It's generally a good idea to register event handlers instead of creating loops that poll for work items or run regular database queries to check for new items. This way, you achieve faster response times and reduce resource usage on the server.