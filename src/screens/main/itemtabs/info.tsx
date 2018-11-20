import * as React from 'react';
import {Text, View} from 'react-native';
import BasesSreen from "../../basescreen";

interface Props {}
interface State {}
export default class GoodsInfoScreen extends BasesSreen<Props, State> {
    componentDidMount = async (): Promise<void> => {
    
    
    }
    render() {
        return (
            <View>
                <Text>Goods Info</Text>
            </View>
        );
    }
}