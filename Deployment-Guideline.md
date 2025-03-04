## Requirements

```
Docker-compose version 2.30.3
```

## Setup Docker

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce -y
```

### Post-installation actions

```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
```

## Deploy (Local)

### Simple way

- If you are using linux base OS (Ubuntu, Debian...), you can try: `./devops/deploy-local.sh`

### Manual

- Make sure you are in the root folder (Project)
- Copy the environment file from .env.local (if it does not exist): `cp .env.local .env`
- Update the .env file with your values.: `.env`
- Change the working directory to the docker folder: `cd docker`
- Load the environment variables into the current shell session: `set -a && source ../.env && set +a`
- Run the command to start the frontend service deployment: `docker compose up -d`
  Note: `docker compose`, not `docker-compose`

## Rebuild

### Simple way

- If you are using linux base OS (Ubuntu, Debian...), you can try: `./devops/deploy-local.sh`

### Manual

- Change the working directory to the docker folder: `cd docker`
- Load the environment variables into the current shell session: `set -a && source ../.env && set +a`
- Run the command to start the frontend service deployment: `docker compose up -d`
  Note: `docker compose`, not `docker-compose`
