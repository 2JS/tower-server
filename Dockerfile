FROM --platform=linux/arm64 node:12-alpine

RUN apk add python3 make g++
RUN apk add linux-headers --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main

WORKDIR /srv/tower

COPY . /srv/tower

RUN npm install

EXPOSE 3010

CMD ["npm", "start"]