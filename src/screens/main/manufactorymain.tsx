import * as React from 'react';
import {Text} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../../stylesheet';
interface Props {

}

interface State {

}

export default class ManufactoryMain extends BaseScreen<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <BaseScreen>
                <Text>Manufactory</Text>
            </BaseScreen>
        );
    }
}