# DocHome

you can easily manage and monitor your Docker containers from a graphical user interface.

To get started, simply run the following docker compose

```yaml
version: "3.4"

services:
  doc-home:
    container_name: doc-home
    image: niradler/doc-home
    restart: always
    environment:
      NODE_ENV: production
      STATIKLY_PASSWORD: ${STATIKLY_PASSWORD}
      STATIKLY_USERNAME: ${STATIKLY_USERNAME}
    ports:
      - 3111:3001
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
```

Available environment variables:

```sh
# .env
STATIKLY_PASSWORD= # required, to make this optional remove basicAuth from statikly.json
STATIKLY_USERNAME= # required, to make this optional remove basicAuth from statikly.json
SSH_HOST= # optional
SSH_KEY_PATH= # optional
SSH_USERNAME= # optional
```

_Add apps to the home page by adding docker labels_

```yml
version: "3.4"

services:
  mongo_container:
    container_name: mongo_service
    image: mongo
    labels:
      - homepage.show=true
      - homepage.description=proxy manager
      - homepage.title=nginx-proxy-manager
      - homepage.domain=https://proxy.niradler.com
    ports:
      - 3201:27017
```

![homepage](https://github.com/niradler/doc-home/blob/main/assetes/homepage.png?raw=true)

![containers](https://github.com/niradler/doc-home/blob/main/assetes/containers.png?raw=true)
