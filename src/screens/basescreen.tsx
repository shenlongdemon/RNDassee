import * as React from 'react';
import {ImageBackground, EmitterSubscription} from 'react-native';
import * as IMAGE from '../assets';

interface Props{
    componentDidFocus?: (() => Promise<void>) | null;
}

export default class Basescreen<T extends Props, S> extends React.Component<Props, S> {
    private didBlurSubscription? : EmitterSubscription | null;
    
    constructor(props: T) {
        super(props);
    }

    navigate = (routeName: string): void => {
        // @ts-ignore
        this.props.navigation.navigate(routeName);
    }
    componentDidMount = (): void => {
        this.extendEvents();
    };
    
    componentWillUnmount = (): void => {
        if (this.didBlurSubscription) {
            this.didBlurSubscription.remove();
        }
    }
    
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
