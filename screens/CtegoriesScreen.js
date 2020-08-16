import React from 'react';
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import colors from '../constants/colors';
import { createAppContainer } from 'react-navigation';
import CategoryItem from '../components/CategotyItem'
const ctegories = (props) => {

    const renderItems = (category) => {
        return <CategoryItem color={category.item.color} title={category.item.title} onSelect={()=>{
            props.navigation.navigate('CategoryMeal',{category: category.item})
        }}/>
    }
    

    return (
            <FlatList 
            keyExtractor={(item)=> item.id}
            data={CATEGORIES} 
            numColumns={2} 
            renderItem={renderItems}
            />
    )

    
}

ctegories.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    
})
export default ctegories;