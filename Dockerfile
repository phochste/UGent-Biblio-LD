FROM node:20-alpine3.20

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENTRYPOINT [ "/app/bin/biblio-ld.js" ]

CMD [ "help" ]