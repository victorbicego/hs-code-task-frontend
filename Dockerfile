FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/dist/code-task-frontend/ /usr/share/nginx/html/
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]