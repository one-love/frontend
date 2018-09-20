#!/bin/sh


BIN_DIR=`dirname $0`
. "${BIN_DIR}/common.sh"
if [ ! -e "${PROJECT_ROOT}/project.conf" ];  then
  echo 'HTTP_PROXY=http://localhost:5000' >"${PROJECT_ROOT}/project.conf"
fi
setup

"${PACKAGE_MANAGER}" test --coverage --color
