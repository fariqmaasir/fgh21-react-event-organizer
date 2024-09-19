    FROM node:lts-alpine

    WORKDIR /app

    COPY . /app/

    RUN npm i -g serve@latest

    RUN npm i

    RUN npx vite build

    ENTRYPOINT cd dist && serve -l tcp://0.0.0.0:3000

