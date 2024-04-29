FROM oven/bun as build

WORKDIR /app

COPY package*.json ./
COPY .nginx/ ./
RUN bun install
COPY . .
RUN bun build-only

FROM nginx

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
COPY --from=build /app/.nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]