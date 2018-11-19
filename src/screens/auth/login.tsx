import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {IAuthService, FactoryInjection, PUBLIC_TYPES, BaseDto} from 'business_core_app_react';
interface Props {
}

interface State {
}

export default class Login extends React.Component<Props, State> {
    private authService: IAuthService = FactoryInjection.get<IAuthService>(PUBLIC_TYPES.IAuthService);
    constructor(props: Props) {
        super(props);
    }

    componentDidMount = async(): Promise<void> => {
        let baseSdo: BaseDto = await this.authService.login('+1234567890', '123');
        if(baseSdo.isSuccess) {

        }
        else {
            alert(baseSdo.message);
        }
    }

    render() {
        return (
            <View>
            
            </View>
        );
    }
}