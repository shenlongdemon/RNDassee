import * as React from 'react';
import {Text} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../../stylesheet';
import {ROUTE} from "../routes";

interface Props {

}

interface State {

}

export default class ManufactoryMain extends BaseScreen<Props, State> {
    constructor(props: Props) {
        super(props);
        this.gotoGoods = this.gotoGoods.bind(this);
        this.gotoProcesses = this.gotoProcesses.bind(this);
    }
    
    private gotoGoods = async (): Promise<void> => {
        this.navigate(ROUTE.APP.MANUFACTORY.GOODSES)
    }
    private gotoProcesses = async (): Promise<void> => {
        this.navigate(ROUTE.APP.MANUFACTORY.PROCESSES)
    }
    
    render() {
        return (
            <BaseScreen {...{...this.props}}>
                <Text>Manufactory</Text>
                <Button
                    {...Styles.props.btn}
                    buttonStyle={{...Styles.props.btn.buttonStyle, width: 200}}
                    title='GOODS'
                    onPress={this.gotoGoods}
                />
                <Button
                    {...Styles.props.btn}
                    buttonStyle={{...Styles.props.btn.buttonStyle, width: 200}}
                    title='PROceSsES'
                    onPress={this.gotoProcesses}
                />
            </BaseScreen>
        );
    }
}
