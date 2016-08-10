#!/bin/bash

export PROJECT_ROOT=$(readlink -f "$(dirname $0)/..")
export NODE_ENV="dev"
cd ${PROJECT_ROOT}

if [ -z $(which git) ]; then
    apt-get update
    apt-get install -y git-core
fi
npm install
npm start
