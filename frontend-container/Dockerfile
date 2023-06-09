FROM nginx:1.23.3-alpine

ARG BACKEND_URL

COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html

RUN touch /usr/share/nginx/html/assets/config.js
RUN echo "window['backend_url'] = '"${BACKEND_URL}"';window['backend_on_proxy_path'] = '';" >> /usr/share/nginx/html/assets/config.js
