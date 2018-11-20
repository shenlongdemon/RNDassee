import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import BasesSreen from "../../basescreen";
import {Grid, Row} from "react-native-easy-grid";
import ProcessItem from "../../../components/listitem/processitem";
import {ItemHistory, Item} from 'business_core_app_react';
import {PARAMS} from "../../../common";
import {ROUTE} from "../../routes";

interface Props {
}

interface State {
    histories: ItemHistory[]
}

export default class GoodsHistoryScreen extends BasesSreen<Props, State> {
    
    constructor(props: Props) {
        super(props);
        const item: Item | null = this.getParam<Item>(PARAMS.ITEM, null);
        this.state = {
            histories: item ? item.getHistories() : []
        };
        this.clickListItem = this.clickListItem.bind(this);
        
    }
    
    
    componentDidMount = async (): Promise<void> => {
    
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
                                <ItemHistory item={item} index={index}
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