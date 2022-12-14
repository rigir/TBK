FROM node:alpine AS build

WORKDIR /app
COPY package.json .
RUN npm install
COPY ./src ./src

FROM node:alpine
WORKDIR /app
COPY --from=build ./app . 
CMD node ./src/index.js 