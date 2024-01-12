---
layout: default
title: Build from source
parent: What Is OpenIAP Flow
nav_order: 12
---

#### Developer setup

Install [VSCode](https://code.visualstudio.com/download), [NodeJS 16](https://nodejs.org/en/download/), [mongoDB](https://www.mongodb.com/download-center/community) and [RabbitMQ](https://www.rabbitmq.com/download.html)

Install gulp and typescript globally
`npm i gulp typescript browserify tsify -g`

Clone this repo into a folder, in a shell type
`git clone https://github.com/open-rpa/openflow.git`

go to the folder with openflow
`cd openflow`

install packages for openflow api/web
`npm i`

Now open in VS code
`code .`
at the top level create a folder called config and inside create a file called .env ( notice it starting with a dot)
and add this content to the file

```bash
auto_create_users=true
aes_secret=7TXsxf7cn9EkUqm5h4MEWGjzkxkNCk2K
port=80
```
Next you need to allow powershell scripts to run, i don't know what is the recommended setting, i normally just go with bypass
`Set-ExecutionPolicy Bypass -Force`

Now you can run this by going to run ( Ctrl+Shit+D) and selecting OpenFlow in the dropdown box and press play button.
This will serve an empty webpage, so we need to build the stylesheets and copy the compiled files to the dist folder, so go to the Terminal tab and add a new shell, then type
`npm run sass`

Lastly we can bundle and minify the asserts to the dist folder, by typing
`gulp watch`

You can now access openflow web on [http://localhost.openiap.io](http://localhost.openiap.io) 

#### Building docker image
From version 1.5 the docker images is now using build images, so simply run
`npm run compose`
to compile an image with :version and :edge tag
This will also try to publish to docker hub, if you don't have an account, just ignore the error
To compile with :latest and :version tag use
`npm run latest`

### Support

For further help or education reach out on the forum, or contact [OpenIAP](https://openiap.io/) for a consulting

