FROM node:20.19.4-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
