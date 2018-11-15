import * as React from 'react';
import {ImageBackground, View} from 'react-native';
import * as IMAGE from '../assets';

export default class Basescreen<T, S> extends React.Component<T, S> {
    constructor(props: T) {
        super(props);
    }

    navigate = (routeName: string): void => {
        // @ts-ignore
        this.props.navigation.navigate(routeName);
    }

    render() {
        return (
            <ImageBackground source={IMAGE.background}
                             style={{flex: 1, justifyContent: 'center', width: '100%', height: '100%'}}>
                {this.props.children}
            </ImageBackground>
        );
    }
}
