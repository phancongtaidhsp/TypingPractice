FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
CMD ["echo","Du An Typing Practice cua Marines Team"]
CMD ["npm","start"]