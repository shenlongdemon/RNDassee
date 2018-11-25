import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from "react-native";

const color = {
  Background: '#00',
  Icon: '#FFFFFF',
  Red: '#FF0000',
  Text: '#FFFFFF',
  Navigation: {
    Background: '#000000',
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

const styleSheet = StyleSheet.create({
  label: {
    color: color.Text
  },
  caption:{
    color: color.Text,
    fontWeight: 'bold'
  },
  floatTouchable: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 70,
    height: 70
  }
});


const props = {
  btn: {
    borderRadius: 10,
    buttonStyle: {backgroundColor: color.Background},
    containerViewStyle: {borderColor: color.Background},
    large: true,
    textStyle: {color: color.Text},
  },
  txt: {
    iconClass: MaterialIcons,
    iconColor: color.Icon,
    inputStyle: {color: color.Text},
    labelStyle: {color: color.Text},
    style: {height: 50, backgroundColor: color.Background},
    useNativeDriver: true,
  },
  errorTxt: {
    style: {color: color.Error.Message}
  }
};

export {props, color, styles, styleSheet};
