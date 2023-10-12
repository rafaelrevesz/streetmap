# How to

## Prepare

Restore files after build:

./git checkout src/main/resources/static/lib/config.js

### Home

./gradlew targetHome

### AWS

./gradlew targetAws

## Build

./ gradlew clean prepare

Deployment ZIP is under build/packages

## Deploy

### Locally

docker run -it --rm -d -p 81:80 --name web -v /d/Private/Projects/StreetMap/src/main/resources/static:/usr/share/nginx/html nginx

### Home

### AWS