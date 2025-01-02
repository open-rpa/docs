---
layout: default
title: Build from source
parent: What Is OpenCore
nav_order: 12
---



#### Developer setup from 1.5.10 and up
Install [VSCode](https://code.visualstudio.com/download), [NodeJS 18](https://nodejs.org/en/download/)

And then either install [mongoDB](https://www.mongodb.com/download-center/community) and [RabbitMQ](https://www.rabbitmq.com/download.html) or create a docker compose file with the following content
```yaml
services:
  rabbitmq:
    image: "rabbitmq"
    environment:
      - RABBITMQ_ERLANG_COOKIE=your_cookie_string_hereyour_cookie_string_here
    restart: unless-stopped
    networks:
      - traefik
    # network_mode: "host"
    ports:
      - "5672:5672"
      - "15672:15672"
  redis:
    image: redis
    command: >
      --requirepass pass!word2
    restart: unless-stopped
    ports:
      - "6379:6379"
  mongodb: # docker volume rm openflow_mongodb_data core_mongodb_data
    image: "mongo"
    restart: unless-stopped
    networks:
      - traefik
    command: "--bind_ip_all --replSet rs0"
    environment:
      - MONGO_REPLICA_SET_NAME=rs0
    volumes:
      - mongodb_data:/data/db
    # network_mode: "host"
    ports:
      - "27017:27017"
  mongosetup:
    image: mongo
    depends_on:
      - mongodb
    restart: "no"
    networks:
      - traefik
    command: >
      mongosh --host mongodb:27017 --eval 
      '
      db = (new Mongo("mongodb:27017")).getDB("openflow");
      config = {
      "_id" : "rs0",
      "members" : [
        {
          "_id" : 0,
          "host" : "mongodb:27017"
        }
      ]
      };
      rs.initiate(config);
      '
volumes:
  mongodb_data:
    driver: local
networks:
  traefik:
    name: traefik
```
and run docker compose up

Clone this repo into a folder, in a shell type
`git clone https://github.com/open-rpa/openflow.git`

go to the folder with openflow
`cd openflow`

install packages for openflow api/web
`npm i`

Now open in VS code
`code .`
at the top level create a folder called config and inside the config folder create a file called .env ( notice it starting with a dot)
and add this content to the file

```bash
auto_create_users=true
aes_secret=7TXsxf7cn9EkUqm5h4MEWGjzkxkNCk2K
port=80
```
Next you need to allow powershell scripts to run, i don't know what is the recommended setting, i normally just go with bypass
`Set-ExecutionPolicy Bypass -Force`


Now you can run this by going to run ( Ctrl+Shit+D) and selecting Core in the dropdown box and press play button.
If you then open browser and goes http://localhost you will get an "error" message telling you how to install a web frontend
```
/public is missing.
  To use angularjs version (current) clone and build /open-rpa/openflow-web and place it in /public folder
  To use new svelte version (next) clone and build /openiap/core-web and place it in /public folder
  To use a custom version using vue3, clone and build /openiap/vue3-web-template and place it in /public folder
```
Go clone one of those, build it, and then place the dist folder inside /public in then opencore root folder.

#### Developer setup before 1.5.10

Install [VSCode](https://code.visualstudio.com/download), [NodeJS 16](https://nodejs.org/en/download/), [mongoDB](https://www.mongodb.com/download-center/community) and [RabbitMQ](https://www.rabbitmq.com/download.html)

Install gulp and typescript globally
`npm i gulp typescript browserify tsify -g`

Clone this repo into a folder, in a shell type
`git clone https://github.com/open-rpa/openflow.git`

go to the folder with OpenCore
`cd openflow`

install packages for OpenCore api/web
`npm i`

Now open in VS code
`code .`
at the top level create a folder called config and inside the config folder create a file called .env ( notice it starting with a dot)
and add this content to the file

```bash
auto_create_users=true
aes_secret=7TXsxf7cn9EkUqm5h4MEWGjzkxkNCk2K
port=80
```
Next you need to allow powershell scripts to run, i don't know what is the recommended setting, i normally just go with bypass
`Set-ExecutionPolicy Bypass -Force`

Now you can run this by going to run ( Ctrl+Shit+D) and selecting OpenCore in the dropdown box and press play button.
This will serve an empty webpage, so we need to build the stylesheets and copy the compiled files to the dist folder, so go to the Terminal tab and add a new shell, then type
`npm run sass`

Lastly we can bundle and minify the asserts to the dist folder, by typing
`gulp watch`

You can now access OpenCore web on [http://localhost.openiap.io](http://localhost.openiap.io) 

#### Building docker image
From version 1.5 the docker images is now using build images, so simply run
```bash
npm run compose
```
to compile an image with :version and :edge tag
This will also try to publish to docker hub, if you don't have an account, just ignore the error
To compile with :latest and :version tag use
```bash
npm run latest`
```

### Support

For further help or education reach out on the forum, or contact [OpenIAP](https://openiap.io/) for a consulting

