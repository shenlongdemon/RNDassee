const RNN = require('react-navigation');
import MasterLogin from './auth/masterlogin';
import UserLogin from './auth/userlogin';
import Loading from './loading';

const authStack = RNN.createStackNavigator({
  MasterLogin: {
    screen: MasterLogin
  },
  UserLogin: {
      screen: UserLogin
  }
},
{
  initialRouteName: 'MasterLogin',
}
);

const createStack = RNN.createStackNavigator({
    auth: {
      screen: authStack
    },
    Loading: {
        screen: Loading,
        
    }
},
  {
    initialRouteName: 'Loading',
    mode: 'modal',
        headerMode: 'none',
  }
);
export {createStack};