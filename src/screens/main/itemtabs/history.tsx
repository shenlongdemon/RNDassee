import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import BasesSreen from "../../basescreen";
import {Grid, Row} from "react-native-easy-grid";
import HistoryItem from "../../../components/listitem/historyitem";
import {ItemHistory, Item, IBusinessService, FactoryInjection, PUBLIC_TYPES} from 'business_core_app_react';
import {PARAMS} from "../../../common";
import {ROUTE} from "../../routes";

interface Props {
}

interface State {
    histories: ItemHistory[]
}

export default class GoodsHistoryScreen extends BasesSreen<Props, State> {
    private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
    
    constructor(props: Props) {
        super(props);
        this.state = {
            histories: []
        };
        this.clickListItem = this.clickListItem.bind(this);
        
    }
    
    
    componentDidMount = async (): Promise<void> => {
        const item: Item | null = this.getParam<Item>(PARAMS.ITEM, null);
        if (item) {
            const histories: ItemHistory[] = await this.businessService.getItemHistories(item);
            this.setState({histories: histories});
        }
    }
    
    private clickListItem = (item: ItemHistory, index: number): void => {
    
    }
    
    render() {
        return (
            <View>
                <Grid>
                    <Row size={1}>
                        <Text>Map</Text>
                    </Row>
                    <Row size={2}>
                        <FlatList
                            style={{flex: 1}}
                            data={this.state.histories}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) =>
                                <HistoryItem item={item} index={index}
                                             onClickHandle={this.clickListItem}/>
                            }
                            keyExtractor={(item) => item.id}
                        />
                    </Row>
                </Grid>
            </View>
        );
    }
}