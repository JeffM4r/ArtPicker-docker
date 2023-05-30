FROM node:16

WORKDIR /ArtPicker-frontend

COPY . .

RUN npm install
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app