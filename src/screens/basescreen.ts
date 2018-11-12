import * as React from 'react';

export default class BasesSreen<T, S> extends React.Component<T, S>{
    constructor(props: T) {
        super(props);
    }

    navigate = (routeName: string): void => {
        // @ts-ignore
        this.props.navigation.navigate(routeName);
    }
}