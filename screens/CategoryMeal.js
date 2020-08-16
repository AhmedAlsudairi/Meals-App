import React from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
const categotyMeal = (props) => {
    const catId = props.navigation.getParam('category').id;

    const meals = MEALS.filter((meal)=> meal.categoryIds.includes(catId));

    const renderItems = (itemData) => {
        return <MealItem 
        title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={()=>{
            props.navigation.navigate('MealDetails');
        }}/>
    }
    return (
        <View style={styles.screen}>
           <FlatList 
           data={meals} 
           renderItem={renderItems} 
           keyExtractor={(meal)=> meal.id}/>
        </View>
    )
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