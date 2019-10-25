import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GameScreen from './GameScreen';
import InitialScreen from './InitialScreen';

const NavStack = createStackNavigator({
    InitialScreen: {
        screen: InitialScreen,
    },
    GameScreen: {
        screen: GameScreen,
    }
},
    {
        initialRouteName: 'InitialScreen',
        defaultNavigationOptions: {
            header: null
        }
    });

    
const Nav = createAppContainer(NavStack);
export default Nav;