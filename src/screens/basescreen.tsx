import * as React from 'react';
import {ImageBackground, EmitterSubscription} from 'react-native';
import * as IMAGE from '../assets';

interface INavitation {

}
interface Props {
    componentDidFocus?: (() => Promise<void>) | null;
    navigation?: INavitation | null;
}

export default class Basescreen<T extends Props, S> extends React.Component<Props, S> {
    private didBlurSubscription?: EmitterSubscription | null;
    
    constructor(props: T) {
        super(props);
    }
    
    navigate = (routeName: string, data: any | null = null): void => {
        if (this.props.navigation) {
            // @ts-ignore
            this.props.navigation.navigate(routeName, data);
        }
    }
    goBack = () : void => {
        if (this.props.navigation) {
            // @ts-ignore
            this.props.navigation.goBack();
        }
    }
    componentDidMount = (): void => {
        this.extendEvents();
    };
    
    componentWillUnmount = (): void => {
        if (this.didBlurSubscription) {
            this.didBlurSubscription.remove();
        }
    }
    
    getParam = <Q extends {}>(key: string, defaultValue: Q | null): Q | null => {
    
        let data: Q | null = null;
        if (this.props.navigation) {
            // @ts-ignore
            data = this.props.navigation.getParam(key, defaultValue);
        }
        
        return data;
    };
    
    private extendEvents = (): void => {
        // @ts-ignore
        if (this.props.navigation) {
            // @ts-ignore
            this.didBlurSubscription = this.props.navigation.addListener(
                'didFocus',
                (payload: any) => {
                    if (this.props.componentDidFocus) {
                        this.props.componentDidFocus();
                    }
                }
            );
        }
    };
    
    render() {
        return (
            <ImageBackground source={IMAGE.background}
                             style={{flex: 1, justifyContent: 'center', width: '100%', height: '100%'}}>
                {this.props.children}
            </ImageBackground>
        );
    }
}
