import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Text} from 'react-native';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../../stylesheet';
interface Props {

}

interface State {

}

export default class UserMain extends BaseScreen<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <BaseScreen>
                <Text>User</Text>
            </BaseScreen>
        );
    }
}