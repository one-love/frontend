#!/bin/bash

export PROJECT_ROOT=$(readlink -f "$(dirname $0)/..")
cp "${PROJECT_ROOT}/src/backend_url.dev.js" "${PROJECT_ROOT}/src/backend_url.js"
cd ${PROJECT_ROOT}
npm install
npm run storybook
