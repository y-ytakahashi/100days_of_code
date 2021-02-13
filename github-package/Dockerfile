#stage 2 run react app
FROM nginx:1.19.6-alpine
LABEL description="Front Web Server on React App"
COPY ./sample /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]


