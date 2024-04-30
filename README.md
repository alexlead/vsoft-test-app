# TEST APP

- NodeJs
- ExpressJs
- VueJs

## Run with Docker

### Compose All
- `docker-compose up --build` - run in main folder for generate and run all docker containers

#### URLs
- http://localhost:8000/
- http://localhost:8000/admin/

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
- simple-code-editor

 ### Install & Run
- `npm install`             - install npm modules
- `npm run dev`             - run admin app

### URL

- http://localhost:8081/admin

![Admin page screenshot](screenshot-admin.png)

## Client

- VueJs
- vue3-runtime-template

 ### Install & Run
- `npm install`             - install npm modules
- `npm run dev`             - run admin app

### URL

http://localhost:8082

![Client page screenshot](screenshot-client.png)
