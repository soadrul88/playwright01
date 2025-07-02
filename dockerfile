FROM mcr.microsoft.com/playwright:v1.53.0-noble

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npx", "playwright", "test"]