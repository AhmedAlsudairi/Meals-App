import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CtegoriesScreen';
import CategoryMealScreen from '../screens/CategoryMeal';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors'
import { color } from 'react-native-reanimated';
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeal: {
        screen: CategoryMealScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
},
{
    defaultNavigationOptions: {
        headerTintColor: colors.primary
    }
})

export default createAppContainer(MealsNavigator);
