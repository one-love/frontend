#!/bin/bash

export PROJECT_ROOT=$(readlink -f "$(dirname $0)/..")
cd ${PROJECT_ROOT}
npm start
