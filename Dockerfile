# STAGE: Development
FROM node:18-alpine as dev
WORKDIR /app
COPY . /app/
# Install dependencies
RUN yarn

# STAGE: Builder
FROM node:18-alpine as builder
WORKDIR /app
COPY --from=dev /app /app/
RUN yarn build

# STAGE: Prod dependency builder
FROM node:18-alpine AS prod-dependencies
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod

# STAGE: Prod Deply ready image
FROM node:18-alpine AS prod
EXPOSE 4000
WORKDIR /app
COPY public /app/public
COPY package.json /app/
COPY --from=builder /app/dist /app/dist/
COPY --from=prod-dependencies /app/node_modules /app/node_modules
CMD ["node", "dist/index.js"]
