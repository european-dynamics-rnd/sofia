FROM eurodynrnd/sofia-frontend:latest

ARG BACKEND_URL

RUN touch /usr/share/nginx/html/assets/config.js
RUN echo "window['backend_url'] = '"${BACKEND_URL}"';window['backend_on_proxy_path'] = '';" >> /usr/share/nginx/html/assets/config.js
