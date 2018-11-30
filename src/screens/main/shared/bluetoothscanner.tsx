import * as React from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {
  PUBLIC_TYPES,
  IAuthService,
  FactoryInjection,
  BLEDevice,
  LOGGER,
  Material,
  IBusinessService,
  User, Process
} from 'business_core_app_react';
import {inject} from 'inversify';
import BasesSreen from "../../basescreen";
import {ROUTE} from "../../routes";
import {BleManager, Device, BleError, LogLevel} from 'react-native-ble-plx';
import BLEDeviceItem from "../../../components/listitem/bledeviceitem";
import {PARAMS, CallbackDataType} from "../../../common";
import Util from '../../../services/util';

interface Props {
}

interface State {
  devices: BLEDevice[];
  isLoading: boolean;
}

export default class BluetoothScannerScreen extends BasesSreen<Props, State> {
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  private bleManager!: BleManager;
  private timeout!: any;
  
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      isLoading: false
    };
    this.componentDidFocus = this.componentDidFocus.bind(this);
    this.clickListItem = this.clickListItem.bind(this);
    
  }
  
  componentWillMount = async (): Promise<void> => {
    this.bleManager = new BleManager();
  }
  
  componentDidMount = async (): Promise<void> => {
  
  }
  
  componentWillUnmount = async (): Promise<void> => {
    this.bleManager.stopDeviceScan();
  }
  
  private setupBLEManager = async (): Promise<void> => {
  
  }
  private clickListItem = async (item: BLEDevice, index: number): Promise<void> => {
    
    const callbackFunc: (data: any, type: number, extraData: any | null) => Promise<void> | null = this.getParam<any>(PARAMS.CALLBACK_FUNCTION, null);
    if (callbackFunc) {
      await callbackFunc(item, CallbackDataType.bleDevice, null);
    }
    
    this.goBack();
  }
  
  private startScan = async (): Promise<void> => {
    
    const currentPosition = await this.businessService.getCurrentPosition();
    const user: User = await this.businessService.getUser();
    this.setState({isLoading: true});
    const devices: Device[] = [];
    this.bleManager.startDeviceScan(null, null, (error: BleError, device: Device) => {
      LOGGER.log('Scanning ...');
      if (error) {
        LOGGER.log(error);
        return;
      }
      
      LOGGER.log(device + ' ' + devices.length);
      devices.push(device);
      
    });
    
    this.timeout = setTimeout(async (): Promise<void> => {
      await this.stopScan();
      const bleDevices: BLEDevice[] = Util.mappingBLEDevices(devices, currentPosition, user.id);
      this.setState({devices: bleDevices, isLoading: false});
    }, 15000);
    
  }
  
  private componentDidFocus = async (): Promise<void> => {
    if (Platform.OS === 'ios') {
      this.bleManager.onStateChange(async (state): Promise<void> => {
        if (state === 'PoweredOn') {
          await this.startScan();
        }
      })
    } else {
      await this.startScan()
    }
  }
  
  private stopScan = async (): Promise<void> => {
    clearInterval(this.timeout);
    this.setState({isLoading: false})
    this.bleManager.stopDeviceScan();
    LOGGER.log('Stop scan');
  }
  
  
  render() {
    return (
      <BasesSreen {...{...this.props, isLoading: this.state.isLoading, componentDidFocus: this.componentDidFocus}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.devices}
          showsVerticalScrollIndicator={true}
          renderItem={({item, index}) =>
            <BLEDeviceItem item={item} index={index}
                           onClickHandle={this.clickListItem}/>
          }
          keyExtractor={(item) => item.id}
        />
      </BasesSreen>
    );
  }
}