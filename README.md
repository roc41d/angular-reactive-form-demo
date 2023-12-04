# Angular Reactive Form Demo

## Getting started

### Requirements
```
Node: v20.9.0
NPM: v9.8.1
Angular CLI: v17.0.5
```

### Installation
Clone the repository

```
git clone git@github.com:roc41d/angular-reactive-form-demo.git
```

Switch to project folder

```
cd angular-reactive-form-demo
```

Install dependencies

```
npm i
```

Start local development server

```
npm start
```

You can now access the app via [http://localhost:4200](http://localhost:4200)

## Setup with Docker

### Additional Requirements

Install and setup [Docker](https://www.docker.com)

* [Linux](https://docs.docker.com/engine/install/ubuntu/)
* [Windows](https://www.docker.com/products/docker-desktop)

### Build image

Switch to project folder

```
cd angular-reactive-form-demo
```

```
docker build -t <username>/<app-name>:<tag> .

Ex. docker build -t rocard/angular-reactive-form-demo:v1.0.0 .
```

### Run app
```
docker run -d -p <host-port>:<docker-port> <username>/<app-name>:<tag>

Ex. docker run -d -p 8080:8080 rocard/angular-reactive-form-demo:v1.0.0
```

You can now access the app via [http://localhost:8080](http://localhost:8080)