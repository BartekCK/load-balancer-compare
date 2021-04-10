FROM node:14.16.0-alpine
WORKDIR /app
COPY server.js .
COPY package.json .
RUN npm install --only=production
CMD ["npm", "start"]
