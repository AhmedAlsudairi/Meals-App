import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
const mealItem = (props) => {

    return (
        <TouchableOpacity style={styles.item} onPress={props.onSelect}>
            <View style={styles.itemContainer}>
                <View style={{ ...styles.rowItem, ...styles.header }}>
                    <ImageBackground style={styles.image} source={{uri: props.image}}>
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.rowItem, ...styles.details }}>
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
        flex: 1,
        height: 150,
        marginVertical: 10
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden'
    },
    rowItem: {
        flex: 1,
        width: '80%',
        backgroundColor: 'lightgray'
    },
    header: {
        height: 150,
        flex: 3
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        flex:1
    },
    image: {
        height: '100%',
        width: '100%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        justifyContent: 'flex-end',
        width: '100%'
    }
})

export default mealItem;