import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import {
    FactoryInjection,
    Item,
    IAuthService,
    PUBLIC_TYPES,
    IBusinessService,
    ItemListDto
} from 'business_core_app_react';
import * as Styles from '../../stylesheet';
import {ROUTE} from "../routes";
import GoodsItem from '../../components/listitem/goodsitem';
import {PARAMS} from '../../common';

interface Props {

}

interface State {
    goodses: Item[];
}

export default class GoodsScreen extends BaseScreen<Props, State> {
    private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);

    constructor(props: Props) {
        super(props);
        this.state = {
            goodses: []
        };
        this.clickListItem = this.clickListItem.bind(this);
    }

    componentDidMount = async (): Promise<void> => {
        this.loadGoods();
    }

    private clickListItem = (item: Item, index: number): void => {
        const data: any = {};
        data[PARAMS.ITEM] = item;
        
        this.navigate(ROUTE.APP.MANUFACTORY.GOODSES.ITEM.DEFAULT, data)
    }

    private loadGoods = async (): Promise<void> => {
        const itemListDto: ItemListDto = await this.businessService.getItems();
        if (itemListDto.isSuccess) {
            this.setState({goodses: itemListDto.items});
        }
    }

    render() {
        return (
            <BaseScreen>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.goodses}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) =>
                        <GoodsItem item={item} index={index}
                                   onClickHandle={this.clickListItem}/>
                    }
                    keyExtractor={(item) => item.id}
                />
            </BaseScreen>
        );
    }
}