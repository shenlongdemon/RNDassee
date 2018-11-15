import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from './basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../stylesheet';
import {ROUTE} from "./routes";
interface Props {

}

interface State {

}

export default class SwitchFeature extends BaseScreen<Props, State>{
    constructor(props: Props) {
        super(props);
        this.switchToUser = this.switchToUser.bind(this);
        this.switchToManufactory = this.switchToManufactory.bind(this);
    }

    private switchToUser = (): void => {
        this.navigate(ROUTE.APP.USER.DEFAULT);
    }

    private switchToManufactory = (): void => {
        this.navigate(ROUTE.APP.MANUFACTORY.DEFAULT);
    }

    render() {
        return (
            <BaseScreen {...this.props}>
                <Grid>
                    <Row></Row>
                    <Row>
                        <Grid>
                            <Col>
                                <Button
                                    {...Styles.props.btn}
                                    buttonStyle={{...Styles.props.btn.buttonStyle, width: 200, height:200}}
                                    title='USER'
                                    onPress={this.switchToUser}
                                />
                            </Col>

                            <Col>
                                <Button
                                    {...Styles.props.btn}
                                    title='MANUFACTORY'
                                    buttonStyle={{...Styles.props.btn.buttonStyle, width: 200, height:200}}
                                    onPress={this.switchToManufactory}
                                />
                            </Col>
                        </Grid>
                    </Row>
                    <Row></Row>
                </Grid>
            </BaseScreen>
        );
    }
}