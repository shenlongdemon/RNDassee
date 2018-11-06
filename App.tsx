/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import Startup from './app_start/startup';
import {createStack} from './src/screens/screens';
import { inject } from 'inversify';
import { PUBLIC_TYPES, ITestService } from 'business-core-app';

Startup.start();

const RootStack = createStack;

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}