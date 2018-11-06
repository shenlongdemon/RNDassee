import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import INavigation from '../inavigation';

interface Props extends INavigation {}
interface State {}
export default class MasterLogin extends React.Component<Props, State> {
  componentDidMount = () : void => {
    // this.props.navigation.navigate('UserLogin');

  }
    render() {
        return (
          <View>
            <Text>Master login</Text>
          </View>
        );
      }
}