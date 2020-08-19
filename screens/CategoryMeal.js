import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';
const categotyMeal = (props) => {
    const filteredMeals = useSelector((state)=> state.meals.filteredMeals);

    const catId = props.navigation.getParam('category').id;

    const meals = filteredMeals.filter((meal)=> meal.categoryIds.includes(catId));

    if(meals.length === 0 ){
        return (
        <View style={styles.screen}><DefaultText>There is no meals match yours filters!</DefaultText></View>
        )
    }
    return <MealList data={meals} navigation={props.navigation}/>
}

categotyMeal.navigationOptions = props => {
    const category = props.navigation.getParam('category');

    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default categotyMeal;