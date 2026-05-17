# Stage 1: build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production


# Stage 2: nginx serve
FROM nginx:alpine

COPY --from=build /app/dist/marafis.com /usr/share/nginx/html

# SPA routing fix
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
