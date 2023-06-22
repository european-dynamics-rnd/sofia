FROM eurodynrnd/sofia-frontend-author:latest

ARG BACKEND_URL

RUN touch /usr/share/nginx/html/assets/config.js
RUN echo "window['backend_url'] = '"${BACKEND_URL}"';" >> /usr/share/nginx/html/assets/config.js
