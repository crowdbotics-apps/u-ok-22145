import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging8165435Navigator from '../features/Messaging8165435/navigator';
import NotificationList9165434Navigator from '../features/NotificationList9165434/navigator';
import Settings10165433Navigator from '../features/Settings10165433/navigator';
import BlankScreen4165427Navigator from '../features/BlankScreen4165427/navigator';
import BlankScreen3165426Navigator from '../features/BlankScreen3165426/navigator';
import BlankScreen2165425Navigator from '../features/BlankScreen2165425/navigator';
import BlankScreen1165424Navigator from '../features/BlankScreen1165424/navigator';
import BlankScreen0165423Navigator from '../features/BlankScreen0165423/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging8165435: { screen: Messaging8165435Navigator },
NotificationList9165434: { screen: NotificationList9165434Navigator },
Settings10165433: { screen: Settings10165433Navigator },
BlankScreen4165427: { screen: BlankScreen4165427Navigator },
BlankScreen3165426: { screen: BlankScreen3165426Navigator },
BlankScreen2165425: { screen: BlankScreen2165425Navigator },
BlankScreen1165424: { screen: BlankScreen1165424Navigator },
BlankScreen0165423: { screen: BlankScreen0165423Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
