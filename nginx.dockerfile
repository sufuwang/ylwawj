# syntax=docker/dockerfile:1
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist /etc/nginx/dist

RUN ["/bin/bash", "-c", "echo hello"]