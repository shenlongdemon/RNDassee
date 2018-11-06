import { IStore, STORAGE_KEYS } from "business-core-app";
import { AsyncStorage } from "react-native"

import { injectable } from "inversify";

@injectable()
export class AsyncStorageStore implements IStore {
    constructor() {}

    saveMasterToken = async (key: string): Promise<void> => {
        AsyncStorage.setItem(STORAGE_KEYS.Master_Token, key);
    }    
    
    getMasterToken = async (defaultValue: string): Promise<string> => {
        var masterToken = '';
        try {
            masterToken = await AsyncStorage.getItem(STORAGE_KEYS.Master_Token) || defaultValue;
        }
        catch(e) {
            masterToken = defaultValue;
        }
        return masterToken;
    }


}