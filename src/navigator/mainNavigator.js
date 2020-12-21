import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen116037Navigator from '../features/CopyOfBlankScreen116037/navigator';
import CopyOfBlankScreen116036Navigator from '../features/CopyOfBlankScreen116036/navigator';
import CopyOfBlankScreen116034Navigator from '../features/CopyOfBlankScreen116034/navigator';
import CopyOfBlankScreen116033Navigator from '../features/CopyOfBlankScreen116033/navigator';
import BlankScreen116032Navigator from '../features/BlankScreen116032/navigator';
import BlankScreen016031Navigator from '../features/BlankScreen016031/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen116037: { screen: CopyOfBlankScreen116037Navigator },
CopyOfBlankScreen116036: { screen: CopyOfBlankScreen116036Navigator },
CopyOfBlankScreen116034: { screen: CopyOfBlankScreen116034Navigator },
CopyOfBlankScreen116033: { screen: CopyOfBlankScreen116033Navigator },
BlankScreen116032: { screen: BlankScreen116032Navigator },
BlankScreen016031: { screen: BlankScreen016031Navigator },

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
