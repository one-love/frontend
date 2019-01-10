#!/bin/sh


export BIN_DIR=`dirname $0`
export PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`
NPM=`which npm 2>/dev/null`
YARN=`which yarn 2>/dev/null`


if [ ! -z "${YARN}" ]; then
  export PACKAGE_MANAGER="${YARN}"
else
  export PACKAGE_MANAGER="${NPM}"
fi


setup() {
  if [ -e "${PROJECT_ROOT}/project.conf" ]; then
    . "${PROJECT_ROOT}/project.conf"
  else
    echo -n "Please create ${PROJECT_ROOT}/project.conf" >&2
    echo " containing HTTP_PROXY" >&2
    echo "Example: HTTP_PROXY=http://localhost:5000" >&2
    read novar || sleep 15
    exit 1
  fi

  if [ -z "${PACKAGE_MANAGER}" ]; then
    echo "Install npm or yarn" >&2
    exit 1
  fi

  echo "${PACKAGE_MANAGER}"

  cd ${PROJECT_ROOT}
  sed -e "s;HTTP_PROXY;${HTTP_PROXY};g" package.json.tpl >package.json
  ${PACKAGE_MANAGER} install
}
