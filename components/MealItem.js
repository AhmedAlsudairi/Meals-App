import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'; 
const mealItem = (props) => {

    return(
        <TouchableOpacity style={styles.item} onPress={props.onSelect}>
       <View style={styles.itemContainer}>
        <View style={{...styles.rowItem,...styles.header}}>
            <Text>{props.title}</Text>
            </View>
        <View style={{...styles.rowItem,...styles.details}}>
    <Text>{props.duration}m</Text>
    <Text>{props.complexity.toUpperCase()}</Text>
    <Text>{props.affordability.toUpperCase()}</Text>
        </View>
       </View>
   </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flex:1,
        height: 150,
        marginVertical: 10
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowItem: {
        flex: 1,
        width:'80%',
        backgroundColor: 'gray',
        padding: 10
    },
    header: {
        height: '90%'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default mealItem;