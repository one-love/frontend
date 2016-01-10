#!/bin/bash

export PROJECT_ROOT=$(readlink -f "$(dirname $0)/..")
cd "${PROJECT_ROOT}"
while true; do
    npm run develop
    sleep 3
done
