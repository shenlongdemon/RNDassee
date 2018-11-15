import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import * as IMAGE from '../../assets';
import BaseItem from './baseitem';
import IBaseItem from './ibaseitem';
import {Goods} from 'business_core_app_react';

interface Props extends IBaseItem<Goods> {

}

interface State {
    image: any;
}

export default class GoodsItem extends BaseItem<Goods, State> {
    constructor(props: Props) {
        super(props);
        // this.state = {image: {uri: this.props.item.avatar}};
        this.state = {image: IMAGE.profile};
    }

    componentDidMount = (): void => {
    }

    render() {

        return (
            // @ts-ignore
            <BaseItem {...this.props} >
                <Grid style={{height: 120}}>
                    <Row>
                        <Image style={{backgroundColor: 'transparent', height: '100%', width: '100%'}}
                               source={this.state.image}
                               resizeMode='contain'
                               onError={({nativeEvent: {error}}) => {
                                   alert('fdfdf');
                               }}
                        />
                    </Row>
                    <Row style={{height: 30, justifyContent: 'center'}}>
                        <Text style={{color: '#ffffff'}} >{this.props.item.id}</Text>
                    </Row>
                </Grid>
            </BaseItem>
        );
    }
}
