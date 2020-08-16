import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native'; 
import MealItem from '../components/MealItem';
const categoryItem = (props) => {

    const renderItems = (itemData) => {
        return <MealItem 
        title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelect={()=>{
            props.navigation.navigate('MealDetails',{meal: itemData.item});
        }}/>
    }

    return(
        <View style={styles.screen}>
           <FlatList 
           data={props.data} 
           renderItem={renderItems} 
           keyExtractor={(meal)=> meal.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default categoryItem;