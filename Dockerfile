FROM node:18-alpine

WORKDIR /app

COPY package* ./
RUN npm i npm@latest

COPY . .

CMD [ "npm", "run", "dev" ]