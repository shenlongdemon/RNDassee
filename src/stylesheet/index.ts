import {StyleSheet} from 'react-native';

const color = {
    Background: '#FFFFFF',
    Icon: '#00b300',
    Red: '#FF0000',
    Text: '#007100',
};

const styles = StyleSheet.create({
    btn: {},
});

const props = {
    btn: {
        borderRadius: 10,
        buttonStyle: {backgroundColor: color.Background},
        containerViewStyle: {borderColor: color.Background},
        large: true,
        textStyle: {color: color.Text},
    }
};

export {props, color};
