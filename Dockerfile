FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./games/two_ships /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]