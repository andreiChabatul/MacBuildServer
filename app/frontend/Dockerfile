FROM node:21.4.0-alpine3.18 AS builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend .

CMD [ "npm", "run", "dev" ]