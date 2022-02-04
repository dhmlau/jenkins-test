FROM node:16-slim
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8081
CMD npm start