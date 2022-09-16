docker rmi nginx-docker
docker build -t nginx-docker -f ./nginx.dockerfile .
docker run -p 8080:80 nginx-docker