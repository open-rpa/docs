---
layout: default
title: SDKs
nav_order: 11
has_children: true
---

# Connecting to OpenIAP from your application
We provide SDK's for the following languages:
- NodeJS / [npm](https://www.npmjs.com/package/openiap) / [example](https://github.com/skadefro/nodetest)
- browser / [github](https://github.com/openiap/jsapi) / [example](https://github.com/openiap/core-web/tree/v3)
- Python / [pypi](https://pypi.org/project/openiap-edge/) / [example](https://github.com/openiap/pythontest)
- dotnet / [nuget](https://www.nuget.org/packages/OpenIAP/) / [example](https://github.com/skadefro/dotnettest)
- Rust / [crates.io](https://crates.io/crates/openiap-client) / [example](https://github.com/openiap/rustapi/tree/main/crates/cli)

We recommend using vs.code ( or any other editor based of vscode ) for development, with our [openiap-vscode](https://marketplace.visualstudio.com/items?itemName=openiap.openiap-assistant) extension, to manage your .env files. To manually generated a jwt token, login to OpenIAP's web interface [app.openiap.io](https://app.openiap.io) and then go to [/jwtlong](https://app.openiap.io/jwtlong) and copy the jwt field.

To connect to the API and do a queries towards the entities collections, you would do something like this:

{% tabs run %}

{% tab run rust %}
```rust
use openiap_client::{OpenIAPError, Client, QueryRequest};
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

{% tab run nodejs %}
```javascript
const { Client } = require('openiap');
const client = new Client();
client.connect();
const query_result = client.query({ collectionname: 'entities', query: '{}', projection: '{"name":1}' });
console.log("result", query_result);
client.free();
```
{% endtab %}

{% tab run python %}
```python
from openiap import Client
client = Client()
client.connect()
query_result = client.query(collectionname="entities", query="{}", projection="{\"name\": 1}")
print("result", query_result)
client.free()
```
{% endtab %}

{% tab run dotnet %}
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

For more detailed examples, please see the examples in the respective repositories above.


# Building SDK's from source

please see [rust api](https://github.com/openiap/rustapi/) for source code and most up to date examples.

please see [documentation](https://docs.rs/openiap-client/latest/openiap_client/) for usage.

[openiap-clib](https://crates.io/crates/openiap-clib) also functions as the "backend" for the nodejs, python and dotnet6 SDK's.

# build
make sure you have rust and protobuf installed
{% tabs install %}

{% tab install linux %}
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
sudo apt install protobuf-compiler
cargo install cross --git https://github.com/cross-rs/cross
sh build.sh
```
{% endtab %}

{% tab install macos %}
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
brew install protobuf
cargo install cross --git https://github.com/cross-rs/cross
sh build.sh
```
{% endtab %}

{% tab install windows %}
```bash
# not tested on windows, but maybe it will work ?
https://www.rust-lang.org/tools/install
https://github.com/protocolbuffers/protobuf/releases
# install cross
cargo install cross --git https://github.com/cross-rs/cross
# then run each command inside build.sh
```
{% endtab %}
{% endtabs %}

### Build and run test client
You can run the test client's from within vs code, remember to add a .env file in the root of the project with the following content:
```bash
export jwt=eyJhbGciOiJI...
apiurl=grpc://grpc.app.openiap.io:443
```
or run the following commands in the terminal:

{% tabs run %}

{% tab run rust %}
```bash
export jwt=eyJhbGciOiJI...
export apiurl=grpc://grpc.app.openiap.io:443
cargo run
```
{% endtab %}

{% tab run nodejs %}
```bash
export jwt=eyJhbGciOiJI...
export apiurl=grpc://grpc.app.openiap.io:443
cd node
node test.js
```
{% endtab %}

{% tab run python %}
```bash
export jwt=eyJhbGciOiJI...
export apiurl=grpc://grpc.app.openiap.io:443
cd python
pip uninstall openiap_edge -y && pip install dist/openiap_edge-0.0.13.tar.gz && python test.py
```
{% endtab %}

{% tab run dotnet %}
```bash
export jwt=eyJhbGciOiJI...
export apiurl=grpc://grpc.app.openiap.io:443
cd dotnet
dotnet run
```
{% endtab %}

{% endtabs %}
