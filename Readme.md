## Subtree Commands

### Add Remote for subtree
```
git remote add -f mi-slides git@github.com:cnoss/mi-slides.git
```

### Add Subtree itself
```
git subtree add --prefix=mi-slides/ mi-slides master
```

### Pull Changes from Subtree Master
```
git subtree pull --prefix=mi-slides/ mi-slides master
```

## Docker for local testing

### Clone this repo

```
git clone https://github.com/th-koeln/mi-master-wtw.git
cd mi-master-wtw/
```

### Start Container

```
docker-compose up -d
```

This will build and serve the mi-master-wtw website. The build process needs some time. To oberserve the build process, simply `docker-compose logs -f`.

```
webserver_1  | Configuration file: /srv/jekyll/_config.yml
webserver_1  |             Source: /srv/jekyll
webserver_1  |        Destination: /srv/jekyll/_site
webserver_1  |  Incremental build: disabled. Enable with --incremental
webserver_1  |       Generating...
webserver_1  |                     done in 21.212 seconds.
webserver_1  |  Auto-regeneration: enabled for '/srv/jekyll'
webserver_1  |     Server address: http://0.0.0.0:4000/mi-master-wtw/
```

### Open the site

[http://localhost:4000/mi-master-wtw/](http://localhost:4000/mi-master-wtw/)

### Stop Container

```
docker-compose down
```