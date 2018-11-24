import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {IAuthService, FactoryInjection, PUBLIC_TYPES, BaseDto, CONSTANTS} from 'business_core_app_react';
import BaseScreen from '../basescreen';
import {Grid, Row, Col} from 'react-native-easy-grid';
import * as Styles from '../../stylesheet';
import { Button } from 'react-native-elements';
import {Kohana} from "react-native-textinput-effects";
import {ROUTE} from "../routes";
interface Props {
}

interface State {
  phone: string;
  password: string;
}

export default class Login extends BaseScreen<Props, State> {
  private authService: IAuthService = FactoryInjection.get<IAuthService>(PUBLIC_TYPES.IAuthService);
  
  constructor(props: Props) {
    super(props);
    this.state = {
      phone: '+1234567890',
      password: '123'
    };
    this.clickLogin = this.clickLogin.bind(this);
  }
  
  componentDidMount = async (): Promise<void> => {
  
  }
  
  private async login(): Promise<void> {
    let baseSdo: BaseDto = await this.authService.login(this.state.phone, this.state.password);
    if (baseSdo.isSuccess) {
      this.navigate(ROUTE.SWITCHFEATURE.DEFAULT);
    }
    else {
      alert(baseSdo.message);
    }
  }
  
  private async clickLogin(): Promise<void> {
    await this.login();
  }
  
  render() {
    return (
      <BaseScreen {...{...this.props}}>
        <Grid>
          <Row size={2}></Row>
          <Row size={3}>
            <Grid>
              <Row style={styles.containerControl}>
              
              </Row>
              <Row style={styles.containerControl}>
                {/*<Kohana*/}
                  {/*{...Styles.props.txt}*/}
                  {/*label={'Password'}*/}
                  {/*iconName={'vpn-key'}*/}
                  {/*secureTextEntry={true}*/}
                  {/*onChangeText={(text: string) =>*/}
                    {/*this.setState({*/}
                      {/*password: text*/}
                    {/*})*/}
                  {/*}*/}
                {/*/>*/}
              </Row>
              <Row></Row>
              <Row style={styles.containerControl}>
                <Button
                  {...Styles.props.btn}
                  title="Login"
                  onPress={this.clickLogin}
                />
              </Row>
            </Grid>
          </Row>
          <Row size={2}></Row>
        </Grid>
      </BaseScreen>
    );
  }
}
const styles = StyleSheet.create({
  containerError: {
    justifyContent: 'center',
    height: 30
  },
  containerControl: {
    justifyContent: 'center',
    height: 60
  },
  control: {
    height: 50
  },
  errorMessage: {
    color: '#ff1400'
  }
});
