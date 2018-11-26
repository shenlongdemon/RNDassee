import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from "react-native";

const color = {
  Background: '#00',
  Icon: '#FFFFFF',
  Red: '#FF0000',
  Text: '#FFFFFF',
  rtxt: {
    background: 'rgba(53, 53, 53, 0.5)'
  },
  field: {
    border: 'rgba(53, 53, 53, 0.5)'
  },
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

const fontWeight = {
  normal: 'normal',
  bold: 'bold'
};

const styles = {
  Navigation: {
    FontWeight: fontWeight.bold,
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
  caption: {
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
    style: {height: 50, backgroundColor: color.rtxt.background},
    useNativeDriver: true,
    autoCapitalize: false,
    autoCorrect: false,
    borderColor: color.field.border,
  },
  field: {
    iconClass: MaterialIcons,
    iconColor: color.Icon,
    inputStyle: {color: color.Text},
    labelStyle: {color: color.Text},
    style: {height: 50, backgroundColor: color.Background},
    borderColor: color.field.border,
    
    autoCapitalize: true,
    autoCorrect: false
  },
  /**
   * for Jiro
   */
  rtxt: {
    multiline: true,
    inputStyle: {color: color.Text, fontWeight: fontWeight.normal, textAlignVertical:'top'},
    labelStyle: {color: color.Text},
    style: {backgroundColor: color.Background, width: '100%'},
    borderColor: color.rtxt.background,
    autoCapitalize: true,
    autoCorrect: false
  },
  errorTxt: {
    style: {color: color.Error.Message}
  }
};

export {props, color, styles, styleSheet};
