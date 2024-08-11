FROM node:22.6

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY src src

EXPOSE 3000

CMD ["pnpm", "run", "start:dev"]
