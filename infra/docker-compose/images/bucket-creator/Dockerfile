FROM node:16-buster

RUN mkdir -p /tmp/bucket-creator
WORKDIR /tmp/bucket-creator
COPY files .
RUN npm ci

CMD ["node", "index.js"]
