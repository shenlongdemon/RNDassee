import SwitchFeature from "./switctfeature";

const RNN = require('react-navigation');
import Login from './auth/login';
import Loading from './loading';
import UserMain from "./main/usermain";
import ManufactoryMain from "./main/manufactorymain";
import GoodsScreen from "./main/goods";
import ProcessesScreen from "./main/processes";
import * as Styles from "../stylesheet";

const userStack = RNN.createStackNavigator(
    {
        main: UserMain,
    },
    {
        initialRouteName: 'main'
    }
);

const manufactoryStack = RNN.createStackNavigator(
    {
        main: ManufactoryMain,
        goodses: GoodsScreen,
        processes: ProcessesScreen
        
    },
    {
        initialRouteName: 'main',
        navigationOptions : {
            headerStyle: {
                backgroundColor: Styles.color.Navigation.Background,
            },
            headerTintColor: Styles.color.Navigation.Tint,
            headerTitleStyle: {
                textAlign: 'center',
                fontWeight: Styles.styles.Navigation.FontWeight,
                width: '100%',
            },
        },
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