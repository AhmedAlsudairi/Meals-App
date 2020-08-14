import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CtegoriesScreen';
import CategoryMealScreen from '../screens/CategoryMeal';
import MealDetailsScreen from '../screens/MealDetailsScreen';

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
})

export default createAppContainer(MealsNavigator);
