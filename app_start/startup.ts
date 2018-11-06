import { ENV, FactoryInjection, PUBLIC_TYPES, IWebApi, IStore } from 'business_core_app_react';
import Config from 'react-native-config';
import { AsyncStorageStore } from '../src/infrastructure/asyncstoragestore';
import {handleBusinessError, handleexceptionError} from './apierrorhandle';
export default class Startup {
    
    static start = (): void => {
        Startup.config();
        Startup.inject();
        Startup.handleApiError();
    }
    private static config = (): void => {
        ENV.config(Config);
    }

    private static inject = (): void => {
        FactoryInjection.bindSingleton<IStore>(PUBLIC_TYPES.IStore, AsyncStorageStore);
    }
    private static handleApiError = (): void => {
        let webapi: IWebApi = FactoryInjection.get<IWebApi>(PUBLIC_TYPES.IWebApi);
        webapi.handleBusinessError(handleBusinessError);
        webapi.handleExceptionError(handleexceptionError);
    }
}