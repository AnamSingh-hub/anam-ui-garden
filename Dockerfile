
FROM node:22-alpine AS build

WORKDIR /anam_ui_garden_build

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /anam_ui_garden_build/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
