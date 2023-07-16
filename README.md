# ethanoz
Ethan Ozelius Portfolio application eventually will be available on ethanoz.com.  This is a Vue Front End app that will serve as a central interface for accessing all my portfolio, projects, demos and playground environments.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn run build
```

### Run your unit tests
```
yarn run test:unit
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Lints and fixes files
```
yarn run lint
```

## Portfolio
### MineSweeper
Vue app available at https://github.com/eozelius/vue-minesweeper

### 5 day weather forcast
React app available at https://github.com/eozelius/five-day-forecast

## CI/CD
- This is app is deployed to an EC2 instance, using docker and nginx.

### Steps to deploy
1. Log into EC2 instance.
2. cd into ethanoz dir.
3. pull latest for all projects
  - ethanoz
  - vue-minesweeper
  - five-day-forecast
4. create new docker image
```bash
docker build -t ethanoz_image:latest .
```
5. stop the currently running docker container
```bash
docker stop ethanoz
```

6. start a new container using the latest image
```bash
docker run -itd -p 443:443 -p 80:80 --rm --name ethanoz_container ethanoz_frontend_nginx
```


## Todo
### DevOps
  - Create Jenkins pipeline for automatic dockerized deployments
  - Automate separate docker containers for frontend, nginx
  - setup similar configs for demo projects.  SPA demos can be deployed with S3.  Ideally on sub-domains.
