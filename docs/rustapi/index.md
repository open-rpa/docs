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

rust
```bash
cargo run
cargo test
```

nodejs
```bash
cd node
node test.js
```

python
```bash
cd python
pip uninstall openiap -y && pip install dist/openiap-0.1.1-py3-none-any.whl && python test.py

```
dotnet
```bash
cd dotnet
dotnet run
```
