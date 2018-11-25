import {IStore, STORAGE_KEYS, User, CONSTANTS, Position, UserInfo} from 'business_core_app_react';
import {AsyncStorage} from 'react-native';
import {injectable} from 'inversify';

@injectable()
export class AsyncStorageStore implements IStore {
  constructor() {
  }
  
  saveUser = async (user: User): Promise<void> => {
    await this.saveItem(STORAGE_KEYS.USER, user);
  }
  
  getUser = async (): Promise<User | null> => {
    let json: string = await this.getItem(STORAGE_KEYS.USER, CONSTANTS.STR_EMPTY);
    if (json !== CONSTANTS.STR_EMPTY) {
      try {
        let user: User = JSON.parse(json);
        return user;
      }
      catch (e) {
        return null;
      }
    }
    else {
      return null;
    }
  }
  
  getCurrentPosition = async (): Promise<Position | null> => {
    const position: Position | null = await this.getObject<Position>(STORAGE_KEYS.CURRENT_POSITION);
    return position;
  }
  
  saveCurrentPosition = async (position: Position): Promise<void> => {
    await this.saveItem(STORAGE_KEYS.CURRENT_POSITION, position);
  }
  
  private saveItem = async <T>(key: string, data: T): Promise<void> => {
    let json: string = JSON.stringify(data);
    AsyncStorage.setItem(key, json);
  }
  
  private getItem = async (key: string, defaultValue: string): Promise<string> => {
    var value = '';
    try {
      value = await AsyncStorage.getItem(key) || defaultValue;
    }
    catch (e) {
      value = defaultValue;
    }
    return value;
  }
  
  private async getObject<T>(key: string): Promise<T | null> {
    try {
      const json: string = await this.getItem(key, CONSTANTS.STR_EMPTY);
      if (json !== CONSTANTS.STR_EMPTY) {
        let t: T = JSON.parse(json);
        return t;
      }
    }
    catch (e) {
      return null;
    }
    return null;
  }
  
  
  
}