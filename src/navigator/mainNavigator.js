import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial165502Navigator from '../features/Tutorial165502/navigator';
import NotificationList165474Navigator from '../features/NotificationList165474/navigator';
import Settings165473Navigator from '../features/Settings165473/navigator';
import Settings165465Navigator from '../features/Settings165465/navigator';
import UserProfile165463Navigator from '../features/UserProfile165463/navigator';
import BlankScreen17165441Navigator from '../features/BlankScreen17165441/navigator';
import BlankScreen16165440Navigator from '../features/BlankScreen16165440/navigator';
import Settings4165438Navigator from '../features/Settings4165438/navigator';
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
Tutorial165502: { screen: Tutorial165502Navigator },
NotificationList165474: { screen: NotificationList165474Navigator },
Settings165473: { screen: Settings165473Navigator },
Settings165465: { screen: Settings165465Navigator },
UserProfile165463: { screen: UserProfile165463Navigator },
BlankScreen17165441: { screen: BlankScreen17165441Navigator },
BlankScreen16165440: { screen: BlankScreen16165440Navigator },
Settings4165438: { screen: Settings4165438Navigator },
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
