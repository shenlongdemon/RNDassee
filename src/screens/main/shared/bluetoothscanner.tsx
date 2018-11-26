import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {PUBLIC_TYPES, IAuthService, FactoryInjection, BLEDevice} from 'business_core_app_react';
import {inject} from 'inversify';
import BasesSreen from "../../basescreen";
import {ROUTE} from "../../routes";

const RNN = require('react-navigation');

interface Props {
}

interface State {
  devices: BLEDevice[];
  isScanning: boolean;
}

export default class BluetoothScannerScreen extends BasesSreen<Props, State> {
  private authService: IAuthService = FactoryInjection.get(PUBLIC_TYPES.IAuthService);
  
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      isScanning: true
    };
    this.componentDidFocus = this.componentDidFocus.bind(this
  }
  
  componentDidMount = async (): Promise<void> => {
  
  }
  
  private componentDidFocus = async (): Promise<void> => {
  
  }
  
  private stopScan = async () : Promise<void> => {
    this.setState({isScanning: false})
  }
  private startScan = async () : Promise<void> => {
    this.setState({isScanning: false})
  }
  
  render() {
    return (
      <BasesSreen {...{...this.props, componentDidFocus: this.componentDidFocus}}>
      
      </BasesSreen>
    );
  }
}