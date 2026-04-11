FROM node:20

WORKDIR /app

# Copy package.json
COPY package.json ./

# Install using the legacy flag to prevent the 'eresolve' crash
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]