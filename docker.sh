docker rmi nginx-docker
docker build -t sufuwang/ylwawj-fe -f ./nginx.dockerfile .
# docker run -p 8080:80 nginx-docker