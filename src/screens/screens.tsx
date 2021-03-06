import SwitchFeature from "./switctfeature";

const RNN = require('react-navigation');
import Login from './auth/login';
import Loading from './loading';
import UserMain from "./main/usermain";
import ManufactoryMain from "./main/manufactorymain";
import GoodsScreen from "./main/goods";
import ProcessesScreen from "./main/process/processes";
import * as Styles from "../stylesheet";
import GoodsInfoScreen from "./main/itemtabs/info";
import GoodsHistoryScreen from "./main/itemtabs/history";
import ProcessDetail from "./main/process/processdetail";
import AddProcess from './main/process/addprocess';
import QRCodeScannerScreen from "./main/shared/qrcodescanner";
import BluetoothScannerScreen from "./main/shared/bluetoothscanner";
import TaskDetailScreen from "./main/process/taskdetail";

const goodsTab = RNN.createTabNavigator(
  {
    info: GoodsInfoScreen,
    history: GoodsHistoryScreen
  },
  {
    initialRouteName: 'info'
  }
);

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
    processes: {
      screen: ProcessesScreen,
      navigationOptions: {
        title: 'Processes List'
      }
    },
    processdetail: ProcessDetail,
    taskdetail: TaskDetailScreen,
    addprocess: AddProcess,
    goodsdetail: goodsTab,
    qrscanner: QRCodeScannerScreen,
    bluetooth: BluetoothScannerScreen
  },
  {
    initialRouteName: 'main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Styles.color.Navigation.Background,
      },
      headerTintColor: Styles.color.Navigation.Tint,
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: Styles.styles.Navigation.FontWeight,
        width: '80%',
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