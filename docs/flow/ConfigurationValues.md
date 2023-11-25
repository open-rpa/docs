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
enable_openai= # Default: false - Enable chat gpt 4, openapi endpoint, and expose plugin endpoint at .well-known/ai-plugin.json
enable_openapi= # Default: true - Enable generic OpenAPI endpoint, same as enable_openai but without .well-known/ai-plugin.json 
enable_openapiauth= # Default: true - Force user authentication to use openai plugin ( without will allows ADMIN access to the database, for tesing ONLY !!!! )
openai_token= # Set token to use when authrorizing to openai plugin ( you get this the first time you add the plugin inside chat gpt 4 )
version=
log_with_colors= # Default: true - Use colors in the console output, can be an issue for certain types of log collectors

protocol= # Default: http - used by agents and baseurl()
port= # Default: 80 - This must stay as 80 on docker and kubernetes
domain= # Default: localhost - sent to website and used in baseurl()
cookie_secret= # Used to protect cookies
max_ace_count= # Default: 128 - Discard overflow ace's if an _acl has more than 128 entries

saml_issuer= # Default: the-issuer - Normal set to uri:api-domain of openflow
aes_secret= # encryption key used for user passwords and encryptiong data specefied in _encrypt
# Signing certificate used for SAML token issued by openflow
signing_crt= 
singing_key=
# WAP token and email used for OpenFlow's WebPush service
wapid_mail=
wapid_pub=
wapid_key=

# Define type of and configure caching
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
debug= # Default: - Set value for the DEBUG environment variable, used for some modules to control loggin, for instance oidc-provider:*
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

auto_hourly_housekeeping= # Default: true - Once an hour runs a job that check collections, indexs, runing agents and other hygiene
housekeeping_skip_collections= # When calculating database usage exclude these collections, seperated multiple with comma ,
workitem_queue_monitoring_enabled= # Default: true - Monitor all workitemqueues and notify connected clients if there are new items
workitem_queue_monitoring_interval= # Default: 10000 (10 sec) - Check database and notify conneted clients at this interval

upload_max_filesize_mb= # Default: 25 - Maximum upload size to /upload endpoint, used for upload files in forms.io and using old angular WebUI 

getting_started_url= # Send this url to all OpenRPA robots to use as getting_started_url url. Not used since openrpa 1.3 but keept for backward compabilty

NODE_ENV= # Default: development - development or production. Optimize and less mmeasuring when set for production, hourkeeping is disabled in development
HTTP_PROXY= # OS specefic, use to set PROXY settings for the api node
HTTPS_PROXY= # OS specefic, use to set PROXY settings for the api node
NO_PROXY= # OS specefic, use to set PROXY settings for the api node
agent_HTTP_PROXY= # Set HTTP_PROXY for all agent's started using openflow
agent_HTTPS_PROXY= # Set HTTPS_PROXY for all agent's started using openflow
agent_NO_PROXY= # Set NO_PROXY for all agent's started using openflow

stripe_api_key= # If resource broker has been configured and you have a stripe account, set this and stripe_api_secret to enable online payments
stripe_api_secret= # If resource broker has been configured and you have a stripe account, set this and stripe_api_key to enable online payments
stripe_force_vat= # Default: false - Decline customer without a valid VAT number ( using strupe vat look. VERY slow and unreliable )
stripe_force_checkout= # Default: false - Tell stripe to force VAT number. Enable to allow allow B2B sales
stripe_allow_promotion_codes= # Default: true - Disable the use of promo codes doing sign up

ensure_indexes= # Default: true - Enforce defult index's on all collections doing the hourly house keeping job
text_index_name_fields= # Default: name,_names - Set fields that YOU included in your text indexs, needed to exact matches when searching

auto_create_users= # Default: false - Users can create them self, but trying to login
auto_create_domains= # Default: false - Only allow creating new users, if domain is in this comma seperated list.
auto_create_user_from_jwt= # Default: false - If someone tries to login with a valid token, but an unknow userid, auto create it ?
persist_user_impersonation= # Default: true - Save on user impersonator when impersinating a user (persist when reloading), else only saved in current token
ignore_expiration= # Default: false - Allow users to signin with JWT tokens that has expired. 
ping_clients_interval= # Default: 10000 (10 seconds) - Send Ping command to every connected client at this interval
client_heartbeat_timeout= # Default: 60 - Disconnect clients if they have nnt responded to ping (ping_clients_interval) after this many seconds.
client_signin_timeout= # Default: 120 - Disconnect client that has not authenticated after this amount of seconds
client_disconnect_signin_error= # Default: false - Send error to client when disconnecting (disabled for backward compatablity with old OpenRPA clients)

