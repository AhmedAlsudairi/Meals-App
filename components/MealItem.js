import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';
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
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 150,
        marginVertical: 10,
        alignItems: 'center'
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    rowItem: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightgray'
    },
    header: {
        height: 150,
        flex: 3,
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
        flexDirection: 'column-reverse',
        width: '100%'
    }
})

export default mealItem;