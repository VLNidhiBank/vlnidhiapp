/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../res/color';


const Spinner = ({ size = 30, color = colors?.primaryColor, style }) => {
    return <ActivityIndicator size={size} color={color} style={style} />;
};

export default Spinner;
