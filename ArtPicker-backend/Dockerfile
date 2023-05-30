FROM node:16

WORKDIR /ArtPicker-backend

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

RUN npx tsc -p .

EXPOSE 5000

CMD ["npm", "run", "dev:migrate"]