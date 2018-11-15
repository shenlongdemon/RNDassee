import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import {
    FactoryInjection,
    Goods,
    IAuthService,
    PUBLIC_TYPES,
    IBusinessService,
    GoodsListDto
} from 'business_core_app_react';
import * as Styles from '../../stylesheet';
import GoodsItem from '../../components/listitem/goodsitem';

interface Props {

}

interface State {
    goodses: Goods[];
}

export default class GoodsScreen extends BaseScreen<Props, State> {
    private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);

    constructor(props: Props) {
        super(props);
        this.clickListItem = this.clickListItem.bind(this);
    }

    componentDidMount = async (): Promise<void> => {
        this.loadGoods();
    }

    private clickListItem = (item: Goods, index: number): void => {

    }

    private loadGoods = async (): Promise<void> => {
        const goodsListDto: GoodsListDto = await this.businessService.getGoods();
        if (goodsListDto.isSuccess) {
            this.setState({goodses: goodsListDto.goodses});
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