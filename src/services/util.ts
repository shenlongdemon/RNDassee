import {Device} from 'react-native-ble-plx';
import {
  BLEDevice,
  CONSTANTS,
  Position
} from 'business_core_app_react';

export default class Util {
  
  
  static getBLEBeaconDistance = (RSSI: number): number => {
    const rssi: number = RSSI;
    if (rssi == 0) {
      return -1.0; // if we cannot determine accuracy, return -1.
    }
    
    const ratio: number = rssi * 1.0 / (-60.0);
    if (ratio < 1.0) {
      return Math.pow(ratio, 10);
    }
    else {
      let accuracy: number = (0.89976) * Math.pow(ratio, 7.7095) + 0.111;
      return accuracy;
    }
  }
  
  static mappingBLEDevices = (devices: Device[], currentPosition: Position, userId: string): BLEDevice[] => {
    const bleDevices: BLEDevice[] = devices.map((device: Device, index: number) => {
      const distance: number = Util.getBLEBeaconDistance(device.rssi || 0);
      const bleDevice: BLEDevice = {
        id: device.id,
        name: device.name || CONSTANTS.STR_EMPTY,
        localName: device.localName,
        proximityUUID: device.id,
        ownerId: userId,
        coord: {...currentPosition.coord, distance: distance}
      }
      
      return bleDevice;
    });
    return bleDevices;
  };
}