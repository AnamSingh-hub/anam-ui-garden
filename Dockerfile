FROM node:22-alpine AS build

WORKDIR /dhillon_anam_ui_garden_build_checks

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run format:check
RUN npm run lint
RUN npm run test:ci
RUN npm run build

FROM nginx:alpine

COPY --from=build /dhillon_anam_ui_garden_build_checks/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
