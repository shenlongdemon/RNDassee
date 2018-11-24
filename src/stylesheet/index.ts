import {StyleSheet} from 'react-native';

const color = {
  Background: '#FFFFFF',
  Icon: '#00b300',
  Red: '#FF0000',
  Text: '#007100',
  Navigation: {
    Background: '#13b360',
    Tint: '#FFFFFF',
  },
  Map: {
    Line: '#FFFFFF',
  },
  Error: {
    Message: '#FF0000',
  },
};

const styles = {
  Navigation: {
    FontWeight: 'bold',
  },
  containerControl: [
    {justifyContent: 'center'},
    {height: 60}
  ],
};


const props = {
  btn: {
    borderRadius: 10,
    buttonStyle: {backgroundColor: color.Background},
    containerViewStyle: {borderColor: color.Background},
    large: true,
    textStyle: {color: color.Text},
  },
  txt: {
    inputStyle: {color: color.Text},
    labelStyle: {color: color.Text},
    style: {height: 50},
    useNativeDriver: true,
  },
  errorTxt: {
    style: {color: color.Error.Message}
  }
};

export {props, color, styles};
