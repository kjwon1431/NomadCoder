import { createStackNavigator} from "react-navigation-stack";
import { BG_COLOR, WHITE } from "../constants/Colors";

export const createStack = (screen, title) => createStackNavigator({
    Screen: {
        screen,
        navigationOptions: {
            title,
            ...headerStyles
        }
    }
});

export const headerStyles ={
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomWidth:0
    },
    headerTitleStyle: {
        color:"white"
    },
    headerTintColor: WHITE
}