FROM node:18-alpine
WORKDIR /app
COPY ./server .
RUN npm install --production || true
EXPOSE 3000
CMD ["node","index.js"]
