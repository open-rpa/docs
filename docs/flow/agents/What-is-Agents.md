# What is an Agent in OpenIAP Flow

An `Agent` in OpenIAP Flow is responsible for executing one or more `Packages`. There are several types of agents:

- `Dockerimage` as part of the OpenIAP Flow installation, typically a cloud-hosted image managed through OpenIAP Flow.
- `Nodeagent daemon` installed as a background daemon on macOS and Linux, or as a Windows Service on Windows.
- `Assistant` an application run by an end user, which can auto-start on user login. Users can initiate ad-hoc jobs and track scheduled jobs through the Assistant's UI.

You can [scheduling packages](scheduling-packages) on any of the above agents on the add/edit agent page in OpenIAP flow
