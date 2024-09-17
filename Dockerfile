    FROM node:lts-alpine

    WORKDIR /app

    COPY . /app/

    RUN npm i 
    RUN npm build

