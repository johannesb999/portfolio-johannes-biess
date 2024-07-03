# Build-Stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production-Stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/.nuxt /usr/share/nginx/html/.nuxt
COPY --from=build-stage /app/static /usr/share/nginx/html/static
COPY --from=build-stage /app/nuxt.config.js /usr/share/nginx/html/nuxt.config.js
COPY --from=build-stage /app/package.json /usr/share/nginx/html/package.json
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
