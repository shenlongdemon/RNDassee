import SwitchFeature from "./switctfeature";

const RNN = require('react-navigation');
import Login from './auth/login';
import Loading from './loading';
import UserMain from "./main/usermain";
import ManufactoryMain from "./main/manufactorymain";

const userStack = RNN.createStackNavigator(
    {
        main: {
            screen: UserMain
        }
    },
    {
        initialRouteName: 'main'
    }
);

const manufactoryStack = RNN.createStackNavigator(
    {
        main: {
            screen: ManufactoryMain
        }
    },
    {
        initialRouteName: 'main'
    }
);

const switchStack = RNN.createSwitchNavigator(
    {
        switchfeature: SwitchFeature,
        user: userStack,
        manufactory: manufactoryStack
    },
    {
        initialRouteName: 'switchfeature'
    }
);

const createStack = RNN.createSwitchNavigator({
        login: Login,
        switchfeature: switchStack,
        loading: {
            screen: Loading,
            initialRouteName: 'loading',
            mode: 'modal',
            headerMode: 'none',
        }
    },
    {
        initialRouteName: 'loading'
    }
);
export {createStack};