FROM node:21.4.0-alpine3.18 AS builder

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]