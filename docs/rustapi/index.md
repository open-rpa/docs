---
layout: default
title: Rust API
nav_order: 11
---

# rust api for openiap and wrappers for nodejs, python and dotnet6
please see [rust api](https://github.com/openiap/rustapi/) for source code and most up to date examples.

please see [documentation](https://docs.rs/openiap-client/latest/openiap_client/) for usage.

[openiap-clib](https://crates.io/crates/openiap-clib) also functions as the "backend" for the nodejs, python and dotnet6 SDK's.

# build
make sure you have rust installed
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
make sure protoc is installed
```bash
# linux
sudo apt install protobuf-compiler
# macos
brew install protobuf
# windows
# download at https://github.com/protocolbuffers/protobuf/releases
```
install [cross](https://github.com/cross-rs/cross) ( requires docker or podman )
```
cargo install cross --git https://github.com/cross-rs/cross
```
then compile for each target platform by running
```
sh build.sh
```

# test
setup default credentials

```bash
export OPENIAP_USERNAME=username
export OPENIAP_PASSWORD=password
```
when running inside vs code, add a .env file in the root of the project with the following contents
```
OPENIAP_USERNAME=username
OPENIAP_PASSWORD=password
```


### First tabs

{% tabs run %}

{% tab run rust %}
```bash
cargo run
```
{% endtab %}

{% tab run js %}
```bash
cd node
node test.js
```
{% endtab %}

{% tab run python %}
```bash
cd python
pip uninstall openiap_edge -y && pip install dist/openiap_edge-0.0.13.tar.gz && python test.py
```
{% endtab %}

{% tab run dotnet %}
```bash
cd dotnet
dotnet run
```
{% endtab %}

{% endtabs %}

### Second tabs

{% tabs data-struct %}

{% tab data-struct yaml %}
```yaml
hello:
  - 'whatsup'
  - 'hi'
```
{% endtab %}

{% tab data-struct json %}
```json
{
    "hello": ["whatsup", "hi"]
}
```
{% endtab %}

{% endtabs %}
