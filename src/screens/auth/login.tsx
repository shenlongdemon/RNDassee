import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {IAuthService, FactoryInjection, PUBLIC_TYPES, BaseDto, CONSTANTS} from 'business_core_app_react';
import BaseScreen from '../basescreen';
import {Grid, Row, Col} from 'react-native-easy-grid';
import * as Styles from '../../stylesheet';
import { Button } from 'react-native-elements';
import {Kohana, Sae, Isao} from "react-native-textinput-effects";
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
      phone: CONSTANTS.STR_EMPTY,
      password: CONSTANTS.STR_EMPTY
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
              <Col size={1}></Col>
              <Col size={4}>
              <Row style={styles.containerControl}>
                <Kohana
                  {...Styles.props.txt}
                  label={'Phone'}
                  iconName={'mail-outline'}
                  keyboardType={'phone-pad'}
                  
                  onChangeText={(text) =>
                    this.setState({
                      phone: text
                    })
                  }
                />
              </Row>
              <Row style={styles.containerControl}>
                <Kohana
                  {...Styles.props.txt}
                  label={'Password'}
                  iconName={'vpn-key'}
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    this.setState({
                      password: text
                    })
                  }
                />
              </Row>
              <Row></Row>
              <Row style={styles.containerControl}>
                <Button
                  {...Styles.props.btn}
                  buttonStyle={{...Styles.props.btn.buttonStyle, width: 260}}
                  title="Login"
                  onPress={this.clickLogin}
                />
              </Row>
              </Col>
              <Col size={1}></Col>
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
