FROM node:20
WORKDIR /react-foundation

COPY /public /react-foundation/public
COPY /src /react-foundation/src
COPY /tsconfig.json /react-foundation
COPY package.json /react-foundation

RUN npm install

CMD ["npm", "start"]
