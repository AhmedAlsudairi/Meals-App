import React from 'react';
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import colors from '../constants/colors';

const ctegories = (props) => {

    const renderItems = (category) => {
        return (
             <TouchableOpacity style={styles.item} onPress={()=>{
                 props.navigation.navigate('CategoryMeal',{category: category.item})
             }}>
            <View >
            <Text>{category.item.title}</Text>
            </View>
        </TouchableOpacity>
        )
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


const styles = StyleSheet.create({
    item: {
        flex:1,
        height: 150,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ctegories;