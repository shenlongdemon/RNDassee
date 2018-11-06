# Description

The mobile application repository

# Configuration

## Install business-core-app package

* Setup SSH

    Please install SSH and we can install npm from Gitlab

* Install

    ```bash
    npm i -S git+ssh://git@gitlab.com/posbird_phoenix/business-core-app#<BRANCH>
    ```

## Install with yarn

* For typescript

  ```bash
  yarn add -D @types/xxx
  ```

## Environment variable

* Using `react-native-config`, see <https://github.com/luggit/react-native-config>.
* Link RN lib before running

  ```bash
  react-native link
  ```

* You'll also need to manually apply a plugin to your app, from `android/app/build.gradle`:

  ```bash
  // 2nd line, add a new apply:
  apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
  ```

* Create environment files such as .env (default), .env.staging, .env.production

* Run with command with using .env by default
  
  ```bash
  react-native run-android
  ```

  or

  ```bash
  ENVFILE=.env react-native run-android
  ```

# Issues

## Env

* bundling failed: Error: Unable to resolve module /../react-transform-hmr/lib/index.js

  ```bash
  npm cache clean --force && react-native start --reset-cache
  ```