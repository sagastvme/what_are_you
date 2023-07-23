FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

# Add this line to use nodemon from the local node_modules
RUN npm install nodemon
RUN npm install -g npm@9.8.1
COPY . .

CMD ["npm", "run", "start"]
