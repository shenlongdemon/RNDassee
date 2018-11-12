import {ErrorResult, FactoryInjection, IStore, PUBLIC_TYPES, CONSTANTS} from "business_core_app_react";

const handleBusinessError = (error: ErrorResult): void => {
    debugger
}
const handleExceptionError = (error: ErrorResult): void => {
    debugger
}
const generateHeader = async (): Promise<any> => {

    let store: IStore = FactoryInjection.get<IStore>(PUBLIC_TYPES.IStore);
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}

export {handleBusinessError, handleExceptionError, generateHeader};