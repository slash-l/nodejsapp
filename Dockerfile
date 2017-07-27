# FROM node:6.11.0
FROM node:7.7.4

ADD $PWD /app

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm install webpack -g

# RUN npm install nodemon -g

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start-prod