<img src="https://i.ytimg.com/vi/SGj11j4hxmg/maxresdefault.jpg">
# Angular9 StateManagement Library [NGXS]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Setup tools for development

NGXS is a state management pattern + library for Angular
visit ngxs website <a href="https://www.ngxs.io/">https://www.ngxs.io</a>

## Concept NGXS

<img src="https://gblobscdn.gitbook.com/assets%2F-L9CoGJCq3UCfKJ7RCUg%2F-Lqo8CEiTGbFfHN-MPem%2F-Lqo8EeI9WI8AjKSCgMo%2Fdiagram.png?alt=media">

## Install NGXS Tools

```bash
# Install yarn or NPM 5+ Globaly
$ yarn add @ngxs/{store,logger-plugin,devtools-plugin}@dev
$ npm install yarn add @ngxs/{store,logger-plugin,devtools-plugin}@dev
```

```bash
# Install NGXS CLI
$ npm install @ngxs/cli -g
$ yarn global add @ngxs/cli
see more ==> [https://www.ngxs.io/plugins/cli]
```

```bash
# Add to app.module.ts
NgxsModule.forRoot([StudentState], { developmentMode: !environment.production }),
NgxsLoggerPluginModule.forRoot(),
NgxsReduxDevtoolsPluginModule.forRoot()
```

```bash
# Clone Repository for development test
$ git clone https://github.com/sutin1234/ngxs-todo-student.git
$ cd ngxs-todo-student && npm install
$ yarn start | npm run start | ng serve # serve project
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
