import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons'; 
import {Ionicons} from '@expo/vector-icons'
const headerButton = (props) => {

    return(
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={15}/>
    );
}

export default headerButton;