use_ingress_beta1_syntax= # Default: false - For old kubernetes installation, use beta1 syntax ?
use_openshift_routes= # Default: false - on openshift we use routes and not traefik as ingress controller
agent_image_pull_secrets= # If using custom image repository that requeires authentiction, like habor, set secret here
auto_create_personal_nodered_group= # Default: false - Backwward compability with 1.4, allow openflow to autocrete nodered admin roles for all new users
auto_create_personal_noderedapi_group= # Default: false - Backwward compability with 1.4, allow openflow to autocrete nodered api roles for all new users, require auto_create_personal_nodered_group to be true as well
force_add_admins= # Default: true - Force adding admins role with full control to all objects in the database.

# Default: false - Allow non-federated user to get an reset password link sent.
forgot_pass_emails= 
# Default: false - Validate non-federated users, but sending a validatoin token by email to them.
# This will require a user form, and email settings to be specefied as well
validate_emails= 
 
smtp_service= # Node mailer, service type
smtp_from= # When sending service mails, sent from this email
smtp_user= # Username when sending ( smtp service=gmail for everything else, use smtp_url )
smtp_pass= # password when sending ( smtp service=gmail for everything else, use smtp_url )
smtp_url= # Use smtp url for configuration  ( see https://nodemailer.com/smtp/ or https://www.npmjs.com/package/nodemailer/v/2.2.0-beta.0 ) 
# Check new user's email toward debounc database and reject users with temptorary email addresses
debounce_lookup= # Default: false - when validating email, check if disposable email by looking for name in the domains collection for _type disposable
# Check new user's email toward local disposable domain collection and reject users with temptorary email addresses
validate_emails_disposable= # Default: false

# When building from source and need SSL certificate's
tls_crt=
tls_key=
tls_ca=
tls_passphrase=

# OpenID Connect setting
oidc_access_token_ttl= # Default: 480 (8 hours)
oidc_authorization_code_ttl= # Default: 480 (8 hours)
oidc_client_credentials_ttl= # Default: 480 (8 hours)
oidc_refresh_token_ttl= # Default: 20160 (14 days in seconds)
oidc_session_ttl= # Default: 20160 (14 days in seconds)
oidc_cookie_key= 

# Limit the amount of api ( web, not websocket ) requests by ip address. If using kubernetes, works best with sessionAffinity set to ClientIP
api_rate_limit= # Default: true - to disable rate limits on all http requests, set this to false
api_rate_limit_points= # Default: 20 - to change the amount of points a hit consume
api_rate_limit_duration= # Default: 1 - to change how long it takes for a point to expire in seconds
# Limit the amount of packages a client can send over a websocket/namepipe/tcp/grpc connection
socket_rate_limit= # Default: true - to disable rate limits on socket messages
socket_rate_limit_points= # Default: 30 - to change the amount of points a hit consume
socket_rate_limit_points_disconnect= # Default: 100 - If client builds up this amount of points, disconnect the client
socket_rate_limit_duration= # Default: 1 - to change how long it takes for a point to expire in seconds
socket_error_rate_limit_points= # Default: 30
socket_error_rate_limit_duration= # Default: 1

# Default: true - Load all roles from the data into memory for fastest role recursive role look up
# this will consume a large amount of memory on big innstallations-
decorate_roles_fetching_all_roles= # 
expected_max_roles= # Default: 20000 - Default: 20000 - When loading all roles from the users collection, limit the amount of roles to this.
max_recursive_group_depth= # Default: 2 - When recursivley lookup up roles, how many roles, inside roles are allowed 
update_acl_based_on_groups= # Default: true - when a user is added to a role, that role is given read permission on the user, so all members of that role can see all members, can be disabled here
allow_merge_acl= # Default: false - merge acls by combining bits for all aces with same id ( for instance if one ace has read, and one has modify, combine into one )

# Default: false - If set to true, will chage default permissions on buildin roles, most significantly, members of the users role, cannot see the users role.
# This allow isolating users from other users and/or groupeing the in customers with dedicated roles.
multi_tenant= 
cleanup_on_delete_customer= # Default: false - Try and auto delete all associated data and user/roles when deleting a customer. Be ware !!!!
cleanup_on_delete_user= # Default: false - Try and auto delete all associated data and user/roles when deleting a customer. Be ware !!!! ( force hard delete )
api_bypass_perm_check= # Default: false - Completly disable **ALL** permission checks, allowing anyone to see and do everything
disable_db_config= # Default: false - Stop loading config from the database. Usefull when openflow will not start due to bad config in database
force_audit_ts= # Default: false - Force audit collection as a timeseries collection, if one exists will rename it 
force_dbusage_ts= # Default: false - Force dbusage collection as a timeseries collection, if one exists will rename it
migrate_audit_to_ts= # Default: true - If an old version of audit exists, migrate old data to the new and then delete it. This can take a LOOOONGGG time.

