ARG NODE_VERSION=""
FROM node:${NODE_VERSION:+${NODE_VERSION}-}slim
LABEL maintainer="Cristian Pini"
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json ./
RUN npm ci \
 && npm cache clean --force \
 && mv /app/node_modules /node_modules
COPY . .
ENV PORT 80
EXPOSE 80
CMD [ "npm", "run", "start.dev" ]