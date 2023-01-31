From node:alpine
 
WORKDIR /usr/app
COPY ./ /usr/app

RUN apk update && apk add bash
RUN npm install

ARG NODE_ENV
ENV NODE_ENV="$NODE_ENV"

CMD ["npm", "start"]