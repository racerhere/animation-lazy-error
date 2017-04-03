# AnimationLazyError

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Test Instructions
* Clone project
* `npm install`
* `ng serve`
* Go to `http://localhost:4200/eager`. Everything works when modules are eagerly loaded.
* Go to `http://localhost:4200/lazy`. See console for
    >  Error: BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.

* Comment the import of NoopAnimationsModule in src\app\shared\shared.module.ts (lines 6 and 15).
* Go to `http://localhost:4200/lazy`. Works fine now.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
