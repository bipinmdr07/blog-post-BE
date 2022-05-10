## Blog Post

API service for Blog post;

### Prerequisite

1. node
2. docker
3. docker-compose

### Setting up Environments

1. Install all the application dependencies by running.

```sh
yarn
```

2. To run the dynamodb from docker-compose file run.

``` sh
docker-compose up dynamodb
```


### Creating and running migrations
1. To create the migration template for table with name `table_name` run.

``` sh
yarn migration:create table_name
```

2. To run the migration for table with name `table_name` run.

``` sh
yarn migration:run table_name
```

3. To run all the migration at once run.

``` sh
yarn migration:runAll
```

### Running in Development Environment
1. Normal method

``` sh
yarn start:dev
```

2. Docker Method

``` sh
docker-compose up blog-post
```

### Building the application

``` sh
yarn build
```