# OpenFlow version 1 settings, only relevant for old angularjs webinterface and OpenRPA clients
websocket_package_size= # Default: 25000
websocket_max_package_count= # Default: 1048576
websocket_message_callback_timeout= # Default: 3600
websocket_disconnect_out_of_sync= # Default: false - close connection for clients that send double packages, default false


amqp_reply_expiration= # Default: 60000 (1 min)
amqp_force_queue_prefix= # Default: false - to avoid users registering the same message queue names, force all messages queues to be prefixed with username, this disables load balancing of multiple nodereds !
amqp_force_exchange_prefix= # Default: false - to avoid users registering the same message exchange names, force all messages exchanges to be prefixed with username, this disables load balancing of multiple nodereds !
amqp_force_sender_has_read= # Default: true - If queue is a mongodb id, check user is member of the role or has read permission on the object it represents
amqp_force_sender_has_invoke= # Default: false - Force user to have invoke permission on the mq or user object in order to send to it
amqp_force_consumer_has_update= # Default: false - Force user has update permission on the mq or user object in order to consume the queue ( else needs read if amqp_force_sender_has_read is true
amqp_enabled_exchange= # Default: false - enabled the amp exchange node in nodered, and enabled Register Exchange command in API
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


shorttoken_expires_in= # Default: 5m
longtoken_expires_in= # Default: 365d
downloadtoken_expires_in= # Default: 15m
personalnoderedtoken_expires_in= # Default: 365d

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
api_ws_url= # API WebSocket URL  / force browser to use this url to access the api

agent_docker_entrypoints= # Docker entrypoints for Agent
agent_docker_use_project= # Default: false
agent_docker_certresolver= # Tell name of traefik certificate resolver to be used for generating certificates

namespace= # Kubernetes namespace used to manage for agents inside
nodered_allow_nodeselector= # Default: false

otel_measure_nodeid= # Default: false
otel_measure_queued_messages= # Default: false
otel_measure__mongodb_watch= # Default: false
otel_measure_onlineuser= # Default: false
enable_analytics= # Default: true
enable_detailed_analytic= # Default: false
otel_debug_log= # Default: false
otel_warn_log= # Default: false
otel_err_log= # Default: false
otel_trace_url= # Custom Open Telemetry exporter trace URL
otel_metric_url= # CUstom Open Telemetry exporter metric URL
otel_trace_interval= # Default: 5000
otel_metric_interval= # Default: 5000
otel_trace_pingclients= # Default: false - add trace for each ping clients in openflow
otel_trace_dashboardauth= # Default: false - add trace for dashboardauth events
otel_trace_include_query= # Default: false - include query in spans
otel_trace_connection_ips= # Default: false - track connection requests per ip address
otel_trace_mongodb_per_users= # Default: false - track all mongo actions per user
otel_trace_mongodb_query_per_users= # Default: false - track queries per user
otel_trace_mongodb_count_per_users= # Default: false - track counts per user
otel_trace_mongodb_aggregate_per_users= # Default: false - track aggregates per user
otel_trace_mongodb_insert_per_users= # Default: false - track inserts per user
otel_trace_mongodb_update_per_users= # Default: false - track updates per user
otel_trace_mongodb_delete_per_users= # Default: false - track deletes per user

grpc_keepalive_time_ms= # default: 20000 * 1000 - gRPC keepalive time in milliseconds
grpc_keepalive_timeout_ms= # default: 1000 - gRPC keepalive timeout in milliseconds
grpc_http2_min_ping_interval_without_data_ms= # default: 5000 - gRPC HTTP2 minimum ping interval without data in milliseconds
grpc_max_connection_idle_ms= # default: 71992547 - gRPC maximum connection idle time in milliseconds
grpc_max_connection_age_ms= # default: 71992547 - gRPC maximum connection age in milliseconds
grpc_max_connection_age_grace_ms= # default: 71992547 - gRPC maximum connection age grace in milliseconds
grpc_http2_max_pings_without_data= # default: 71992547 - gRPC HTTP2 maximum pings without data
grpc_keepalive_permit_without_calls= # default: 1 - gRPC keepalive permit without calls
grpc_max_receive_message_length= # default: 1024 * 1024 * 1024 - gRPC maximum receive message length
grpc_max_send_message_length= # default: 1024 * 1024 * 1024 - gRPC maximum send message length

validate_user_form= # User form validation configuration

```