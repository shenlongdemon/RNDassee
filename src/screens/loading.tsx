import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import INavigation from './inavigation';
import { PUBLIC_TYPES, IAuthService, FactoryInjection } from 'business_core_app_react';
import { inject } from 'inversify';
const RNN = require('react-navigation');

interface Props extends INavigation {}
interface State {}
export default class Loading extends React.Component<Props, State> {
    private authService: IAuthService = FactoryInjection.get(PUBLIC_TYPES.IAuthService);
    componentDidMount = async (): Promise<void> => {
      let isMasterLogged = await this.authService.isMasterLogged();
      if (isMasterLogged) {
        this.props.navigation.navigate('UserLogin');
      }
      else {
        
        this.props.navigation.navigate('auth');
      }
      
    }
    render() {
        return (
          <View>
            <Text>Loading</Text>
          </View>
        );
      }
}