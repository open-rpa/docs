---
layout: default
title: Configuration Values
parent: What Is OpenIAP Flow
nav_order: 14
---
# Configuration settings

This document outlines the configuration options available for OpenIAP flow.
These settings are set either though environments variables.
- **Docker**: set in your docker-compose file when using [docker](DockerCompose) instalations.
- **Kubernetes**: set in your values fle when unding [helm chart}(Kubernetes).
- **.env**: set in your .env file when debugging the [source code}(Build-from-source)
> Important: No all setting work for all setups, some are specefik for kubernetes, openshift, some for docker only and some for building from source.
Try to **only** add the setting you intend to change from the default, this will keep you config small and clean.

# Docker
Open the docker-compose file you are using, find the `api` service, usaly places as the last entry. 
under `environment:` you fill fine the most common settings, but when relevant you can add some of those listed beloc. 

# Kubernetes
If you followed the guide on the [helm chart}(Kubernetes) you should have a values file, you use then updating openflow.
Kubernetes uses the same values but are defined different, so please refere to this file for details [document here](https://github.com/open-rpa/helm-charts/blob/main/charts/openflow/values.yaml).

# .env file
If you follow the building from [source code}(Build-from-source) guide, you will have an .env file inside your config folder.

# Database base config object.
To enforce values set using any of the above methods require restarting the api nodes. Almost all variables can also be overriden using an object in the database.
Manully create an object inside the config collection of type "_type": "config" or open the [Console page](https://app.openiap.io/#/Console) and check "enabled streaming".
Now you manually add one of more of the below values to the object, to emeiadtly override that value. Be aware, this means if you make an mistake you will manully have to find a way to update the database to remove/change it, if you make a mistake that will make openflow unable to start/reload.

```bash
license_key=
enable_openai= # Default: false
enable_openapi= # Default: true
enable_openaiauth= # Default: true
openai_token= # Used to authenticate the version one ChatGPT extension's
version=
log_with_colors= # Default: true - Use colors in the console output, can be an issue for certain types of log collectors

cache_store_type= # Default: memory - memory or redis
cache_store_max= # Default: 1000 - Max number of objects in store
cache_store_ttl_seconds= # Default: 300 - Expire cache items after this amount of seconds
cache_store_redis_host= # set redis host when type is redis
cache_store_redis_port= # Default: 6379 - set redis post when type is redis
cache_store_redis_password= # set redis password when type is redis
cache_workitem_queues= # Default: false - If enabled, workitem queues will sometimes take cache_store_ttl_seconds until registering queue count has changed

log_cache= # Default: false - Should be set using Web Console
log_amqp= # Default: false - Should be set using Web Console
log_openapi= # Default: false - Should be set using Web Console
log_login_provider= # Default: false - Should be set using Web Console
log_with_trace= # Default: false - Should be set using Web Console
log_websocket= # Default: false - Should be set using Web Console
log_oauth= # Default: false - Should be set using Web Console
log_webserver= # Default: false - Should be set using Web Console
log_database= # Default: false - Should be set using Web Console
log_database_queries= # Default: false - Should be set using Web Console
log_database_queries_ms= # Default: 0 - Should be set using Web Console

log_grafana= # Default: false - Should be set using Web Console
log_housekeeping= # Default: false - Should be set using Web Console
log_otel= # Default: false - Should be set using Web Console
log_blocked_ips=true # Default: true - Should be set using Web Console
log_information=true # Default: true - Should be set using Web Console
log_debug= # Default: false - Log debug messages for ALL types of logs
log_verbose= # Default: false - Log debug and verbose messages for ALL types of logs
log_silly= # Default: false - is Normaly disabled in code, but doing troubleshooting this can be enabled in code and then here
log_to_exchange= # Default: false - This is how you enable logging to web console, should **ONLY** be set using Web Console

heapdump_onstop= # Default: false - Make a memory dump and upload to file store when receving SIGILL 

amqp_allow_replyto_empty_queuename= # Default: false

enable_openflow_amqp= # Default: false - Must be true if you have more than 1 apy node.
openflow_amqp_expiration= # Default: 25 (25 min)
amqp_prefetch= # Default: 25 - when enable_openflow_amqp is true, Max number of message to take of the queue at the time
enable_entity_restriction= # Default: false - Use policies to control who can create items, default valyes, entity format and encryption
enable_web_tours= # Default: true - Enable webtour for users without the webtour completed cookie
enable_nodered_tours= # Default: true - Set to false, to disable the default tour in NodeRED. If enabled will force reloads when toggled.
grafana_url= # Enable a grafana link in the openflow web interface that link's to this URL. 
auto_hourly_housekeeping= # Default: true
housekeeping_update_usage_hourly= # Default: false
housekeeping_update_usersize_hourly= # Default: true
housekeeping_skip_collections=
workitem_queue_monitoring_enabled= # Default: true
workitem_queue_monitoring_interval= # Default: 10000 (10 sec)

upload_max_filesize_mb= # Default: 25

getting_started_url=

NODE_ENV= # Default: development
HTTP_PROXY=
HTTPS_PROXY=
NO_PROXY=
agent_HTTP_PROXY=
agent_HTTPS_PROXY=
agent_NO_PROXY=

stripe_api_key=
stripe_api_secret=
stripe_force_vat= # Default: false
stripe_force_checkout= # Default: false
stripe_allow_promotion_codes= # Default: true

supports_watch= # Default: false
ensure_indexes= # Default: true
text_index_name_fields= # Default: name,_names
metadata_collections=

auto_create_users= # Default: false
auto_create_user_from_jwt= # Default: false
auto_create_domains=
persist_user_impersonation= # Default: true
ping_clients_interval= # Default: 10000 (10 seconds)

allow_personal_nodered= # Default: false
use_ingress_beta1_syntax= # Default: false
use_openshift_routes= # Default: false
agent_image_pull_secrets=
auto_create_personal_nodered_group= # Default: false
auto_create_personal_noderedapi_group= # Default: false
force_add_admins= # Default: true
validate_emails= # Default: false
forgot_pass_emails= # Default: false
smtp_service=
smtp_from=
smtp_user=
smtp_pass=
smtp_url=
debounce_lookup= # Default: false
validate_emails_disposable= # Default: false

tls_crt=
tls_key=
tls_ca=
tls_passphrase=

oidc_access_token_ttl= # Default: 480 (8 hours)
oidc_authorization_code_ttl= # Default: 480 (8 hours)
oidc_client_credentials_ttl= # Default: 480 (8 hours)
oidc_refresh_token_ttl= # Default: 20160 (14 days in seconds)
oidc_session_ttl= # Default: 20160 (14 days in seconds)

oidc_cookie_key= # Default: Y6SPiXCxDhAJbN7cbydMw5eX1wIrdy8PiWApqEcguss=
api_rate_limit= # Default: true
api_rate_limit_points= # Default: 20
api_rate_limit_duration= # Default: 1
socket_rate_limit= # Default: true
socket_rate_limit_points= # Default: 30
socket_rate_limit_points_disconnect= # Default: 100
socket_rate_limit_duration= # Default: 1
socket_error_rate_limit_points= # Default: 30
socket_error_rate_limit_duration= # Default: 1

client_heartbeat_timeout= # Default: 60
client_signin_timeout= # Default: 120
client_disconnect_signin_error= # Default: false

expected_max_roles= # Default: 20000
decorate_roles_fetching_all_roles= # Default: true
max_recursive_group_depth= # Default: 2
update_acl_based_on_groups= # Default: true
allow_merge_acl= # Default: false

multi_tenant= # Default: false
cleanup_on_delete_customer= # Default: false
cleanup_on_delete_user= # Default: false
api_bypass_perm_check= # Default: false
ignore_expiration= # Default: false
force_audit_ts= # Default: false
force_dbusage_ts= # Default: false
migrate_audit_to_ts= # Default: true

websocket_package_size= # Default: 25000
websocket_max_package_count= # Default: 25000
websocket_message_callback_timeout= # Default: 3600
websocket_disconnect_out_of_sync= # Default: false
protocol= # Default: http
port= # Default: 80
domain= # Default: localhost
cookie_secret= # Used to protect cookies
max_ace_count= # Default: 128

amqp_reply_expiration= # Default: 60000 (1 min)
amqp_force_queue_prefix= # Default: false
amqp_force_exchange_prefix= # Default: false
amqp_force_sender_has_read= # Default: true
amqp_force_sender_has_invoke= # Default: false
amqp_force_consumer_has_update= # Default: false
amqp_enabled_exchange= # Default: false
amqp_url= # Default: amqp://localhost
amqp_username= # Default: guest
amqp_password= # Default: guest
amqp_check_for_consumer= # Default: true
amqp_check_for_consumer_count= # Default: false
amqp_default_expiration= # Default: 60000 (1 min)
amqp_requeue_time= # Default: 1000 (1 second)
amqp_dlx= # Default: openflow-dlx

mongodb_url= # Default: mongodb://localhost:27017
mongodb_db= # Default: openflow
mongodb_minpoolsize= # Default: 25
mongodb_maxpoolsize= # Default: 25

skip_history_collections= # Default: audit,openrpa_instances,workflow_instances
history_delta_count= # Default: 1000
allow_skiphistory= # Default: false
max_memory_restart_mb= # Default: 0

saml_issuer= # Default: the-issuer
aes_secret=
signing_crt=
singing_key=
wapid_mail=
wapid_pub=
wapid_key=

shorttoken_expires_in= # Default: 5m
longtoken_expires_in= # Default: 365d
downloadtoken_expires_in= # Default: 15m
personalnoderedtoken_expires_in= # Default: 365d

nodered_images= # An array of JSON objects representing Nodered images
agent_images= # An array of JSON objects representing Agent images
agent_domain_schema= # Schema for Agent
agent_node_selector= # Node selector for Agent

agent_apiurl= # API URL for Agent
agent_oidc_config= # OIDC configuration for Agent
agent_oidc_client_id= # OIDC client ID for Agent
agent_oidc_client_secret= # OIDC client secret for Agent
agent_oidc_userinfo_endpoint= # OIDC userinfo endpoint for Agent
agent_oidc_issuer= # OIDC issuer for Agent
agent_oidc_authorization_endpoint= # OIDC authorization endpoint for Agent
agent_oidc_token_endpoint= # OIDC token endpoint for Agent

saml_federation_metadata= # SAML federation metadata
api_ws_url= # API WebSocket URL
nodered_ws_url= # Nodered WebSocket URL
nodered_saml_entrypoint= # SAML entrypoint for Nodered

agent_docker_entrypoints= # Docker entrypoints for Agent
agent_docker_use_project= # Default: false
agent_docker_certresolver=

namespace= # Namespace
nodered_domain_schema= # Nodered domain schema
nodered_initial_liveness_delay= # Default: 60
nodered_allow_nodeselector= # Default: false
nodered_liveness_failurethreshold= # Default: 5
nodered_liveness_timeoutseconds= # Default: 5
noderedcatalogues=

otel_measure_nodeid= # Default: false
otel_measure_queued_messages= # Default: false
otel_measure__mongodb_watch= # Default: false
otel_measure_onlineuser= # Default: false
enable_analytics= # Default: true
enable_detailed_analytic= # Default: false
otel_debug_log= # Default: false
otel_warn_log= # Default: false
otel_err_log= # Default: false
otel_trace_url=
otel_metric_url=
otel_trace_interval= # Default: 5000
otel_metric_interval= # Default: 5000
otel_trace_pingclients= # Default: false
otel_trace_dashboardauth= # Default: false
otel_trace_include_query= # Default: false
otel_trace_connection_ips= # Default: false
otel_trace_mongodb_per_users= # Default: false
otel_trace_mongodb_query_per_users= # Default: false
otel_trace_mongodb_count_per_users= # Default: false
otel_trace_mongodb_aggregate_per_users= # Default: false
otel_trace_mongodb_insert_per_users= # Default: false
otel_trace_mongodb_update_per_users= # Default: false
otel_trace_mongodb_delete_per_users= # Default: false

grpc_keepalive_time_ms= # gRPC keepalive time in milliseconds
grpc_keepalive_timeout_ms= # gRPC keepalive timeout in milliseconds
grpc_http2_min_ping_interval_without_data_ms= # gRPC HTTP2 minimum ping interval without data in milliseconds
grpc_max_connection_idle_ms= # gRPC maximum connection idle time in milliseconds
grpc_max_connection_age_ms= # gRPC maximum connection age in milliseconds
grpc_max_connection_age_grace_ms= # gRPC maximum connection age grace in milliseconds
grpc_http2_max_pings_without_data= # gRPC HTTP2 maximum pings without data
grpc_keepalive_permit_without_calls= # gRPC keepalive permit without calls
grpc_max_receive_message_length= # gRPC maximum receive message length
grpc_max_send_message_length= # gRPC maximum send message length

validate_user_form= # User form validation configuration

```