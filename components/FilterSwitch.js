import React from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native'; 
import colors from '../constants/colors';
const filterSwitch = (props) => {

    
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>{props.title}</Text>
                <Switch 
                value={props.value}
                onValueChange={props.onChange}
                trackColor={{true: colors.primary}}/>
            </View>
        )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 7
    },
    title: {
        fontFamily: 'open-sans'
    }
})

export default filterSwitch;