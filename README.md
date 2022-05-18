## Blog Post

API service for Blog post;

### Prerequisite

1. node
2. docker
3. docker-compose
4. dynamodb-local (We have docker-compose to rescue)

### Table Structure

#### users

| userId (PK) | createdAt | udpatedAt | roles | name | email (GSI) | username | avatarUrl |
| :---------- | :-------- | :-------- | :---- | :--- | :---------- | :------- | :-------- |
|             |           |           |       |      |             |          |           |

#### blogs

| blogId (PK) | createdAt(GSI) | udpatedAt(GSI) | userId(GSI) | name | email (GSI) |
| :---------- | :------------- | :------------- | :---------- | :--- | :---------- |
|             |                |                |             |      |             |

### Postman collection

[Join Postman collection](https://app.getpostman.com/join-team?invite_code=b1232f0b36445d6215d3e7b43e27a397&target_code=b251e64cb94f4f5630fe62375cd4ca8c)

### Setting up Environments

1. Install all the application dependencies by running.

```sh
yarn
```

2. To run the dynamodb from docker-compose file run.

```sh
docker-compose up dynamodb
```

3. To run the redis from docker-compose file run.

```sh
docker-compose up redis
```

### Creating and running migrations

1. To create the migration template for table with name `table_name` run.

```sh
yarn migration:create table_name
```

2. To run the migration for table with name `table_name` run.

```sh
yarn migration:run table_name
```

3. To run all the migration at once run.

```sh
yarn migration:runAll
```

### Running in Development Environment

1. Normal method

```sh
yarn start:dev
```

2. Docker Method

```sh
docker-compose up blog-post
```

### Building the application

```sh
yarn build
```
