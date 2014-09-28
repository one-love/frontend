One love web client
===================

This is AngularJS based web client for [One Love](https://one-love.github.io) project.

You will most likely need [One Love's API server](https://github.com/one-love/ansible-one-love).
Follow the instructions from link in order to get it running.

### Requirements and development setup

- Node.js
    - GNU Linux and Mac OS X users should get it from their respective package managers.
    For Mac OS X, [homebrew](brew.sh) is recommended.
    - Windows uses can download installer from [Node.js download page](http://nodejs.org/download/).
    - Once you have node.js installed, install gulp globally with `npm install -g gulp`.
- Ruby and Sass
    - Ruby implementation of Sass is used, as node-sass isn't mature nor stable enough.
    - Mac OS X and most GNU Linux systems have Ruby installed out of the box.
    - For systems that don't, installation instructions are available at 
    [Ruby website](https://www.ruby-lang.org/en/installation/).
    - Once you have Ruby on your system, install Sass with `gem install sass`
    - Some users will have to use sudo, depending on their operating system
- Bower
    - Bower is required for fetching some front end dependencies. Install it 
    with `npm install -g bower`
    
### First run

Clone this repo to your hard drive, `cd` into repo directory and hit `npm start`. 
If you have completed all steps from __Requirements__ section, your primary browser
should open up index page at `https://localhost:8000`. At this point, browser will
warn you about self-signed certificate. This is normal, one-time step. Just confirm 
this certificate as a security exception and you're ready to roll.

### Contributing to One Love

We will happily accept pull requests that conform to our [Contributing guidelines](CONTRIBUTING.md)