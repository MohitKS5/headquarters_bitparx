# :zap: Ares [![Build Status](https://circleci.com/gh/yashsriv/zeus.svg?circle-token=b9d6a3351f7c5f3658bd569eded99b9836d746fa)](https://circleci.com/gh/yashsriv/zeus) [![Built with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://spacemacs.org)

Ares - son of zeus - The awesome backend behind Antaragni'18

`MongoDB` + `ExpressJS` + `AngularJS` + `NodeJS (in TypeScript!!)` - Full `MEAN` Stack

CircleCI notifications sent to irc via `fooku` - our in-house hubot.
Github notifications also sent to irc via ``fooku`.
Join `##antaragni` on irc to know more.

Binary Files:
* `bin/www` - runs generate server in `server.js`
* `bin/www-multi` - runs multi-threaded servers listening on the same port to optimise
  performance and balance load

Git pre-commit hook to run `lint` before commiting

## Client Side

Uses `bootstrap v4 alpha` as part of `bootstrap-material-design` development version for
bootstrap 4. Plans to use `ng-bootstrap`(Also in alpha).

Webpack bundles all angular files into 1.

Angular2 code written in TypeScript. All html and css written in separate files but
inlined during compilation. So the `main.bundle.js` file contains everything.

### TODO:
If templates start becoming bigger and bigger, remove inlining of template html and css
and use absolute urls instead.

## Node Modules
These are all the node modules used:
* `yarn` package manager - a better package manager as compared to `npm`:
  * Install using `[sudo] npm install -g yarn`
  * The remaining packages below will be installed using `yarn install`
* REST Server using : [`express`](https://expressjs.com)
* `express-history-api-fallback` for serving angular2 app with routing effectively.
* Promise Library used is [`q`](https://npmjs.org/package/q)
* `mongoose` used for interacting with mongodb
* `connect-mongo` for maintaining session in mongodb
* `express-session` for sessions in passport
* `passport` - for authentication
* `passport-local` - passport localauthentication strategy
* `bcrypt-nodejs` for password hashing
* `express` logging using `morgan`
* `body-parser` used for handling post request bodies
* `cookie-parser` required for setting cookies and auth in general
* Logging using: [`winston`](https://blog.risingstack.com/node-js-logging-tutorial/)
* `webpack` used for bundling. Additional dependencies of webpack:
  * `awesome-typescript-loader` - Typescript compiilation using webpack
  * `assets-webpack-plugin` - Webpack Plugin for assets
  * `raw-loader` - Loading files as raw data
  * `string-replace-loader` - Load strings while replacing certain patterns
  * `ts-node` - Use typescript definition file
  * `webpack-dev-server` - Load webpack bundled files efficiently
* Task Running Framework: [`gulp`](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md):
  * `nodemon` and `gulp-nodemon`(for dev server)
  * `forever` (for production server)
  * `del` for cleaning files
  * `cross-spawn` for spawning processes
  * `gulp-mocha` for running `mocha` unit tests
  * `gulp-tslint` for linting typescript files
  * `gulp-jshint` for linting javascript files
  * `gulp-typescript` for compiling all typescript files
  * `git-guppy` and `guppy-pre-commit` for pre-commit hooks through `gulp`
  * `gulp-filter` to filter files through a stream
  * `gulp-csslint` - for css linting
  * `gulp-htmllint` - for html linting
  * `gulp-util` - general gulp util - used for logging currently
* Unit Testing: [`mocha`](https://mochajs.org/) with [`chai`](http://chaijs.com/):
  * [`mockgoose`]("https://npmjs.org/package/mockgoose") for mock mongoose behaviour in unit tests
  * `chai-http` for making http requests for testing
  * `mocha-circleci-reporter` for reporting in a format acceptable to circle ci
  * `mocha-typescript` - Typescript decorators for using mocha in a more typescriptish way
* For angular js:
  * Base dependencies:
    * `core-js`
    * `reflect-metadata`
    * `rxjs`
    * `zone.js`
    * `ts-helpers`
  * Angular modules:
    * `@angular/core`
    * `@angular/common`
    * `@angular/compiler`
    * `@angular/forms`
    * `@angular/http`
    * `@angular/router`
    * `@angular/platform-browser`
    * `@angular/platform-browser-dynamic`
    * `@angularclass/conventions-loader`
    * `@angularclass/hmr`
    * `@angularclass/hmr-loader`
    * `@angularclass/resolve-angular-routes`
  * CSS and javascript:
    * `bootstrap@4.0.0-alpha.5`
    * `@ng-bootstrap/ng-bootstrap`
    * `bootstrap-material-design`
    * `jquery`


Mostly written with help taken from [this](http://brianflove.com/2016/11/08/typescript-2-express-node/)
and [this](http://brianflove.com/2016/11/11/typescript-2-express-mongoose-mocha-chai/)

## Gulp Integration

Requires gulp v4. Installation instructions for your machine:
* npm rm gulp -g
* npm rm gulp-cli -g
* npm cache clean
* npm install gulpjs/gulp-cli -g

### Gulp Tasks Available

* `gulp config` creates config file if not already present
* `gulp lint` lints all files
* `gulp client` lints client ts, copies over all client files and compiles
* `gulp server` - first lints server ts, and then compiles all typescript files
* `gulp build` - calls `lint`, `client` and `server`
* `gulp watch` - watches files for changes
* `gulp dev` - builds, starts watching, runs nodemon and browsersync
  - client changes trigger `client` task as well as sends refresh signal to browser
  - server changes trigger `server` task and causes nodemon to restart
* `gulp production` - runs `bin/www-multi` using `forever`
* `gulp test` - runs all tests through mocha after building
* `gulp test-ci` - runs all tests through mocha after building for the ci
* `gulp pre-commit` - pre-commit hook which verifies lint
