FROM node:6-slim
MAINTAINER Tilda Center <office@tilda.center>
WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app/
RUN apt-get update -y && \
    apt-get install -y git-core && \
    npm install
COPY . /usr/src/app
RUN apt-get clean -y
CMD ["bin/start.sh"]
EXPOSE 8080
