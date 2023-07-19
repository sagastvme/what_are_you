FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

# Add this line to use nodemon from the local node_modules
RUN npm install nodemon

COPY . .

CMD ["npm", "run", "dev"]
