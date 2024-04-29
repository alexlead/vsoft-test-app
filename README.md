# TEST APP

- NodeJs
- ExpressJs
- VueJs

## Server

- NodeJs
- ExpressJs

### Install & Run
- `npm install`             - install npm modules
- `npm run dev`             - run server

### API
- `/api/get-all-posts`      - "GET" get all posts
- `/api/get-post/:id`       - "GET" get post by id
- `/api/vue-sfc`            - "GET" get vue SFC template and styles
- `/api/vue-sfc`            - "POST" save vue SFC template and styles ( { template: "" , style: "" } )

## Admin

- VueJs
- vue3-runtime-template

 ### Install & Run
- `npm install`             - install npm modules
- `npm run dev`             - run admin app

![Admin page screenshot](screenshot-admin.png)

## Client

- VueJs
- vue3-runtime-template

 ### Install & Run
- `npm install`             - install npm modules
- `npm run dev`             - run admin app

![Client page screenshot](screenshot-client.png)


## Docker compose

### Compose All
- `docker-compose up --build -d` - run in main folder for generate and run all docker containers

### Compose separately

#### Backend
- `docker build -t [docker_hub_username]/[docker_hub_image] .` - run in folder server

#### Frontend
- `docker build -t [docker_hub_username]/[docker_hub_image] .` - run in folders admin and client
