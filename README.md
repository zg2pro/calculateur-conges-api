<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">



## Generation of a NestJs project compatible with frontend frameworks (Vue, Angular, React and so on)

1- 
```bash
$ npm install -g @nestjs/cli date-now-cli
$ nest new app-api
$ cd app-api
$ npm install --save-dev date-now-cli
```

2- Then go to the package.json and add the scripts:
```js
$ "prepublish:version": "npm version 0.0.0-$(date-now --format='YYYYMMDDHHmmssSSS') --no-git-tag-version"
```

3- Also rename your project with your organization in prefix : `name : "@my-org/app-api"`
This will help you publish in npm registry

4- Then go to the tsconfig.json file and check the following properties:
```js
    "module": "commonjs",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es2017",
    "sourceMap": true,
```

5- In your code, when you inject a dependency, pay attention to inject in this fashion:
```js
constructor(@Inject(HttpService) protected http) {
    }
```
This will allow Angular to override the dependency during the injection as Angular uses a different DI engine (but compatible) and different set of core tools