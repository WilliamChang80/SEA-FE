FROM node:13.12.0-alpine as build

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]