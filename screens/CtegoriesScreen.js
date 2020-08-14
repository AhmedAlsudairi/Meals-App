import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

const Ctegories = (props) => {

    return (
        <View style={styles.screen}>
            <Text>Ctegories Screen</Text>
            <Button title='CategoryMeal' onPress={()=> {
                props.navigation.navigate('CategoryMeal')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Ctegories;