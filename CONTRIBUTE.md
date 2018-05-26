# Contributing

* Install `nodejs` and `npm` - Search Google
* Install `yarn`:
  ``` shell
  $ [sudo] npm install -g yarn
  ```
* Clone this repo:
  ``` shell
  $ git clone https://github.com/yashsriv/zeus.git
  ```
  
* Add the following to your `.bashrc`:
  ``` shell
  $ export PATH="$PATH:./node_modules/.bin"
  ```
* `cd` to cloned directory and install all packages:
  ``` shell
  $ yarn install
  ```
* Install `nginx` - Google
* Move `zues.nginx.conf` to `/etc/nginx/`
* Add the following to `/etc/nginx/nginx.conf` under the `http` block:
  ``` nginx
  include /etc/nginx/zeus.nginx.conf;
  ```
* Also add this line to `/etc/hosts`:
  ```
  127.0.0.1    zeus.dev
  ```
* Reload nginx config:
  ```
  $ sudo service nginx reload     # For ubuntu
  $ sudo systemctl reload nginx   # For some other OS like arch linux
  ```
* `cd` into the zeus folder and check if commands like `tslint` work without any extra installation. 
* After any changes, first build:
  ``` shell
  $ yarn start
  ```
* Now, files will automatically be watched and recompiled on any changes.
