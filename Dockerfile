FROM niradler/statikly

WORKDIR /usr/src/app

USER root

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .

EXPOSE 3001

ENTRYPOINT []

CMD ["npm", "run", "start"]
