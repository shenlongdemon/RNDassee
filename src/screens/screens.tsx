const RNN = require('react-navigation');
import Login from './auth/login';
import Loading from './loading';


const createStack = RNN.createStackNavigator({
        login: Login,
        loading: {
            screen: Loading,
        }
    },
    {
        initialRouteName: 'loading',
        mode: 'modal',
        headerMode: 'none',
    }
);
export {createStack};