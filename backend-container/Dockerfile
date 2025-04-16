FROM eurodynrnd/sofia-backend:latest

EXPOSE 15502

ARG DB_IP
ARG DB_PORT
ARG DB_NAME
ARG DB_APP_NAME
ARG DB_USERNAME
ARG DB_PASSWORD

ARG REDIS_HOST
ARG REDIS_PORT
ARG REDIS_PASSWORD

ENV DB_IP_ENV=${DB_IP}
ENV DB_PORT_ENV=${DB_PORT}
ENV DB_NAME_ENV=${DB_NAME}
ENV DB_APP_NAME_ENV=${DB_APP_NAME}
ENV DB_USERNAME_ENV=${DB_USERNAME}
ENV DB_PASSWORD_ENV=${DB_PASSWORD}

ENV REDIS_HOST_ENV=${REDIS_HOST}
ENV REDIS_PORT_ENV=${REDIS_PORT}
ENV REDIS_PASSWORD_ENV=${REDIS_PASSWORD}

RUN touch ./entrypoint.sh
RUN echo "java -jar ./app.jar --spring.profiles.active=prod spring.liquibase.enabled=true --user.db.ip=${DB_IP_ENV} --user.db.port=${DB_PORT_ENV} --user.db.name=${DB_APP_NAME_ENV} --user.db.username=${DB_USERNAME_ENV} --user.db.password=${DB_PASSWORD_ENV} --author.db.ip=${DB_IP_ENV} --author.db.port=${DB_PORT_ENV} --author.db.name=${DB_NAME_ENV} --author.db.username=${DB_USERNAME_ENV} --author.db.password=${DB_PASSWORD_ENV} --spring.redis.host=${REDIS_HOST_ENV} --spring.redis.port=${REDIS_PORT_ENV} --spring.redis.password=${REDIS_PASSWORD_ENV}" > ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
CMD ./entrypoint.sh
