docker swarm init
docker network create --driver overlay 8_01
docker service create -d --replicas 3 --name numbers-api --network 8_01 diamol/ch08-numbers-api:v3
docker service create -d --replicas 3 --name numbers-web --network 8_01 -p 8080:80 diamol/ch08-numbers-web:v3
