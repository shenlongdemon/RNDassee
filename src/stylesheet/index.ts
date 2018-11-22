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
    }
};

const styles = {
    Navigation: {
        FontWeight: 'bold',
    },
};


const props = {
    btn: {
        borderRadius: 10,
        buttonStyle: {backgroundColor: color.Background},
        containerViewStyle: {borderColor: color.Background},
        large: true,
        textStyle: {color: color.Text},
    }
};

export {props, color, styles};
