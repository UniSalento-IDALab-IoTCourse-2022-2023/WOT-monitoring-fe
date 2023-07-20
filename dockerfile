FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
<<<<<<< HEAD
COPY --from=node /app/dist/fe-company /usr/share/nginx/html
=======
COPY --from=node /app/dist/fe-company /usr/share/nginx/html
>>>>>>> 2758146 (order and paginator fix)
