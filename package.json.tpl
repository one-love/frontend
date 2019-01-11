{
  "name": "one-love",
  "version": "0.0.2",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^3.7.1",
    "@material-ui/icons": "^3.0.1",
    "axios": "^0.18.0",
    "mobx": "^5.8.0",
    "mobx-react": "^5.4.3",
    "moment": "^2.23.0",
    "prop-types": "^15.6.2",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-router-dom": "^4.3.1"
  },
  "devDependencies": {
    "babel-eslint": "^10.0.1",
    "enzyme": "^3.8.0",
    "enzyme-adapter-react-16": "^1.7.1",
    "eslint": "^5.11.1",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jsx-a11y": "^6.1.2",
    "eslint-plugin-react": "^7.11.1",
    "react-app-rewire-mobx": "^1.0.9",
    "react-app-rewired": "^1.6.2",
    "react-scripts": "^1.1.5"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "pretest": "eslint src",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  },
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.js",
      "!src/**/service.js",
      "!src/App.js",
      "!src/index.js",
      "!src/registerServiceWorker.js"
    ]
  },
  "proxy": {
    "/api": {
      "target": "HTTP_PROXY"
    },
    "/media": {
      "target": "HTTP_PROXY"
    },
    "/socket.io": {
      "target": "HTTP_PROXY",
      "ws": "true"
    }
  }
}
