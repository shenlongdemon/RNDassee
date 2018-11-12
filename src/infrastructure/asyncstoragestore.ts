import { IStore, STORAGE_KEYS, User, CONSTANTS } from 'business_core_app_react';
import { AsyncStorage } from 'react-native';
import { injectable } from 'inversify';

@injectable()
export class AsyncStorageStore implements IStore {
    constructor() {}

    saveUser = async (user: User): Promise<void> => {
        let json: string = JSON.stringify(user);
        AsyncStorage.setItem(STORAGE_KEYS.USER, json);
    }

    getUser = async (): Promise<User|null>  => {
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

}