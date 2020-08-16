import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'; 
const categoryItem = (props) => {

    return(
        <TouchableOpacity style={styles.item} onPress={props.onSelect}>
       <View style={{...styles.itemContainer,backgroundColor: props.color}}>
       <Text style={styles.title}>{props.title}</Text>
       </View>
   </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flex:1,
        height: 150,
        margin: 15
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        shadowColor: 'black',
        borderRadius: 10,
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 10,
        shadowOffset: {width: 0, height: 2},
        alignItems: 'flex-end',
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        textAlign: 'right'
    }
})

export default categoryItem;