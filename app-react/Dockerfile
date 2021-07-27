# build stage
FROM node:14 as build-stage
WORKDIR /app
COPY . .
RUN npm install

ARG REACT_APP_BACKEND='http://localhost:3000'

RUN REACT_APP_BACKEND=$REACT_APP_BACKEND npm run build

FROM nginx:1.17-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]