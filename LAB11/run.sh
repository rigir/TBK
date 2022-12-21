docker compose -f services/fluentd/docker-compose.yml up -d
docker compose -f services/numbers/docker-compose.yml up -d
docker container start numbers-web