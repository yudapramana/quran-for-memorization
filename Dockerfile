FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Create Environment
ENV NODE_ENV=development
ENV PORT=8080
ENV HOST='0.0.0.0'
ENV DATABASE_HOST="mongodb+srv://yudapramana:palisotabracteosa772@cluster0.ui7dx.gcp.mongodb.net/quran_memorizations?retryWrites=true&w=majority"
ENV DATABASE_NAME="quran_memorizations"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]