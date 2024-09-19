    FROM node:lts-alpine

    WORKDIR /app

    COPY . /app/

    RUN npm i -p serve@latest

    RUN npx vite build

    ENTRYPOINT cd dist $$ serve -l tcp://0.0.0.0:3000

